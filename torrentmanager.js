(function () {
    'use strict';

    /**
     * Минимальные языковые настройки
     */
    function initLang() {
      Lampa.Lang.add({
        actionSentSuccessfully: {
          "en": "Action sent successfully",
          "ru": "Действие успешно отправлено"
        },
        actionReturnedError: {
          en: "Action returned an error",
          ru: "Действие вернуло ошибку"
        }
      });
    }

    /**
     * Получить URL qBittorrent сервера
     */
    function getUrl() {
      var url = Lampa.Storage.field("lmetorrentqBittorentUrl");
      if (!url) {
        throw new Error("URL qBittorrent не настроен. Пожалуйста, укажите адрес сервера в настройках.");
      }
      // Убираем завершающий слэш, если есть
      url = url.replace(/\/$/, '');
      return url;
    }

    /**
     * Получить URL прокси-сервера
     */
    function getProxyServerUrl() {
      var proxyUrl = Lampa.Storage.get("lmetorrentqBittorentProxyServerUrl", "");
      if (!proxyUrl) {
        throw new Error("URL прокси-сервера не настроен. Пожалуйста, укажите адрес прокси-сервера в настройках.");
      }
      return proxyUrl;
    }

    /**
     * Отправляет запрос к qBittorrent API через backend прокси-сервер
     * @param {string} targetUrl - URL qBittorrent API
     * @param {string} method - HTTP метод (GET, POST, etc.)
     * @param {Object} headers - HTTP заголовки
     * @param {Object|string} data - Данные для отправки (для POST запросов)
     * @returns {Promise} - Promise с результатом запроса
     */
    function makeRequestViaProxy(targetUrl, method, headers, data) {
      return new Promise(function(resolve, reject) {
        var proxyUrl = getProxyServerUrl();
        
        // Подготавливаем данные для отправки в backend прокси
        var requestData = {
          targetUrl: targetUrl,
          method: method,
          headers: headers || {},
          data: data || null
        };
        
        // Отправляем запрос в backend прокси
        $.ajax({
          url: proxyUrl + '/proxy',
          method: "POST",
          timeout: method === "GET" ? 0 : 10000,
          headers: {
            "Content-Type": "application/json"
          },
          data: JSON.stringify(requestData),
          dataType: "text"
        }).done(function(responseText) {
          try {
            // Пытаемся распарсить JSON
            var response = JSON.parse(responseText);
            if (response.success === false) {
              reject(new Error(response.error || 'Unknown error from proxy server'));
              return;
            }
            // Если это JSON объект с данными
            if (typeof response === 'object' && response.data !== undefined) {
              try {
                var parsedData = typeof response.data === 'string' ? JSON.parse(response.data) : response.data;
                resolve(parsedData);
              } catch (e) {
                resolve(response.data);
              }
            } else {
              // Пытаемся распарсить как JSON, если не получилось - возвращаем как есть
              try {
                var parsed = JSON.parse(responseText);
                resolve(parsed);
              } catch (e) {
                resolve(responseText);
              }
            }
          } catch (e) {
            // Если не JSON, возвращаем как есть (например, "Ok." для авторизации)
            resolve(responseText);
          }
        }).fail(function(jqXHR, textStatus, errorThrown) {
          var errorMsg = "Ошибка прокси-сервера: " + textStatus;
          if (jqXHR.status) {
            errorMsg += " (HTTP " + jqXHR.status + ")";
          }
          if (jqXHR.responseText) {
            try {
              var errorResponse = JSON.parse(jqXHR.responseText);
              if (errorResponse.error) {
                errorMsg += " - " + errorResponse.error;
              }
            } catch (e) {
              errorMsg += " - " + jqXHR.responseText.substring(0, 200);
            }
          }
          reject(new Error(errorMsg));
        });
      });
    }

    /**
     * Получить HTTP заголовки для запросов
     */
    function getHeaders(type) {
      var headers = {};
      if (type) headers["Content-Type"] = type;
      var authKey = Lampa.Storage.get("lmetorrentqBittorentKey");
      if (authKey && authKey !== "PROXY_MODE") {
        if (authKey.startsWith('Basic ')) {
          headers["Authorization"] = authKey;
        } else if (authKey.startsWith('SID=')) {
          headers["Cookie"] = authKey;
        }
      }
      return headers;
    }

    /**
     * Авторизация в qBittorrent
     */
    function auth() {
      return new Promise(function (resolve, reject) {
        var username = Lampa.Storage.field("lmetorrentqBittorentUser");
        var password = Lampa.Storage.field("lmetorrentqBittorentPass");
        if (!username || !password) {
          reject(new Error("Username или password не настроены"));
          return;
        }
        var url = getUrl();
        var targetUrl = url + "/api/v2/auth/login";
        console.log('TDM Auth Target URL:', targetUrl);
        var authHeaders = {};
        authHeaders["Content-Type"] = "application/x-www-form-urlencoded";
        
        var loginData = {
          username: username,
          password: password
        };
        
        // Используем backend прокси-сервер
        makeRequestViaProxy(targetUrl, "POST", authHeaders, loginData)
          .then(function(response) {
            // Обрабатываем ответ от прокси
            if (response === "Ok." || (typeof response === 'string' && response.trim() === "Ok.")) {
              // Сохраняем Basic Auth для последующих запросов
              var authString = btoa(username + ":" + password);
              Lampa.Storage.set("lmetorrentqBittorentKey", "Basic " + authString);
              console.log('TDM Auth: Success via Proxy, Basic Auth saved');
              resolve(true);
            } else {
              console.error('TDM Auth error:', response);
              reject(new Error("Ошибка аутентификации: " + response));
            }
          })
          .catch(function(error) {
            console.error('TDM Auth error:', error);
            reject(error);
          });
      });
    }

    /**
     * Отправить торрент на закачку в qBittorrent
     * @param {Object} selectedTorrent - Выбранный торрент
     * @param {string} labels - Метки для торрента (например, "movie/123" или "tv/456")
     * @param {string} dtype - Тип данных ("Movies" или "TV")
     */
    function SendTask(selectedTorrent, labels, dtype) {
      if (!selectedTorrent) {
        return;
      }
      var url = getUrl();
      var targetUrl = url + "/api/v2/torrents/add";
      
      var taskData = {
        "tags": labels,
        "urls": selectedTorrent.MagnetUri ? selectedTorrent.MagnetUri : selectedTorrent.Link
      };
      
      return new Promise(function (resolve, reject) {
        // Проверяем авторизацию
        var authKey = Lampa.Storage.get("lmetorrentqBittorentKey");
        var authPromise = (!authKey || authKey === "PROXY_MODE") ? auth() : Promise.resolve();
        
        authPromise.then(function() {
          // Используем backend прокси-сервер
          return makeRequestViaProxy(targetUrl, "POST", getHeaders("application/x-www-form-urlencoded"), taskData);
        }).then(function (response) {
          try {
            console.log('TDM', 'Send file:', response);
            resolve(Lampa.Bell.push({
              text: Lampa.Lang.translate('actionSentSuccessfully')
            }));
          } catch (error) {
            console.log('TDM', 'Send file:', error);
            reject(Lampa.Bell.push({
              text: Lampa.Lang.translate('actionReturnedError')
            }));
          }
        }).catch(function (error) {
          console.log('TDM', 'Send file:', error);
          // Пробуем перелогиниться при ошибке
          if (error.message && error.message.includes('403')) {
            Lampa.Storage.remove("lmetorrentqBittorentKey");
            auth().then(function() {
              return makeRequestViaProxy(targetUrl, "POST", getHeaders("application/x-www-form-urlencoded"), taskData);
            }).then(function (response) {
              resolve(Lampa.Bell.push({
                text: Lampa.Lang.translate('actionSentSuccessfully')
              }));
            }).catch(function (error2) {
              reject(Lampa.Bell.push({
                text: Lampa.Lang.translate('actionReturnedError')
              }));
            });
          } else {
            reject(Lampa.Bell.push({
              text: Lampa.Lang.translate('actionReturnedError')
            }));
          }
        });
      });
    }

    /**
     * Добавить опцию загрузки в меню фильма
     */
    function Send() {
      function send2qBittorrent(selectedTorrent, labels, dtype) {
        SendTask(selectedTorrent, labels, dtype);
      }
      
      Lampa.Listener.follow('torrent', function (e) {
        if (e.type === 'onlong') {
          var selectedTorrent = e.element;
          var movie = Lampa.Activity.active().movie;
          var labels = (movie && movie.first_air_date) ? "tv/" + movie.id : (movie ? "movie/" + movie.id : null);
          var dtype = (movie && movie.first_air_date) ? "TV" : "Movies";
          
          var onSelectApp = function onSelectApp(a) {
            a.send2app(selectedTorrent, labels ? labels : null, dtype);
          };
          
          e.menu.push({
            title: "<div class=\"btnTDdownload wait\">\n                            <svg class=\"btnTDdownload\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"> <path d=\"M8.5 7L8.5 14M8.5 14L11 11M8.5 14L6 11\" stroke=\"#ffffff\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M15.5 7L15.5 14M15.5 14L18 11M15.5 14L13 11\" stroke=\"#ffffff\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M18 17H12H6\" stroke=\"#ffffff\" stroke-width=\"1.5\" stroke-linecap=\"round\"></path> <path d=\"M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z\" stroke=\"#ffffff\" stroke-width=\"1.5\"></path> </g></svg>\n                            qBittorrent</div>",
            send2app: send2qBittorrent,
            onSelect: onSelectApp
          });
        }
      });
    }

    /**
     * Настройки плагина
     */
    function initSettings(manifest) {
      // Создание пункта меню в настройках
      Lampa.SettingsApi.addComponent({
        component: manifest.component,
        name: manifest.name,
        icon: manifest.icon
      });
      
      // URL qBittorrent
      Lampa.SettingsApi.addParam({
        component: manifest.component,
        param: {
          name: manifest.component + "qBittorentUrl",
          type: "input",
          placeholder: '',
          values: '',
          "default": ''
        },
        field: {
          name: "Address"
        },
        onRender: function onRender(item) {
          item.show();
        },
        onChange: function onChange(item) {
          Lampa.Settings.update();
        }
      });
      
      // Username
      Lampa.SettingsApi.addParam({
        component: manifest.component,
        param: {
          name: manifest.component + "qBittorentUser",
          type: "input",
          placeholder: 'admin',
          values: '',
          "default": ''
        },
        field: {
          name: "Username"
        },
        onRender: function onRender(item) {
          item.show();
        },
        onChange: function onChange(item) {
          Lampa.Settings.update();
        }
      });
      
      // Password
      Lampa.SettingsApi.addParam({
        component: manifest.component,
        param: {
          name: manifest.component + "qBittorentPass",
          type: "input",
          placeholder: 'password',
          values: '',
          "default": ''
        },
        field: {
          name: "Password"
        },
        onRender: function onRender(item) {
          item.show();
        },
        onChange: function onChange(item) {
          Lampa.Settings.update();
        }
      });
      
      // Proxy Server URL
      Lampa.SettingsApi.addParam({
        component: manifest.component,
        param: {
          name: manifest.component + "qBittorentProxyServerUrl",
          type: "input",
          placeholder: 'http://localhost:3000',
          values: '',
          "default": ''
        },
        field: {
          name: "Backend Proxy Server URL",
          description: "URL вашего backend прокси-сервера (обязательно). Например: http://192.168.0.241:3000"
        },
        onRender: function onRender(item) {
          item.show();
        },
        onChange: function onChange(item) {
          Lampa.Settings.update();
        }
      });
    }

    /**
     * Манифест плагина
     */
    var MANIFEST = {
      type: 'other',
      version: '2.7-simple',
      author: '@lme_chat',
      name: 'Torrent Manager (Simple)',
      description: 'Отправка фильмов на закачку в qBittorrent',
      component: 'lmetorrent',
      icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"200\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M13.684 23.94a12.013 12.013 0 0 0 9.599-7.79c-.118.044-.26.096-.432.147c-2 .59-3.404-.466-3.687-.649c-.283-.18-.587-.48-.643-.464c-.183 1.132-1.218 2.706-3.58 3.42c-1.295.391-2.687.4-3.681-.157l.328.822c.13.328.351.866.488 1.192c0 0 .858 2.044 1.608 3.48M2.723 7.153l3.54-.66c.323-.059.68.124.794.407l2.432 6.07c.332.633.399.773.615 1.043c0 0 1.68 2.398 4.24 1.812c1.726-.394 2.532-1.69 2.587-2.612c.057-.296-.032-.669-.185-1.016L13.832 5.61c-.117-.266.022-.527.306-.581l2.953-.55a.69.69 0 0 1 .706.376l3.227 6.91c.13.276.394.712.588.966c0 0 .671.964 1.747.78c.266 0 .569-.143.569-.143c.047-.43.072-.866.072-1.31c0-6.627-5.373-12-12.002-12C5.372.06 0 5.433 0 12.06c0 5.319 3.46 9.827 8.252 11.402a24.768 24.768 0 0 1-.919-2.121L2.298 7.808c-.111-.297.083-.59.425-.654\"/></svg>"
    };

    /**
     * Добавить CSS стили для кнопки загрузки
     */
    function addStyles() {
      var style = "<style>\n        @charset 'UTF-8';\n        .btnTDdownload {\n            display: -webkit-box;\n            display: -webkit-flex;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-align: center;\n            -webkit-align-items: center;\n            -ms-flex-align: center;\n            align-items: center;\n        }\n        svg.btnTDdownload {\n            width: 36px;\n            height: 36px;\n            margin-right: 5%;\n        }\n    </style>";
      if ($('style[data-lmetorrent-simple]').length === 0) {
        $('head').append($(style).attr('data-lmetorrent-simple', 'true'));
      }
    }

    /**
     * Инициализация плагина
     */
    function initializePlugin() {
      try {
        // Инициализация языков
        initLang();

        // Добавление CSS стилей
        addStyles();

        // Регистрация плагина в манифесте
        Lampa.Manifest.plugins = MANIFEST;

        // Инициализация настроек
        initSettings(MANIFEST);

        // Инициализация отправки на закачку
        Send();
        
        console.log('TDM Simple: Plugin initialized successfully');
      } catch (error) {
        console.error('TDM Simple', 'Error initializing plugin:', error);
      }
    }

    /**
     * Запуск плагина когда Lampa готова
     */
    function startPlugin() {
      window.plugin_lmetorrent_simple_ready = true;
      if (window.appready) {
        initializePlugin();
      } else {
        Lampa.Listener.follow('app', function (e) {
          if (e.type === 'ready') {
            initializePlugin();
          }
        });
      }
    }

    // Инициализация плагина если еще не инициализирован
    if (!window.plugin_lmetorrent_simple_ready) {
      startPlugin();
    }

})();
