(function () {
    'use strict';

    function Component$1() {
      Lampa.Lang.add({
        pathMovie: {
          "ru": "Путь сохранения фильмов",
          "en": "Path to save movies",
          "uk": "Шлях збереження фільмів"
        },
        pathTV: {
          "ru": "Путь сохранения сериалов",
          "en": "Path to save TV shows",
          "uk": "Шлях збереження серіалів"
        },
        universalAction: {
          ru: "Действие",
          en: "Action",
          uk: "Дія",
          zh: "行动"
        },
        openUniversal: {
          ru: "Открывать в клиенте",
          en: "Open in external client",
          uk: "Відкрити у застосунку",
          zh: "在外部客户端打开"
        },
        copyUniversal: {
          ru: "Копировать ссылку",
          en: "Copy link",
          uk: "Скопіювати посилання",
          zh: "复制到缓冲区"
        },
        tweak: {
          ru: "Tweak",
          en: "Tweak",
          uk: "Tweak",
          zh: "高级设置"
        },
        LMEProxy: {
          ru: "Прокси",
          en: "Proxy",
          uk: "Проксі",
          zh: "Proxy"
        },
        LMEProxyDescription: {
          en: "Enable CORS proxy to bypass cross-origin restrictions when connecting to qBittorrent via HTTPS from a different domain. Required if you get CORS errors.",
          ru: "Включить CORS прокси для обхода ограничений cross-origin при подключении к qBittorrent через HTTPS с другого домена. Необходимо при ошибках CORS.",
          uk: "Увімкнути CORS проксі для обходу обмежень cross-origin при підключенні до qBittorrent через HTTPS з іншого домену. Необхідно при помилках CORS."
        },
        //Auth
        AuthSuccess: {
          en: "Authentication successful",
          ru: "Аутентификация успешна",
          uk: "Аутентифікація успішна"
        },
        AuthDenied: {
          en: "Authentication denied",
          ru: "Аутентификация отклонена",
          uk: "Аутентифікацію відхилено"
        },
        //Panel
        clientNotClient: {
          en: "Either the client is not configured or the server is not responding, check the console, you might find the answer there",
          ru: "Или клиент не настроен или сервер не отвечает, узри консоль, возможно там найдешь ответ",
          uk: "Або клієнт не налаштований, або сервер не відповідає, перевір консоль, можливо там знайдеш відповідь"
        },
        somethingWentWrong: {
          en: "Something went wrong",
          ru: "Что-то пошло не так",
          uk: "Щось пішло не так"
        },
        //Panel action
        actionWithTorrent: {
          en: "Action with torrent",
          ru: "Действие с торрентом",
          uk: "Дія з торрентом"
        },
        resume: {
          en: "Resume",
          ru: "Возобновить",
          uk: "Відновити"
        },
        pause: {
          en: "Pause",
          ru: "Пауза",
          uk: "Пауза"
        },
        "delete": {
          en: "Delete",
          ru: "Удалить",
          uk: "Видалити"
        },
        fullDelete: {
          en: "Full delete",
          ru: "Полное удаление",
          uk: "Повне видалення"
        },
        actionSentSuccessfully: {
          "en": "Action sent successfully",
          "ru": "Действие успешно отправлено",
          "uk": "Дію успішно надіслано"
        },
        actionReturnedError: {
          en: "Action returned an error",
          ru: "Действие вернуло ошибку",
          uk: "Дія повернула помилку"
        },
        torrent_select_file: {
          en: "Select file to play",
          ru: "Выберите файл для воспроизведения",
          uk: "Виберіть файл для відтворення"
        },
        sort_by_name: {
          en: "Sort by name",
          ru: "Сортировать по имени",
          uk: "Сортувати за назвою"
        },
        sort_by_size: {
          en: "Sort by size",
          ru: "Сортировать по размеру",
          uk: "Сортувати за розміром"
        },
        sort_by_progress: {
          en: "Sort by progress",
          ru: "Сортировать по прогрессу",
          uk: "Сортувати за прогресом"
        },
        openCard: {
          en: "Open",
          ru: "Открыть",
          uk: "Відкрити"
        },
        add_metadata: {
          en: "Add metadata",
          ru: "Добавить метаданные",
          uk: "Додати метадані"
        },
        torrentmanager_nothing_found: {
          en: "Nothing found",
          ru: "Ничего не найдено",
          uk: "Нічого не знайдено"
        },
        torrentmanager_metadata_updated: {
          en: "Metadata updated",
          ru: "Метаданные обновлены",
          uk: "Метадані оновлено"
        },
        torrentmanager_metadata_error: {
          en: "Metadata error",
          ru: "Ошибка метаданных",
          uk: "Помилка метаданів"
        },
        torrentmanager_metadata_updated_all: {
          en: "Metadata updated",
          ru: "Метаданные обновлены",
          uk: "Метадані оновлено"
        },
        torrentmanager_metadata_added: {
          en: "Metadata added",
          ru: "Метаданные добавлены",
          uk: "Метадані додано"
        },
        add_metadata_all: {
          en: "Parse all",
          ru: "Парсить все",
          uk: "Парсити все"
        },
        selectResult: {
          en: "Select result",
          ru: "Выберите результат",
          uk: "Виберіть результат"
        }
      });
    }

    function _arrayLikeToArray(r, a) {
      (null == a || a > r.length) && (a = r.length);
      for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
      return n;
    }
    function _arrayWithHoles(r) {
      if (Array.isArray(r)) return r;
    }
    function _arrayWithoutHoles(r) {
      if (Array.isArray(r)) return _arrayLikeToArray(r);
    }
    function asyncGeneratorStep(n, t, e, r, o, a, c) {
      try {
        var i = n[a](c),
          u = i.value;
      } catch (n) {
        return void e(n);
      }
      i.done ? t(u) : Promise.resolve(u).then(r, o);
    }
    function _asyncToGenerator(n) {
      return function () {
        var t = this,
          e = arguments;
        return new Promise(function (r, o) {
          var a = n.apply(t, e);
          function _next(n) {
            asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
          }
          function _throw(n) {
            asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
          }
          _next(void 0);
        });
      };
    }
    function _classCallCheck(a, n) {
      if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
    }
    function _defineProperties(e, r) {
      for (var t = 0; t < r.length; t++) {
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
      }
    }
    function _createClass(e, r, t) {
      return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
      }), e;
    }
    function _createForOfIteratorHelper(r, e) {
      var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
      if (!t) {
        if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
          t && (r = t);
          var n = 0,
            F = function () {};
          return {
            s: F,
            n: function () {
              return n >= r.length ? {
                done: !0
              } : {
                done: !1,
                value: r[n++]
              };
            },
            e: function (r) {
              throw r;
            },
            f: F
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var o,
        a = !0,
        u = !1;
      return {
        s: function () {
          t = t.call(r);
        },
        n: function () {
          var r = t.next();
          return a = r.done, r;
        },
        e: function (r) {
          u = !0, o = r;
        },
        f: function () {
          try {
            a || null == t.return || t.return();
          } finally {
            if (u) throw o;
          }
        }
      };
    }
    function _defineProperty(e, r, t) {
      return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[r] = t, e;
    }
    function _inherits(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0
        }
      }), Object.defineProperty(t, "prototype", {
        writable: !1
      }), e && _setPrototypeOf(t, e);
    }
    function _iterableToArray(r) {
      if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
    }
    function _iterableToArrayLimit(r, l) {
      var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
      if (null != t) {
        var e,
          n,
          i,
          u,
          a = [],
          f = !0,
          o = !1;
        try {
          if (i = (t = t.call(r)).next, 0 === l) {
            if (Object(t) !== t) return;
            f = !1;
          } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
        } catch (r) {
          o = !0, n = r;
        } finally {
          try {
            if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
          } finally {
            if (o) throw n;
          }
        }
        return a;
      }
    }
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function ownKeys(e, r) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function (r) {
          return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
      }
      return t;
    }
    function _objectSpread2(e) {
      for (var r = 1; r < arguments.length; r++) {
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
          _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
      }
      return e;
    }
    function _regenerator() {
      /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
      var e,
        t,
        r = "function" == typeof Symbol ? Symbol : {},
        n = r.iterator || "@@iterator",
        o = r.toStringTag || "@@toStringTag";
      function i(r, n, o, i) {
        var c = n && n.prototype instanceof Generator ? n : Generator,
          u = Object.create(c.prototype);
        return _regeneratorDefine(u, "_invoke", function (r, n, o) {
          var i,
            c,
            u,
            f = 0,
            p = o || [],
            y = !1,
            G = {
              p: 0,
              n: 0,
              v: e,
              a: d,
              f: d.bind(e, 4),
              d: function (t, r) {
                return i = t, c = 0, u = e, G.n = r, a;
              }
            };
          function d(r, n) {
            for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) {
              var o,
                i = p[t],
                d = G.p,
                l = i[2];
              r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0));
            }
            if (o || r > 1) return a;
            throw y = !0, n;
          }
          return function (o, p, l) {
            if (f > 1) throw TypeError("Generator is already running");
            for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) {
              i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u);
              try {
                if (f = 2, i) {
                  if (c || (o = "next"), t = i[o]) {
                    if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object");
                    if (!t.done) return t;
                    u = t.value, c < 2 && (c = 0);
                  } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1);
                  i = e;
                } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break;
              } catch (t) {
                i = e, c = 1, u = t;
              } finally {
                f = 1;
              }
            }
            return {
              value: t,
              done: y
            };
          };
        }(r, o, i), !0), u;
      }
      var a = {};
      function Generator() {}
      function GeneratorFunction() {}
      function GeneratorFunctionPrototype() {}
      t = Object.getPrototypeOf;
      var c = [][n] ? t(t([][n]())) : (_regeneratorDefine(t = {}, n, function () {
          return this;
        }), t),
        u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);
      function f(e) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e;
      }
      return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine(u), _regeneratorDefine(u, o, "Generator"), _regeneratorDefine(u, n, function () {
        return this;
      }), _regeneratorDefine(u, "toString", function () {
        return "[object Generator]";
      }), (_regenerator = function () {
        return {
          w: i,
          m: f
        };
      })();
    }
    function _regeneratorDefine(e, r, n, t) {
      var i = Object.defineProperty;
      try {
        i({}, "", {});
      } catch (e) {
        i = 0;
      }
      _regeneratorDefine = function (e, r, n, t) {
        if (r) i ? i(e, r, {
          value: n,
          enumerable: !t,
          configurable: !t,
          writable: !t
        }) : e[r] = n;else {
          function o(r, n) {
            _regeneratorDefine(e, r, function (e) {
              return this._invoke(r, n, e);
            });
          }
          o("next", 0), o("throw", 1), o("return", 2);
        }
      }, _regeneratorDefine(e, r, n, t);
    }
    function _setPrototypeOf(t, e) {
      return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
        return t.__proto__ = e, t;
      }, _setPrototypeOf(t, e);
    }
    function _slicedToArray(r, e) {
      return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
    }
    function _toConsumableArray(r) {
      return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
    }
    function _toPrimitive(t, r) {
      if ("object" != typeof t || !t) return t;
      var e = t[Symbol.toPrimitive];
      if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === r ? String : Number)(t);
    }
    function _toPropertyKey(t) {
      var i = _toPrimitive(t, "string");
      return "symbol" == typeof i ? i : i + "";
    }
    function _typeof(o) {
      "@babel/helpers - typeof";

      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
        return typeof o;
      } : function (o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, _typeof(o);
    }
    function _unsupportedIterableToArray(r, a) {
      if (r) {
        if ("string" == typeof r) return _arrayLikeToArray(r, a);
        var t = {}.toString.call(r).slice(8, -1);
        return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
      }
    }
    function _wrapRegExp() {
      _wrapRegExp = function (e, r) {
        return new BabelRegExp(e, void 0, r);
      };
      var e = RegExp.prototype,
        r = new WeakMap();
      function BabelRegExp(e, t, p) {
        var o = RegExp(e, t);
        return r.set(o, p || r.get(e)), _setPrototypeOf(o, BabelRegExp.prototype);
      }
      function buildGroups(e, t) {
        var p = r.get(t);
        return Object.keys(p).reduce(function (r, t) {
          var o = p[t];
          if ("number" == typeof o) r[t] = e[o];else {
            for (var i = 0; void 0 === e[o[i]] && i + 1 < o.length;) i++;
            r[t] = e[o[i]];
          }
          return r;
        }, Object.create(null));
      }
      return _inherits(BabelRegExp, RegExp), BabelRegExp.prototype.exec = function (r) {
        var t = e.exec.call(this, r);
        if (t) {
          t.groups = buildGroups(t, this);
          var p = t.indices;
          p && (p.groups = buildGroups(p, this));
        }
        return t;
      }, BabelRegExp.prototype[Symbol.replace] = function (t, p) {
        if ("string" == typeof p) {
          var o = r.get(this);
          return e[Symbol.replace].call(this, t, p.replace(/\$<([^>]+)(>|$)/g, function (e, r, t) {
            if ("" === t) return e;
            var p = o[r];
            return Array.isArray(p) ? "$" + p.join("$") : "number" == typeof p ? "$" + p : "";
          }));
        }
        if ("function" == typeof p) {
          var i = this;
          return e[Symbol.replace].call(this, t, function () {
            var e = arguments;
            return "object" != typeof e[e.length - 1] && (e = [].slice.call(e)).push(buildGroups(e, i)), p.apply(this, e);
          });
        }
        return e[Symbol.replace].call(this, t, p);
      }, _wrapRegExp.apply(this, arguments);
    }

    function buildTmdbImageUrl(path) {
      var posterSize = Lampa.Storage.field('poster_size') || 'w200';
      return Lampa.Api.img(path, posterSize);
    }
    function buildTmdbImagesApiUrl(label) {
      var tmdbLang = Lampa.Storage.field('tmdb_lang') || Lampa.Storage.get('language') || 'en';
      return Lampa.TMDB.api("".concat(label, "/images?api_key=").concat(Lampa.TMDB.key(), "&language=").concat(tmdbLang));
    }
    function fetchPosterFromSource(method, id) {
      var source = Lampa.Storage.get('source', 'tmdb');
      if (!source || source === 'tmdb') return Promise.resolve('');
      return new Promise(function (resolve) {
        Lampa.Api.full({
          id: id,
          method: method,
          source: source
        }, function (data) {
          var movie = data.movie || data;
          var poster = movie.poster || movie.img || '';
          if (poster) return resolve(poster);
          var path = movie.poster_path || movie.backdrop_path || movie.profile_path || '';
          if (path) return resolve(buildTmdbImageUrl(path));
          resolve('');
        }, function () {
          return resolve('');
        });
      });
    }
    function getPosterFromLabels(_x) {
      return _getPosterFromLabels.apply(this, arguments);
    }
    function _getPosterFromLabels() {
      _getPosterFromLabels = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(labels) {
        var labelArray, label, _label$split, _label$split2, method, id, sourcePoster, response, poster, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              // Ищем лейблы, которые начинаются на tv или movie и содержат цифры после косой
              labelArray = Array.isArray(labels) ? labels : labels.split(','); // Find label matching tv/movie pattern
              label = labelArray.find(function (label) {
                return /^(tv|movie)\/\d+$/.test(label);
              });
              if (label) {
                _context.n = 1;
                break;
              }
              return _context.a(2, './img/img_load.svg');
            case 1:
              _label$split = label.split('/'), _label$split2 = _slicedToArray(_label$split, 2), method = _label$split2[0], id = _label$split2[1];
              _context.n = 2;
              return fetchPosterFromSource(method, id);
            case 2:
              sourcePoster = _context.v;
              if (!sourcePoster) {
                _context.n = 3;
                break;
              }
              return _context.a(2, sourcePoster);
            case 3:
              _context.p = 3;
              _context.n = 4;
              return new Promise(function (resolve, reject) {
                Lampa.Network.silent(buildTmdbImagesApiUrl(label), resolve, reject);
              });
            case 4:
              response = _context.v;
              poster = response && response.posters && response.posters[0];
              if (!(poster && poster.file_path)) {
                _context.n = 5;
                break;
              }
              return _context.a(2, buildTmdbImageUrl(poster.file_path));
            case 5:
              _context.n = 7;
              break;
            case 6:
              _context.p = 6;
              _t = _context.v;
              console.log('getPosterFromLabels: images API failed', _t);
            case 7:
              return _context.a(2, './img/img_load.svg');
          }
        }, _callee, null, [[3, 6]]);
      }));
      return _getPosterFromLabels.apply(this, arguments);
    }

    function getUrl$1() {
      var url = Lampa.Storage.field("lmetorrentqBittorentUrl");
      if (!url) {
        throw new Error("URL qBittorrent не настроен. Пожалуйста, укажите адрес сервера в настройках.");
      }
      // Убираем завершающий слэш, если есть
      url = url.replace(/\/$/, '');
      return url;
    }
    function getProxy$1() {
      if (Lampa.Storage.field("lmetorrentqBittorentProxy") === true) {
        return 'https://p01--corsproxy--h7ynqrkjrc6c.code.run/?url=';
      }
      return "";
    }
    function buildProxyUrl(proxy, targetUrl) {
      if (!proxy) return targetUrl;
      // Если прокси использует формат с параметром ?url=
      if (proxy.includes('?url=')) {
        return proxy + encodeURIComponent(targetUrl);
      }
      // Иначе просто конкатенируем
      return proxy + targetUrl;
    }
    function getHeaders$3(type) {
      var headers = {};
      if (type) headers["Content-Type"] = type;
      var authKey = Lampa.Storage.get("lmetorrentqBittorentKey");
      if (authKey) {
        if (authKey.startsWith('Basic ')) {
          headers["Authorization"] = authKey;
        } else {
          headers["Cookie"] = authKey;
        }
      }
      if (Lampa.Storage.field('lmetorrentqBittorentProxy') === true) headers["x-requested-with"] = 'lme-plugins';
      return headers;
    }
    function auth$3() {
      return new Promise(function (resolve, reject) {
        var username = Lampa.Storage.field("lmetorrentqBittorentUser");
        var password = Lampa.Storage.field("lmetorrentqBittorentPass");
        if (!username || !password) {
          reject(new Error("Username или password не настроены"));
          return;
        }
        var url = getUrl$1();
        var proxy = getProxy$1();
        var targetUrl = "".concat(url, "/api/v2/auth/login");
        var loginUrl = buildProxyUrl(proxy, targetUrl);
        console.log('TDM Auth URL:', loginUrl, 'Target URL:', targetUrl);
        $.ajax({
          url: loginUrl,
          method: "POST",
          timeout: 10000,
          headers: getHeaders$3("application/x-www-form-urlencoded"),
          data: {
            username: username,
            password: password
          }
        }).done(function (response, textStatus, jqXHR) {
          if (response === "Ok.") {
            // Пробуем получить cookie из заголовков ответа
            var setCookieHeader = jqXHR.getResponseHeader('Set-Cookie');
            if (setCookieHeader) {
              var sidMatch = setCookieHeader.match(/SID=([^;]+)/);
              if (sidMatch) {
                Lampa.Storage.set("lmetorrentqBittorentKey", "SID=".concat(sidMatch[1]));
                console.log('TDM Auth: Success, cookie from Set-Cookie header saved');
              }
            }
            // Также проверяем document.cookie (может работать без прокси)
            if (!Lampa.Storage.get("lmetorrentqBittorentKey")) {
              var cookies = document.cookie.split(';');
              var sidCookie = cookies.find(function (cookie) {
                return cookie.trim().startsWith('SID=');
              });
              if (sidCookie) {
                var sidValue = sidCookie.split('=')[1].trim();
                Lampa.Storage.set("lmetorrentqBittorentKey", "SID=".concat(sidValue));
                console.log('TDM Auth: Success, cookie from document.cookie saved');
              }
            }
            // Если cookie все еще нет, используем username:password в заголовке Authorization
            if (!Lampa.Storage.get("lmetorrentqBittorentKey")) {
              var authString = btoa("".concat(username, ":").concat(password));
              Lampa.Storage.set("lmetorrentqBittorentKey", "Basic ".concat(authString));
              console.log('TDM Auth: Success, using Basic Auth');
            }
            resolve(true);
          } else {
            console.error('TDM Auth error:', response);
            reject(new Error("Ошибка аутентификации: ".concat(response)));
          }
        }).fail(function (jqXHR, textStatus, errorThrown) {
          var errorMsg = "Ошибка аутентификации: ".concat(textStatus);
          if (jqXHR.status) {
            errorMsg += " (HTTP ".concat(jqXHR.status, ")");
          }
          if (jqXHR.responseText) {
            var responseText = jqXHR.responseText.substring(0, 200);
            errorMsg += " - ".concat(responseText);
            // Проверяем на DNS ошибку
            if (responseText.includes('ENOTFOUND') || responseText.includes('getaddrinfo')) {
              errorMsg += "\n\nПрокси не может разрешить домен. Возможные решения:\n1. Проверьте правильность адреса сервера\n2. Попробуйте использовать IP адрес вместо домена\n3. Отключите прокси, если сервер доступен напрямую";
            }
          }
          console.error('TDM Auth error:', {
            status: jqXHR.status,
            statusText: textStatus,
            error: errorThrown,
            responseText: jqXHR.responseText,
            url: loginUrl
          });
          reject(new Error(errorMsg));
        });
      });
    }
    function GetData$3() {
      var _this = this;
      var url = getUrl$1();
      var proxy = getProxy$1();
      var targetUrl = "".concat(url, "/api/v2/sync/maindata");
      var fullUrl = buildProxyUrl(proxy, targetUrl);
      console.log('TDM GetData URL:', fullUrl, 'Target URL:', targetUrl);
      var settings = {
        url: fullUrl,
        method: "GET",
        timeout: 0,
        headers: getHeaders$3()
      };
      var makeRequest = function makeRequest() {
        return $.ajax({
          url: fullUrl,
          method: "GET",
          timeout: 0,
          headers: getHeaders$3()
        });
      };
      var processResponse = function processResponse(response) {
        return new Promise(function (resolve, reject) {
          var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
            var torrents, standardizedResponse, _t8;
            return _regenerator().w(function (_context2) {
              while (1) switch (_context2.n) {
                case 0:
                  _context2.p = 0;
                  if (response.torrents) {
                    _context2.n = 1;
                    break;
                  }
                  resolve([]);
                  return _context2.a(2);
                case 1:
                  torrents = Object.values(response.torrents);
                  _context2.n = 2;
                  return Promise.all(torrents.map(/*#__PURE__*/function () {
                    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(torrent) {
                      var _t, _t2, _t3, _t4, _t5, _t6, _t7;
                      return _regenerator().w(function (_context) {
                        while (1) switch (_context.n) {
                          case 0:
                            _t = torrent.name;
                            _t2 = torrent.infohash_v1;
                            _t3 = torrent.size;
                            _t4 = torrent.state.charAt(0).toUpperCase() + torrent.state.slice(1);
                            _t5 = torrent.tags;
                            _context.n = 1;
                            return getPosterFromLabels(torrent.tags);
                          case 1:
                            _t6 = _context.v;
                            _t7 = torrent.progress;
                            return _context.a(2, {
                              name: _t,
                              id: _t2,
                              size: _t3,
                              state: _t4,
                              labels: _t5,
                              image: _t6,
                              completed: _t7
                            });
                        }
                      }, _callee);
                    }));
                    return function (_x2) {
                      return _ref2.apply(this, arguments);
                    };
                  }()));
                case 2:
                  standardizedResponse = _context2.v;
                  resolve(standardizedResponse);
                  _context2.n = 4;
                  break;
                case 3:
                  _context2.p = 3;
                  _t8 = _context2.v;
                  console.log('TDM', 'GetData:', _t8, response);
                  reject(new Error('Ошибка при обработке данных'));
                case 4:
                  return _context2.a(2);
              }
            }, _callee2, null, [[0, 3]]);
          }));
          return function () {
            return _ref.apply(this, arguments);
          };
        }());
      };
      return new Promise(function (resolve, reject) {
        // Проверяем, есть ли cookie, если нет - логинимся
        if (!Lampa.Storage.get("lmetorrentqBittorentKey")) {
          auth$3().then(function () {
            // После успешного логина делаем запрос
            makeRequest().done(function (response) {
              processResponse(response).then(resolve)["catch"](reject);
            }).fail(function (jqXHR, textStatus, errorThrown) {
              handleError(jqXHR, textStatus, errorThrown, resolve, reject);
            });
          })["catch"](function (authError) {
            reject(authError);
          });
        } else {
          makeRequest().done(function (response) {
            processResponse(response).then(resolve)["catch"](reject);
          }).fail(function (jqXHR, textStatus, errorThrown) {
            handleError(jqXHR, textStatus, errorThrown, resolve, reject);
          });
        }
        function handleError(jqXHR, textStatus, errorThrown, resolve, reject) {
          // Если получили 403, пробуем перелогиниться
          if (jqXHR.status === 403) {
            console.log('TDM GetData: 403 Forbidden, trying to re-authenticate...');
            Lampa.Storage.remove("lmetorrentqBittorentKey");
            auth$3().then(function () {
              // После успешного логина повторяем запрос
              makeRequest().done(function (response) {
                processResponse(response).then(resolve)["catch"](reject);
              }).fail(function (jqXHR2, textStatus2, errorThrown2) {
                var errorMsg2 = "Ошибка подключения к qBittorrent: ".concat(textStatus2);
                if (jqXHR2.status) {
                  errorMsg2 += " (HTTP ".concat(jqXHR2.status, ")");
                }
                if (jqXHR2.responseText) {
                  errorMsg2 += " - ".concat(jqXHR2.responseText.substring(0, 100));
                }
                console.error('TDM GetData error after re-auth:', {
                  status: jqXHR2.status,
                  statusText: textStatus2,
                  error: errorThrown2,
                  responseText: jqXHR2.responseText,
                  url: fullUrl
                });
                reject(new Error(errorMsg2));
              });
            })["catch"](function (authError) {
              reject(authError);
            });
            return;
          }
          var errorMsg = "Ошибка подключения к qBittorrent: ".concat(textStatus);
          if (jqXHR.status) {
            errorMsg += " (HTTP ".concat(jqXHR.status, ")");
          }
          if (jqXHR.responseText) {
            errorMsg += " - ".concat(jqXHR.responseText.substring(0, 100));
          }
          console.error('TDM GetData error:', {
            status: jqXHR.status,
            statusText: textStatus,
            error: errorThrown,
            responseText: jqXHR.responseText,
            url: fullUrl
          });
          reject(new Error(errorMsg));
        }
      });
    }
    function GetInfo$3() {
      var url = getUrl$1();
      var proxy = getProxy$1();
      var targetUrl = "".concat(url, "/api/v2/sync/maindata");
      var fullUrl = buildProxyUrl(proxy, targetUrl);
      var settings = {
        url: fullUrl,
        method: "GET",
        timeout: 0,
        headers: getHeaders$3()
      };
      return new Promise(function (resolve, reject) {
        $.ajax(settings).done(function (response) {
          try {
            var standardizedResponse = {
              "space": response.server_state.free_space_on_disk
            };
            resolve(standardizedResponse);
          } catch (error) {
            reject(new Error('Ошибка при обработке данных'));
          }
        }).fail(function (jqXHR, textStatus, errorThrown) {
          var errorMsg = "Ошибка подключения к qBittorrent: ".concat(textStatus);
          if (jqXHR.status) {
            errorMsg += " (HTTP ".concat(jqXHR.status, ")");
          }
          if (jqXHR.responseText) {
            var responseText = jqXHR.responseText.substring(0, 200);
            errorMsg += " - ".concat(responseText);
            // Проверяем на DNS ошибку
            if (responseText.includes('ENOTFOUND') || responseText.includes('getaddrinfo')) {
              errorMsg += "\n\nПрокси не может разрешить домен. Попробуйте использовать IP адрес вместо домена.";
            }
          }
          console.error('TDM GetInfo error:', {
            status: jqXHR.status,
            statusText: textStatus,
            error: errorThrown,
            url: settings.url,
            responseText: jqXHR.responseText
          });
          reject(new Error(errorMsg));
        });
      });
    }
    function SendCommand$3(btn, torrent_data) {
      return new Promise(function (resolve, reject) {
        var url = getUrl$1();
        var proxy = getProxy$1();
        // First check qBittorrent version
        var versionUrl = buildProxyUrl(proxy, "".concat(url, "/api/v2/app/version"));
        $.ajax({
          url: versionUrl,
          method: "GET",
          headers: getHeaders$3()
        }).then(function (version) {
          var versionNumber = parseFloat(version.replace(/[^\d.]/g, ''));

          // Adjust action based on version
          if (versionNumber >= 5) {
            if (btn.action === 'resume') btn.action = 'start';
            if (btn.action === 'pause') btn.action = 'stop';
          }

          // Then send the command
          var deleteFiles = btn.deleteFiles ? "true" : "";
          var commandUrl = buildProxyUrl(proxy, "".concat(url, "/api/v2/torrents/").concat(btn.action));
          return $.ajax({
            url: commandUrl,
            method: "POST",
            timeout: 0,
            headers: getHeaders$3("application/x-www-form-urlencoded"),
            data: {
              "hashes": torrent_data.id,
              deleteFiles: deleteFiles
            }
          });
        }).then(function () {
          resolve(Lampa.Bell.push({
            text: Lampa.Lang.translate('actionSentSuccessfully')
          }));
        })["catch"](function (error) {
          console.log('TDM', 'Send command:', error);
          reject(Lampa.Bell.push({
            text: Lampa.Lang.translate('actionReturnedError')
          }));
        });
      });
    }
    function SendTask$3(selectedTorrent, labels, dtype) {
      if (!selectedTorrent) {
        return;
      }
      var url = getUrl$1();
      var proxy = getProxy$1();
      var targetUrl = "".concat(url, "/api/v2/torrents/add");
      var fullUrl = buildProxyUrl(proxy, targetUrl);
      var settings = {
        url: fullUrl,
        method: "POST",
        timeout: 0,
        headers: getHeaders$3("application/x-www-form-urlencoded"),
        "data": {
          "tags": labels,
          "urls": selectedTorrent.MagnetUri ? selectedTorrent.MagnetUri : selectedTorrent.Link,
          "category": Lampa.Storage.get("lmetorrentqBittorent".concat(dtype)) ? Lampa.Storage.get("lmetorrentqBittorent".concat(dtype)) : '',
          "firstLastPiecePrio": Lampa.Storage.field("lmetorrentqBittorentfirstLastPiecePrio") ? "true" : "false",
          "sequentialDownload": Lampa.Storage.field("lmetorrentqBittorentSequentialDownload") ? "true" : "false"
        }
      };
      return new Promise(function (resolve, reject) {
        $.ajax(settings).done(function (response) {
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
        }).fail(function (jqXHR, textStatus, errorThrown) {
          console.log('TDM', 'Send file:', textStatus, errorThrown, jqXHR);
          reject(Lampa.Bell.push({
            text: Lampa.Lang.translate('actionReturnedError')
          }));
        });
      });
    }
    function setTags(_x3, _x4) {
      return _setTags.apply(this, arguments);
    }
    function _setTags() {
      _setTags = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(torrentId, tags) {
        var tagValue, url, proxy;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              tagValue = Array.isArray(tags) ? tags.join(',') : tags;
              url = getUrl$1();
              proxy = getProxy$1();
              var tagsUrl = buildProxyUrl(proxy, "".concat(url, "/api/v2/torrents/addTags"));
              return _context3.a(2, $.ajax({
                url: tagsUrl,
                method: "POST",
                timeout: 0,
                headers: getHeaders$3("application/x-www-form-urlencoded"),
                data: {
                  hashes: torrentId,
                  tags: tagValue
                }
              }));
          }
        }, _callee3);
      }));
      return _setTags.apply(this, arguments);
    }
    var Qbittorent = {
      auth: auth$3,
      GetData: GetData$3,
      GetInfo: GetInfo$3,
      SendCommand: SendCommand$3,
      SendTask: SendTask$3,
      setTags: setTags
    };

    /**
     * Torrent Parser Utility
     * 
     * This module provides functionality to parse torrent names and
     * fetch corresponding metadata from TMDB.
     */

    /**
     * Clean torrent name by removing quality, year, and other technical information
     * 
     * @param {string} name - Original torrent name
     * @returns {string} - Cleaned name suitable for metadata search
     */
    function cleanName(name) {
      if (!name) return '';

      // Regular expression to extract the main title from torrent name
      // Removes season/episode markers, year, quality indicators, etc.
      var regex = /*#__PURE__*/_wrapRegExp(/^(.+?)(?:[.\s(]((19|20)\d{2})[.\s)]|S\d{1,2}(?:E\d{1,2})?|[.\s](?:PPV.)?[HP]DTV|(?:HD)?TC|[cC]am|(?:HD)?CAM|B[rR]Rip|WEBRip|WEB-Rip|WEB-DL|WEB|TS|(?:PPV )?WEB-?DL(?: DVDRip)?|H[dD]Rip|DVDRip|DVDRiP|DVDRIP|CamRip|W[EB]B[rR]ip|HDRIP|[Bb]lu[Rr]ay|DvDScr|hdtv)/i, {
        title: 1
      });
      var match = name.match(regex);

      // If we have a match with a title group, use it
      if (match && match.groups && match.groups.title) {
        // Replace dots between words with spaces
        return match.groups.title.replace(/\./g, ' ').trim();
      }

      // Fallback: just replace dots with spaces
      return name.replace(/\./g, ' ').trim();
    }

    /**
     * Search for media metadata on TMDB
     * 
     * @param {string} query - Search query
     * @returns {Promise<Object>} - Promise resolving to TMDB response
     */
    function searchTMDB(_x) {
      return _searchTMDB.apply(this, arguments);
    }
    /**
     * Handle case when multiple results are found
     * 
     * @param {Array} results - Array of TMDB results
     * @returns {Promise<Object>} - Promise resolving to selected media info
     */
    function _searchTMDB() {
      _searchTMDB = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(query) {
        var tmdbLang, url, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              tmdbLang = Lampa.Storage.field('tmdb_lang') || Lampa.Storage.get('language') || 'en';
              url = Lampa.TMDB.api("search/multi?include_adult=true&query=".concat(encodeURIComponent(query), "&api_key=").concat(Lampa.TMDB.key(), "&language=").concat(tmdbLang));
              _context.p = 1;
              _context.n = 2;
              return new Promise(function (resolve, reject) {
                Lampa.Network.silent(url, resolve, reject, null, {
                  timeout: 10000
                });
              });
            case 2:
              return _context.a(2, _context.v);
            case 3:
              _context.p = 3;
              _t = _context.v;
              console.error('TMDB', 'search error:', _t);
              throw new Error("Failed to fetch data from TMDB: ".concat(_t.statusText || _t.message));
            case 4:
              return _context.a(2);
          }
        }, _callee, null, [[1, 3]]);
      }));
      return _searchTMDB.apply(this, arguments);
    }
    function handleMultipleResults(results) {
      return new Promise(function (resolve, reject) {
        var enabled = Lampa.Controller.enabled().name;

        // Format menu items with title and date information
        var menuItems = results.map(function (result) {
          return {
            title: "".concat(result.title || result.name, " (").concat(result.media_type, ")") + (result.media_type === 'tv' && result.first_air_date ? " - ".concat(result.first_air_date) : '') + (result.media_type === 'movie' && result.release_date ? " - ".concat(result.release_date) : ''),
            media_type: result.media_type,
            id: result.id
          };
        });

        // Show selection menu
        Lampa.Select.show({
          title: Lampa.Lang.translate('selectResult'),
          items: menuItems,
          onBack: function onBack() {
            // Повертаємось до попереднього контролера, якщо він існує
            var currentController = Lampa.Controller.enabled();
            if (currentController && currentController.name !== enabled) {
              Lampa.Controller.toggle(enabled);
            } else {
              // Якщо контролер не змінився, просто вимикаємо меню
              Lampa.Controller.toggle('menu');
            }
            reject(new Error('Selection canceled by user'));
          },
          onSelect: function onSelect(selected) {
            resolve({
              media_type: selected.media_type,
              id: selected.id
            });
          }
        });
      });
    }

    /**
     * Process torrents to find metadata
     * 
     * @param {Object|Array} torrentData - Torrent data to process
     * @returns {Promise<Array>} - Promise resolving to array of media info
     */
    function processTorrents(_x2) {
      return _processTorrents.apply(this, arguments);
    }
    function _processTorrents() {
      _processTorrents = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(torrentData) {
        var torrents, results, _t3;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              console.log('TDM', 'Processing torrents:', _typeof(torrentData), torrentData);

              // Ensure we're working with an array
              torrents = Array.isArray(torrentData) ? torrentData : [torrentData];
              _context3.p = 1;
              _context3.n = 2;
              return Promise.all(torrents.map(/*#__PURE__*/function () {
                var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(torrent) {
                  var name, cleanedName, response, _t2;
                  return _regenerator().w(function (_context2) {
                    while (1) switch (_context2.n) {
                      case 0:
                        _context2.p = 0;
                        // Clean the torrent name
                        name = torrent.name || torrent;
                        cleanedName = cleanName(name);
                        if (cleanedName) {
                          _context2.n = 1;
                          break;
                        }
                        console.warn('TDM', 'Empty torrent name after cleaning');
                        return _context2.a(2, null);
                      case 1:
                        _context2.n = 2;
                        return searchTMDB(cleanedName);
                      case 2:
                        response = _context2.v;
                        if (!(!response.results || response.results.length === 0)) {
                          _context2.n = 3;
                          break;
                        }
                        console.log('TDM', 'No results found for ', cleanedName);
                        return _context2.a(2, null);
                      case 3:
                        if (!(response.results.length === 1)) {
                          _context2.n = 4;
                          break;
                        }
                        return _context2.a(2, response.results[0]);
                      case 4:
                        _context2.n = 5;
                        return handleMultipleResults(response.results);
                      case 5:
                        return _context2.a(2, _context2.v);
                      case 6:
                        _context2.p = 6;
                        _t2 = _context2.v;
                        console.error('TDM', 'torrent processing error:', _t2);
                        return _context2.a(2, null);
                    }
                  }, _callee2, null, [[0, 6]]);
                }));
                return function (_x3) {
                  return _ref.apply(this, arguments);
                };
              }()));
            case 2:
              results = _context3.v;
              return _context3.a(2, results.filter(function (result) {
                return result !== null;
              }));
            case 3:
              _context3.p = 3;
              _t3 = _context3.v;
              console.error('TDM', 'torrent processing overall error:', _t3);
              throw _t3;
            case 4:
              return _context3.a(2);
          }
        }, _callee3, null, [[1, 3]]);
      }));
      return _processTorrents.apply(this, arguments);
    }


    /**
     * Генерує зображення з текстом за допомогою Canvas API.
     * @param {string} text - Текст для відображення на зображенні.
     * @returns {string} - URL зображення у форматі data:image/png;base64.
     */
    function textToImage(text) {
      var canvas = document.createElement('canvas');
      var context = canvas.getContext('2d');
      var width = 400;
      var height = 600;
      canvas.width = width;
      canvas.height = height;

      // Фон
      context.fillStyle = '#1a202c'; // Темно-сірий фон
      context.fillRect(0, 0, width, height);

      // Налаштування тексту
      context.fillStyle = '#ffffff'; // Білий колір тексту
      context.font = 'bold 48px Arial';
      context.textAlign = 'center';
      context.textBaseline = 'middle';

      // Розбивка тексту на рядки
      // Спочатку розбиваємо по наявних переносах рядків
      var initialLines = text.split('\n');
      var lines = [];

      // Функція для розбиття довгого слова на частини
      function breakLongWord(word, maxWidth) {
        var brokenLines = [];
        var currentPart = '';
        for (var i = 0; i < word.length; i++) {
          var _char = word[i];
          var testPart = currentPart + _char;
          var metrics = context.measureText(testPart);
          var testWidth = metrics.width;
          if (testWidth > maxWidth && currentPart !== '') {
            brokenLines.push(currentPart);
            currentPart = _char;
          } else {
            currentPart = testPart;
          }
        }
        if (currentPart !== '') {
          brokenLines.push(currentPart);
        }
        return brokenLines;
      }

      // Потім для кожного рядка застосовуємо переноси за шириною
      initialLines.forEach(function (initialLine) {
        var words = initialLine.split(' ');
        var currentLine = '';
        for (var i = 0; i < words.length; i++) {
          var word = words[i];
          // Перевіряємо, чи слово не занадто довге
          var wordMetrics = context.measureText(word);
          if (wordMetrics.width > width - 40) {
            // Якщо є поточний рядок, додаємо його до списку
            if (currentLine !== '') {
              lines.push(currentLine);
              currentLine = '';
            }
            // Розбиваємо довге слово на частини
            var brokenWordLines = breakLongWord(word, width - 40);
            lines.push.apply(lines, _toConsumableArray(brokenWordLines));
          } else {
            // Слово не занадто довге, обробляємо звичайним чином
            var testLine = currentLine === '' ? word : currentLine + ' ' + word;
            var metrics = context.measureText(testLine);
            var testWidth = metrics.width;
            if (testWidth > width - 40 && currentLine !== '') {
              lines.push(currentLine);
              currentLine = word;
            } else {
              currentLine = testLine;
            }
          }
        }
        // Додаємо останній рядок, якщо він не порожній
        if (currentLine !== '') {
          lines.push(currentLine);
        }
      });

      // Відображення тексту
      var lineHeight = 58;
      var startY = (height - lines.length * lineHeight) / 2 + lineHeight / 2;
      lines.forEach(function (line, index) {
        context.fillText(line, width / 2, startY + index * lineHeight);
      });
      return canvas.toDataURL('image/png');
    }

    /**
     * @file IndexedDB утиліти для зберігання метаданих торрентів.
     * Інкапсулює логіку роботи з Lampa.DB (IndexedDB).
     */

    var DB_NAME = 'lme_torrentmanager';
    var DB_VERSION = 4; // Збільшено версію для гарантованого оновлення

    /**
     * Отримує список всіх можливих імен таблиць для всіх клієнтів.
     * @returns {string[]} Масив імен таблиць.
     */
    function getAllTableNames() {
      var clients = ['qbittorent'];
      return clients.map(function (client) {
        return "".concat(client, "_metadata");
      });
    }

    /**
     * Допоміжна функція для отримання назви таблиці (сховища) на основі активного клієнта.
     * @returns {string} Назва таблиці, напр. 'qbittorent_metadata'.
     */
    function getTableName() {
      var client = 'qbittorent';
      return "".concat(client.toLowerCase(), "_metadata");
    }
    var dbPromise = null;

    /**
     * Ініціалізує та відкриває IndexedDB, використовуючи патерн singleton promise.
     * @returns {Promise<object>} Promise, який вирішується об'єктом бази даних Lampa.DB.
     */
    function initDB() {
      if (dbPromise) {
        return dbPromise;
      }
      dbPromise = new Promise(/*#__PURE__*/function () {
        var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(resolve, reject) {
          var allTables, db, _t;
          return _regenerator().w(function (_context) {
            while (1) switch (_context.n) {
              case 0:
                if (Lampa.DB) {
                  _context.n = 1;
                  break;
                }
                console.error('Lampa.DB не визначено.');
                dbPromise = null; // Скидаємо для повторної спроби
                return _context.a(2, reject(new Error('Lampa.DB is not defined')));
              case 1:
                allTables = getAllTableNames();
                db = new Lampa.DB(DB_NAME, allTables, DB_VERSION);
                _context.p = 2;
                _context.n = 3;
                return db.openDatabase();
              case 3:
                console.log("TDM", "Database '".concat(DB_NAME, "' successfully opened/updated to version ").concat(DB_VERSION, "."));
                resolve(db);
                _context.n = 5;
                break;
              case 4:
                _context.p = 4;
                _t = _context.v;
                console.error("TDM", "Critical error '".concat(DB_NAME, "':"), _t);
                dbPromise = null; // Скидаємо для повторної спроби
                reject(_t);
              case 5:
                return _context.a(2);
            }
          }, _callee, null, [[2, 4]]);
        }));
        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
      return dbPromise;
    }
    function getMetadata(_x5) {
      return _getMetadata.apply(this, arguments);
    }
    function _getMetadata() {
      _getMetadata = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(key) {
        var db, tableName, result, _t3;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              _context3.p = 0;
              _context3.n = 1;
              return initDB();
            case 1:
              db = _context3.v;
              tableName = getTableName();
              _context3.n = 2;
              return db.getData(tableName, key);
            case 2:
              result = _context3.v;
              if (!result) {
                _context3.n = 3;
                break;
              }
              return _context3.a(2, result);
            case 3:
              return _context3.a(2, null);
            case 4:
              _context3.n = 6;
              break;
            case 5:
              _context3.p = 5;
              _t3 = _context3.v;
              console.error("TDM", "Error in getMetadata:", _t3);
              throw _t3;
            case 6:
              return _context3.a(2);
          }
        }, _callee3, null, [[0, 5]]);
      }));
      return _getMetadata.apply(this, arguments);
    }


    var regexp2 = /(?:PPV.)?[HP]DTV|(?:HD)?TC|[cC]am|(?:HD)?CAM|B[rR]Rip|WEBRip|WEB-Rip|WEB-DL|WEB|TS|(?:PPV )?WEB-?DL(?: DVDRip)?|H[dD]Rip|DVDRip|DVDRiP|DVDRIP|CamRip|W[EB]B[rR]ip|HDRIP|[Bb]lu[Rr]ay|DvDScr|hdtv/;
    function Item(data) {
      this.id = data.id; // зберігаємо ідентифікатор торренту

      var itemN = Lampa.Template.get('lmetorrent_item__card', {
        title: data.name,
        size: Lampa.Utils.bytesToSize(data.size, 0),
        state: data.state,
        "data-completed": Number((data.completed * 100).toFixed(2)),
        completed: Number((data.completed * 100).toFixed(2)) + "%",
        image: data.image,
        image_src: '',
        quality: data.name.match(regexp2) ? data.name.match(regexp2).toString().replace(/[ .()]/g, '') : ''
      });
      this.render = function () {
        return itemN;
      };

      // Метод для оновлення статусу та прогресу
      this.update = function (newData) {
        // Припускається, що відповідні елементи мають класи для статусу та прогресу
        itemN.find('.lmetorrent_card__state').text(newData.state);
        var progress = Number((newData.completed * 100).toFixed(2));
        itemN.attr("data-completed", progress);
        itemN.find('.lmetorrent_card__completed').text(progress + "%");
      };
      this.destroy = function () {
        itemN.remove();
      };
    }

    function Header(data) {
      var item = Lampa.Template.get("lmetorrent_header", {
        space: Lampa.Utils.bytesToSize(data.space, 0)
      });
      this.render = function () {
        return item;
      };
      this.destroy = function () {
        item.remove();
      };
    }

    /**
     * Оновлення метаданих для одного торента.
     * Викликається з torrent_actions.js
     *
     * @param {Object} torrent - об'єкт торента (як у твоєму списку)
     * @param {Object} client  - інформація про клієнта (тип + налаштування)
     */
    function updateMetadataForTorrent(_x, _x2) {
      return _updateMetadataForTorrent.apply(this, arguments);
    }
    /**
     * Простий TMDB-флоу для пошуку медіа інформації
     *
     * @param {Object} torrent - об'єкт торента
     * @returns {Promise<Object|null>} - нормалізований результат TMDB або null
     */
    function _updateMetadataForTorrent() {
      _updateMetadataForTorrent = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(torrent, client) {
        var mediaInfo, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return findMediaInfoViaTMDB(torrent);
            case 1:
              mediaInfo = _context.v;
              if (mediaInfo) {
                _context.n = 2;
                break;
              }
              return _context.a(2);
            case 2:
              _context.n = 1;
              return updateQbittorrentMetadata(torrent, client, mediaInfo);
            case 1:
              return _context.a(2);
          }
        }, _callee);
      }));
      return _updateMetadataForTorrent.apply(this, arguments);
    }
    function findMediaInfoViaTMDB(_x3) {
      return _findMediaInfoViaTMDB.apply(this, arguments);
    }
    /**
     * Підготовка назви торента для пошуку в TMDB
     *
     * @param {Object} torrent - об'єкт торента
     * @returns {string} - підготовлена назва для пошуку
     */
    function _findMediaInfoViaTMDB() {
      _findMediaInfoViaTMDB = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(torrent) {
        var query, results, selected;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              query = prepareTitleFromTorrent(torrent); // парсер назви/року
              _context2.n = 1;
              return tmdbSearch(query);
            case 1:
              results = _context2.v;
              if (!(!results || !results.length)) {
                _context2.n = 2;
                break;
              }
              Lampa.Bell.push({
                text: Lampa.Lang.translate('torrentmanager_nothing_found') //'Нічого не знайдено для ' + torrent.name
              });
              return _context2.a(2, null);
            case 2:
              if (!(results.length === 1)) {
                _context2.n = 3;
                break;
              }
              return _context2.a(2, normalizeTmdbResult(results[0]));
            case 3:
              _context2.n = 4;
              return showTmdbSelectModal(results);
            case 4:
              selected = _context2.v;
              if (selected) {
                _context2.n = 5;
                break;
              }
              return _context2.a(2, null);
            case 5:
              return _context2.a(2, normalizeTmdbResult(selected));
          }
        }, _callee2);
      }));
      return _findMediaInfoViaTMDB.apply(this, arguments);
    }
    function prepareTitleFromTorrent(torrent) {
      // Використовуємо існуючий парсер з torrentParser.js
      // Він вже реалізований у функції cleanName
      // Імпортуємо функцію cleanName з torrentParser
      var cleanName = function cleanName(name) {
        if (!name) return '';

        // Regular expression to extract the main title from torrent name
        // Removes season/episode markers, year, quality indicators, etc.
        var regex = /*#__PURE__*/_wrapRegExp(/^(.+?)(?:[.\s(]((19|20)\d{2})[.\s)]|S\d{1,2}(?:E\d{1,2})?|[.\s](?:PPV.)?[HP]DTV|(?:HD)?TC|[cC]am|(?:HD)?CAM|B[rR]Rip|WEBRip|WEB-Rip|WEB-DL|WEB|TS|(?:PPV )?WEB-?DL(?: DVDRip)?|H[dD]Rip|DVDRip|DVDRiP|DVDRIP|CamRip|W[EB]B[rR]ip|HDRIP|[Bb]lu[Rr]ay|DvDScr|hdtv)/i, {
          title: 1
        });
        var match = name.match(regex);

        // If we have a match with a title group, use it
        if (match && match.groups && match.groups.title) {
          // Replace dots between words with spaces
          return match.groups.title.replace(/\./g, ' ').trim();
        }

        // Fallback: just replace dots with spaces
        return name.replace(/\./g, ' ').trim();
      };
      return cleanName(torrent.name || torrent.title || '');
    }

    /**
     * Пошук в TMDB з використанням існуючого парсера
     *
     * @param {string} query - запит для пошуку
     * @returns {Promise<Array>} - результати пошуку
     */
    function tmdbSearch(_x4) {
      return _tmdbSearch.apply(this, arguments);
    }
    /**
     * Показ модального вікна для вибору результату TMDB
     *
     * @param {Array} results - масив результатів пошуку
     * @returns {Promise<Object|null>} - обраний результат або null
     */
    function _tmdbSearch() {
      _tmdbSearch = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(query) {
        var results, _t2;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              _context3.p = 0;
              _context3.n = 1;
              return processTorrents([{
                name: query
              }]);
            case 1:
              results = _context3.v;
              return _context3.a(2, results || []);
            case 2:
              _context3.p = 2;
              _t2 = _context3.v;
              console.error('TDM', 'TMDB search error:', _t2);
              return _context3.a(2, []);
          }
        }, _callee3, null, [[0, 2]]);
      }));
      return _tmdbSearch.apply(this, arguments);
    }
    function showTmdbSelectModal(results) {
      return new Promise(function (resolve) {
        var enabled = Lampa.Controller.enabled().name;

        // Форматуємо елементи меню
        var menuItems = results.map(function (result) {
          return {
            title: "".concat(result.title || result.name, " (").concat(result.media_type, ")") + (result.media_type === 'tv' && result.first_air_date ? " - ".concat(result.first_air_date.slice(0, 4)) : '') + (result.media_type === 'movie' && result.release_date ? " - ".concat(result.release_date.slice(0, 4)) : ''),
            item: result
          };
        });
        Lampa.Select.show({
          title: 'Оберіть правильний результат',
          items: menuItems,
          onBack: function onBack() {
            // Повертаємось до попереднього контролера
            var currentController = Lampa.Controller.enabled();
            if (currentController && currentController.name !== enabled) {
              Lampa.Controller.toggle(enabled);
            } else {
              Lampa.Controller.toggle('menu');
            }
            resolve(null);
          },
          onSelect: function onSelect(selected) {
            resolve(selected.item);
          }
        });
      });
    }

    /**
     * Нормалізація результату TMDB до простого об'єкта
     *
     * @param {Object} item - результат з TMDB
     * @returns {Object} - нормалізований об'єкт
     */
    function normalizeTmdbResult(item) {
      return {
        id: item.id,
        media_type: item.media_type || 'movie',
        // або за твоїми правилами
        title: item.title || item.name,
        year: (item.release_date || item.first_air_date || '').slice(0, 4) || null
      };
    }

    /**
     * Форматування тегу для метаданих
     *
     * @param {Object} mediaInfo - інформація про медіа
     * @returns {string} - відформатований тег
     */
    function buildMetadataTag(mediaInfo) {
      // ПОВИННО відповідати поточному формату тегу в плагіні!
      // приклад, якщо так уже є:
      return mediaInfo.media_type + '/' + mediaInfo.id;
    }

    function updateQbittorrentMetadata(_x8, _x9, _x0) {
      return _updateQbittorrentMetadata.apply(this, arguments);
    }
    /**
     * Оновлення метаданих для qBittorrent
     *
     * @param {Object} torrent - об'єкт торента
     * @param {Object} client - інформація про клієнта
     * @param {Object} mediaInfo - інформація про медіа з TMDB
     */
    function _updateQbittorrentMetadata() {
      _updateQbittorrentMetadata = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(torrent, client, mediaInfo) {
        var tagValue, _t4;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              tagValue = buildMetadataTag(mediaInfo); // той самий формат, що й при додаванні
              _context5.p = 1;
              _context5.n = 2;
              return Qbittorent.setTags(torrent.id, tagValue);
            case 2:
              Lampa.Bell.push({
                text: Lampa.Lang.translate('torrentmanager_metadata_updated') //'Метадані оновлено'
              });
              _context5.n = 4;
              break;
            case 3:
              _context5.p = 3;
              _t4 = _context5.v;
              console.error('TDM', 'updateQbittorrentMetadata error:', _t4);
              Lampa.Bell.push({
                text: Lampa.Lang.translate('torrentmanager_metadata_error') //'Помилка оновлення метаданих'
              });
            case 4:
              return _context5.a(2);
          }
        }, _callee5, null, [[1, 3]]);
      }));
      return _updateQbittorrentMetadata.apply(this, arguments);
    }
    /**
     * Масове оновлення метаданих для всіх торентів
     *
     * @param {Array} torrents - масив торентів
     * @param {Object} client - інформація про клієнта
     */
    function updateAllMetadata(_x12, _x13) {
      return _updateAllMetadata.apply(this, arguments);
    }
    function _updateAllMetadata() {
      _updateAllMetadata = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(torrents, client) {
        var _iterator, _step, torrent, _t5;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.n) {
            case 0:
              _iterator = _createForOfIteratorHelper(torrents);
              _context7.p = 1;
              _iterator.s();
            case 2:
              if ((_step = _iterator.n()).done) {
                _context7.n = 5;
                break;
              }
              torrent = _step.value;
              _context7.n = 3;
              return updateMetadataForTorrent(torrent, client);
            case 3:
              _context7.n = 4;
              return new Promise(function (resolve) {
                return setTimeout(resolve, 500);
              });
            case 4:
              _context7.n = 2;
              break;
            case 5:
              _context7.n = 7;
              break;
            case 6:
              _context7.p = 6;
              _t5 = _context7.v;
              _iterator.e(_t5);
            case 7:
              _context7.p = 7;
              _iterator.f();
              return _context7.f(7);
            case 8:
              Lampa.Bell.push({
                text: Lampa.Lang.translate('torrentmanager_metadata_updated_all') //'Оновлення метаданих завершено'
              });
            case 9:
              return _context7.a(2);
          }
        }, _callee7, null, [[1, 6, 7, 8]]);
      }));
      return _updateAllMetadata.apply(this, arguments);
    }

    // Constants
    var UPDATE_INTERVAL_MS = 5000;

    /**
     * Parse torrent labels to extract media information
     * 
     * @param {Array|string} labels - Labels to parse
     * @returns {Object|null} - Parsed media type and ID, or null if not found
     */
    function parseLabels$1(labels) {
      if (!labels) return null;

      // Convert string to array if needed
      var labelArray = Array.isArray(labels) ? labels : labels.split(',');

      // Find label matching tv/movie pattern
      var matchedLabel = labelArray.find(function (label) {
        return /^(tv|movie)\/\d+$/.test(label);
      });
      if (!matchedLabel) return null;

      // Split matched label into parts
      var _matchedLabel$split = matchedLabel.split('/'),
        _matchedLabel$split2 = _slicedToArray(_matchedLabel$split, 2),
        method = _matchedLabel$split2[0],
        tID = _matchedLabel$split2[1];
      return {
        method: method,
        tID: tID
      };
    }

    /**
     * Main Panel Component
     */
    function Component() {
      // Component state
      var network = new Lampa.Reguest();
      var client = Lampa.Storage.field('lmetorrentSelect');
      var updateInterval;
      var items = [];
      var active, last;
      // UI elements
      var scroll = new Lampa.Scroll({
        mask: true,
        over: true,
        step: 250
      });
      var html = $("<div class='lmetorrent-module'></div>");
      var head = $("<div class='lmetorrent-head'></div>");
      var body = $('<div class="lmetorrent-catalog--list category-full"></div>');

      /**
       * Initialize component
       */
      this.create = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var result, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              this.activity.loader(true);
              _context.p = 1;
              _context.n = 2;
              return fetchClientData(client);
            case 2:
              result = _context.v;
              if (result) {
                this.build(result);
              } else {
                this.showError(result);
              }
              _context.n = 4;
              break;
            case 3:
              _context.p = 3;
              _t = _context.v;
              this.showError(_t);
            case 4:
              return _context.a(2, this.render());
          }
        }, _callee, this, [[1, 3]]);
      }));

      /**
       * Fetch data from selected torrent client
       * 
       * @param {string} clientType - Type of torrent client
       * @returns {Promise<Object>} - Client data and info
       */
      function fetchClientData(_x) {
        return _fetchClientData.apply(this, arguments);
      }
      /**
       * Display error message when client connection fails
       * 
       * @param {Object} data - Error data
       */
      function _fetchClientData() {
        _fetchClientData = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(clientType) {
          var _yield$Promise$all, _yield$Promise$all2, qbData, qbInfo, _t3;
          return _regenerator().w(function (_context3) {
            while (1) switch (_context3.n) {
              case 0:
                _context3.p = 0;
                _context3.n = 1;
                return Promise.all([Qbittorent.GetData(), Qbittorent.GetInfo()]);
              case 1:
                _yield$Promise$all = _context3.v;
                _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
                qbData = _yield$Promise$all2[0];
                qbInfo = _yield$Promise$all2[1];
                return _context3.a(2, {
                  data: qbData,
                  info: qbInfo
                });
              case 2:
                _context3.p = 2;
                _t3 = _context3.v;
                console.error('TDM', 'Error fetching client data:', _t3);
                var errorMsg = _t3 && _t3.message ? _t3.message : String(_t3);
                if (errorMsg.includes('URL qBittorrent не настроен')) {
                  Lampa.Bell.push({
                    text: 'URL qBittorrent не настроен. Пожалуйста, укажите адрес сервера в настройках.'
                  });
                } else {
                  Lampa.Bell.push({
                    text: 'Ошибка подключения к qBittorrent: ' + errorMsg
                  });
                }
                throw _t3;
                throw _t3;
              case 3:
                return _context3.a(2);
            }
          }, _callee3, null, [[0, 2]]);
        }));
        return _fetchClientData.apply(this, arguments);
      }
      this.showError = function (data) {
        console.log('TDM', 'Error fetching data:', data);
        scroll.append(body);
        html.append(scroll.render());
        var errorMessage = "<div class=\"lmetorrent-error_body\">\n            <div>".concat(Lampa.Lang.translate('somethingWentWrong'), "</div>\n            <div class=\"lmetorrent-error_result\">").concat(Lampa.Lang.translate('clientNotClient'), "</div>\n        </div>");
        body.append(errorMessage);
        this.activity.loader(false);
        this.activity.toggle();
      };

      /**
       * Build panel UI with fetched data
       * 
       * @param {Object} result - Data from torrent client
       */
      this.build = function (result) {
        scroll.minus();

        // Add header
        if (result.info) {
          this.renderHeader(result.info);
        }

        // Add torrent items
        if (result.data) {
          this.renderTorrentList(result.data);
        } else {
          this.renderTorrentList(result);
        }

        // Assemble UI
        scroll.append(head);
        scroll.append(body);
        html.append(scroll.render());
        this.activity.loader(false);
        this.activity.toggle();

        // Start auto-update
        startAutoUpdate();
      };

      /**
       * Render panel header
       * 
       * @param {Object} data - Header data
       */
      this.renderHeader = function (data) {
        var item = new Header(data);
        item.render().on("hover:focus", function () {
          last = item.render()[0];
          active = items.indexOf(item);
          scroll.update(items[active].render(), true);
        });

        // Add click handler for update button
        item.render()[0].on("hover:enter", function () {
          Lampa.Activity.replace({
            url: "",
            title: client.toUpperCase() + " Manager",
            component: "lmetorrentPanel",
            page: 1
          });
          Lampa.Bell.push({
            text: "Reloaded"
          });
        });
        head.append(item.render());
        items.push(item);
      };

      /**
       * Render list of torrents
       * 
       * @param {Array} torrents - List of torrents to display
       */
      this.renderTorrentList = function (torrents) {
        torrents.forEach(function (torrentData) {
          var item = new Item(torrentData);
          item.render().on("hover:focus", function () {
            last = item.render()[0];
            active = items.indexOf(item);
            scroll.update(items[active].render(), true);
          }).on("hover:enter", function () {
            showTorrentMenu(torrentData, torrents);
          });
          body.append(item.render());
          items.push(item);
        });
      };

      /**
       * Show torrent action menu
       * 
       * @param {Object} torrentData - Data for the selected torrent
       * @param {Array} allTorrents - All torrents (needed for 'parse-all' action)
       */
      function showTorrentMenu(torrentData, allTorrents) {
        var enabled = Lampa.Controller.enabled().name;
        var hasMetadata = torrentData.tmdb_id && torrentData.media_type || parseLabels$1(torrentData.labels);
        var menuItems = [{
          title: Lampa.Lang.translate('resume'),
          action: 'resume'
        }, {
          title: Lampa.Lang.translate('pause'),
          action: 'pause'
        }, {
          title: Lampa.Lang.translate('delete'),
          action: 'delete'
        }].concat(_toConsumableArray(hasMetadata ? [{
          title: Lampa.Lang.translate('openCard'),
          action: 'card'
        }] : []), [{
          title: Lampa.Lang.translate('add_metadata'),
          action: 'parse'
        }, {
          title: Lampa.Lang.translate('add_metadata_all'),
          action: 'parse-all'
        }]);
        menuItems.push({
          title: Lampa.Lang.translate('fullDelete'),
          action: 'delete',
          deleteFiles: true
        });
        Lampa.Select.show({
          title: torrentData.name,
          items: menuItems,
          onBack: function onBack() {
            // Повертаємось до попереднього контролера, якщо він існує
            var currentController = Lampa.Controller.enabled();
            if (currentController && currentController.name !== enabled) {
              Lampa.Controller.toggle(enabled);
            } else {
              // Якщо контролер не змінився, просто вимикаємо меню
              Lampa.Controller.toggle('menu');
            }
          },
          onSelect: function onSelect(action) {
            handleTorrentAction(action, torrentData, allTorrents);
          }
        });
      }

      /**
       * Handle torrent action selection
       * 
       * @param {Object} action - Selected action
       * @param {Object} torrentData - Data for the selected torrent
       * @param {Array} allTorrents - All torrents (needed for 'parse-all' action)
       */
      function handleTorrentAction(action, torrentData, allTorrents) {
        if (action.action === 'card') {
          var cardInfo = null;
          // Спочатку перевіряємо новий метод (з DB)
          if (torrentData.tmdb_id && torrentData.media_type) {
            cardInfo = {
              tID: torrentData.tmdb_id,
              method: torrentData.media_type
            };
          }
          // Якщо не вийшло, перевіряємо старий метод (з labels)
          else {
            cardInfo = parseLabels$1(torrentData.labels);
          }
          if (cardInfo) {
            Lampa.Activity.push({
              url: '',
              component: 'full',
              id: cardInfo.tID,
              method: cardInfo.method,
              source: Lampa.Storage.field('source') || 'tmdb'
            });
          } else {
            Lampa.Bell.push({
              text: 'No metadata available for this torrent'
            });
          }
        } else {
          // Send command to qBittorrent
          if (action.action === 'parse') {
            // Використовуємо нову уніфіковану функцію для одного торента
            var clientConfig = {
              type: 'qbittorrent',
              url: Lampa.Storage.field("lmetorrentqBittorentUrl"),
              useProxy: Lampa.Storage.field("lmetorrentqBittorentProxy") === true
            };
            return updateMetadataForTorrent(torrentData, clientConfig);
          } else if (action.action === 'parse-all') {
            // Використовуємо нову уніфіковану функцію для всіх торентів
            var _clientConfig = {
              type: 'qbittorrent',
              url: Lampa.Storage.field("lmetorrentqBittorentUrl"),
              useProxy: Lampa.Storage.field("lmetorrentqBittorentProxy") === true
            };
            return updateAllMetadata(allTorrents, _clientConfig);
          } else {
            return Qbittorent.SendCommand(action, torrentData);
          }
        }
      }

      /**
       * Start auto-update for torrent data
       */
      function startAutoUpdate() {
        // Select appropriate data function based on client
        var getDataFunc = Qbittorent.GetData;

        // Set up interval for updates
        updateInterval = setInterval(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
          var result, _t2;
          return _regenerator().w(function (_context2) {
            while (1) switch (_context2.n) {
              case 0:
                _context2.p = 0;
                _context2.n = 1;
                return getDataFunc();
              case 1:
                result = _context2.v;
                // Update existing items with new data
                result.forEach(function (newTorrent) {
                  items.forEach(function (item) {
                    if (item.id === newTorrent.id) {
                      item.update(newTorrent);
                    }
                  });
                });
                _context2.n = 3;
                break;
              case 2:
                _context2.p = 2;
                _t2 = _context2.v;
                console.error('TDM', 'Auto update error:', _t2);
              case 3:
                return _context2.a(2);
            }
          }, _callee2, null, [[0, 2]]);
        })), UPDATE_INTERVAL_MS);
      }

      /**
       * Handle back button
       */
      this.back = function () {
        Lampa.Activity.backward();
      };

      /**
       * Set background
       */
      this.background = function () {
        Lampa.Background.immediately("");
      };

      /**
       * Start component
       */
      this.start = function () {
        if (Lampa.Activity.active().activity !== this.activity) return;
        this.background();
        Lampa.Controller.add("content", {
          toggle: function toggle() {
            Lampa.Controller.collectionSet(scroll.render());
            Lampa.Controller.collectionFocus(last || false, scroll.render());
          },
          left: function left() {
            if (Navigator.canmove("left")) Navigator.move("left");else Lampa.Controller.toggle("menu");
          },
          right: function right() {
            Navigator.move("right");
          },
          up: function up() {
            if (Navigator.canmove("up")) Navigator.move("up");else Lampa.Controller.toggle("head");
          },
          down: function down() {
            if (Navigator.canmove("down")) Navigator.move("down");
          },
          back: this.back
        });
        Lampa.Controller.toggle("content");
      };

      /**
       * Pause component
       */
      this.pause = function () {
        // Placeholder for pause functionality
      };

      /**
       * Stop component
       */
      this.stop = function () {
        // Placeholder for stop functionality
      };

      /**
       * Render component
       * 
       * @returns {JQuery} - Component HTML
       */
      this.render = function () {
        return html;
      };

      /**
       * Clean up resources when component is destroyed
       */
      this.destroy = function () {
        network.clear();
        Lampa.Arrays.destroy(items);
        scroll.destroy();
        html.remove();
        if (updateInterval) {
          clearInterval(updateInterval);
        }
        items = null;
        network = null;
      };
    }

    function Main$1(manifest) {
      //Создание пункта меню
      Lampa.SettingsApi.addComponent({
        component: manifest.component,
        name: manifest.name,
        icon: manifest.icon
      });
      //Proxy TMDB
      // Lampa.SettingsApi.addParam({
      //     component: manifest.component,
      //     param: {
      //         name: manifest.component + 'proxyTMDB',
      //         type: 'trigger',
      //         default: 'false',
      //         values: {
      //             true: Lampa.Lang.translate('true'),
      //             false: Lampa.Lang.translate('false')
      //         },
      //     },
      //     field: {
      //         name: 'Proxy TMDB posters',
      //     },
      //     onRender: function (item) {
      //         var forbiddenValues = ["universalClient", "synology", "no_client"];
      //         var clientValue = Lampa.Storage.field(manifest.component + 'proxyTMDB');
      //         // indexOf возвращает -1, если значения нет в массиве
      //         if (forbiddenValues.indexOf(clientValue) === -1) {
      //             item.show();
      //         } else item.hide();
      //     },
      //     onChange: function () {
      //         Lampa.Settings.update();
      //     }
      // })
      //qBittorent
      Lampa.SettingsApi.addParam({
        component: manifest.component,
        param: {
          name: manifest.component + "qBittorentUrl",
          type: "input",
          //доступно select,input,trigger,title,static
          //values: `${Lampa.Storage.get("qBittorentUrl") || ""}`,
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
      Lampa.SettingsApi.addParam({
        component: manifest.component,
        param: {
          name: manifest.component + "qBittorentProxy",
          type: "trigger",
          //доступно select,input,trigger,title,static
          "default": false
        },
        field: {
          name: Lampa.Lang.translate('LMEProxy'),
          description: Lampa.Lang.translate('LMEProxyDescription')
        },
        onRender: function onRender(item) {
          item.show();
        },
        onChange: function onChange(value) {
          Lampa.Settings.update();
        }
      });
      Lampa.SettingsApi.addParam({
        component: manifest.component,
        param: {
          type: "trigger",
          //доступно select,input,trigger,title,static
          "default": false,
          name: manifest.component + "qBittorentTweak"
        },
        field: {
          name: Lampa.Lang.translate('tweak')
        },
        onRender: function onRender(item) {
          item.show();
        },
        onChange: function onChange(item) {
          Lampa.Settings.update();
        }
      });
      // qBittorent Tweak part
      Lampa.SettingsApi.addParam({
        component: manifest.component,
        param: {
          name: manifest.component + "qBittorentSequentialDownload",
          type: "trigger",
          //доступно select,input,trigger,title,static
          "default": false
        },
        field: {
          name: 'Sequential Download'
        },
        onRender: function onRender(item) {
          if (Lampa.Storage.field(manifest.component + 'Select') === "qBittorent" && Lampa.Storage.field(manifest.component + "qBittorentTweak") === true) {
            item.show();
          } else item.hide();
        },
        onChange: function onChange(value) {
          Lampa.Settings.update();
        }
      });
      Lampa.SettingsApi.addParam({
        component: manifest.component,
        param: {
          name: manifest.component + "qBittorentfirstLastPiecePrio",
          type: "trigger",
          //доступно select,input,trigger,title,static
          "default": false
        },
        field: {
          name: 'Prioritize download first last piece'
        },
        onRender: function onRender(item) {
          if (Lampa.Storage.field(manifest.component + 'Select') === "qBittorent" && Lampa.Storage.field(manifest.component + "qBittorentTweak") === true) {
            item.show();
          } else item.hide();
        },
        onChange: function onChange(value) {
          Lampa.Settings.update();
        }
      });
      Lampa.SettingsApi.addParam({
        component: manifest.component,
        param: {
          name: manifest.component + "qBittorentMovies",
          type: "input",
          //доступно select,input,trigger,title,static
          placeholder: '',
          values: '',
          "default": ''
        },
        field: {
          name: Lampa.Lang.translate('pathMovie')
        },
        onRender: function onRender(item) {
          if (Lampa.Storage.field(manifest.component + 'Select') === "qBittorent" && Lampa.Storage.field(manifest.component + "qBittorentTweak") === true) {
            item.show();
          } else item.hide();
        },
        onChange: function onChange(item) {
          Lampa.Settings.update();
        }
      });
      Lampa.SettingsApi.addParam({
        component: manifest.component,
        param: {
          name: manifest.component + "qBittorentTV",
          type: "input",
          //доступно select,input,trigger,title,static
          placeholder: '',
          values: '',
          "default": ''
        },
        field: {
          name: Lampa.Lang.translate('pathTV')
        },
        onRender: function onRender(item) {
          if (Lampa.Storage.field(manifest.component + 'Select') === "qBittorent" && Lampa.Storage.field(manifest.component + "qBittorentTweak") === true) {
            item.show();
          } else item.hide();
        },
        onChange: function onChange(item) {
          Lampa.Settings.update();
        }
      });
    }

    function Main(selectedTorrent) {
      if (Lampa.Storage.field("lmetorrentUniversalAction") === "open") {
        window.location.assign(selectedTorrent.MagnetUri ? selectedTorrent.MagnetUri : selectedTorrent.Link);
      } else {
        Lampa.Utils.copyTextToClipboard(selectedTorrent.MagnetUri ? selectedTorrent.MagnetUri : selectedTorrent.Link, function () {
          Lampa.Bell.push({
            text: Lampa.Lang.translate('copy_secuses')
          });
        }, function () {
          Lampa.Bell.push({
            text: Lampa.Lang.translate('copy_error')
          });
        });
      }
    }

    //Import Clients
    function Send() {
      function send2qBittorrent(selectedTorrent, labels, dtype) {
        Qbittorent.SendTask(selectedTorrent, labels, dtype);
      }
      Lampa.Listener.follow('torrent', function (e) {
        if (e.type === 'onlong') {
          var _Lampa$Activity$activ, _Lampa$Activity$activ2, _Lampa$Activity$activ3;
          var selectedTorrent = e.element;
          var labels = "".concat((_Lampa$Activity$activ = Lampa.Activity.active().movie) !== null && _Lampa$Activity$activ !== void 0 && _Lampa$Activity$activ.first_air_date ? "tv" : "movie", "/").concat((_Lampa$Activity$activ2 = Lampa.Activity.active().movie) === null || _Lampa$Activity$activ2 === void 0 ? void 0 : _Lampa$Activity$activ2.id);
          var dtype = (_Lampa$Activity$activ3 = Lampa.Activity.active().movie) !== null && _Lampa$Activity$activ3 !== void 0 && _Lampa$Activity$activ3.first_air_date ? "TV" : "Movies";
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

    function startClient(_x) {
      return _startClient.apply(this, arguments);
    }
    function _startClient() {
      _startClient = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(client) {
        var result, _yield$Promise$all, _yield$Promise$all2, qbData, qbInfo, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _context2.p = 0;
              _context2.n = 1;
              return Promise.all([Qbittorent.GetData(), Qbittorent.GetInfo()]);
            case 1:
              _yield$Promise$all = _context2.v;
              _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
              qbData = _yield$Promise$all2[0];
              qbInfo = _yield$Promise$all2[1];
              result = {
                data: qbData,
                info: qbInfo
              };
              console.log('TDM:', result);
              return _context2.a(2, result);
            case 2:
              _context2.p = 2;
              _t2 = _context2.v;
              console.error('TDM', 'Error fetching client data:', _t2);
              throw _t2;
            case 3:
              return _context2.a(2);
          }
        }, _callee2, null, [[0, 2]]);
      }));
      return _startClient.apply(this, arguments);
    }

    function Main(selectedTorrent) {
      if (Lampa.Storage.field("lmetorrentUniversalAction") === "open") {
        //if (Lampa.Platform.is('android')) $('<a href="' + selectedTorrent.MagnetUri ? selectedTorrent.MagnetUri : selectedTorrent.Link + '"><a/>')[0].click()
        //else
        window.location.assign(selectedTorrent.MagnetUri ? selectedTorrent.MagnetUri : selectedTorrent.Link);
      } else {
        Lampa.Utils.copyTextToClipboard(selectedTorrent.MagnetUri ? selectedTorrent.MagnetUri : selectedTorrent.Link, function () {
          Lampa.Bell.push({
            text: Lampa.Lang.translate('copy_secuses')
          });
        }, function () {
          Lampa.Bell.push({
            text: Lampa.Lang.translate('copy_error')
          });
        });
      }
    }

    //Import Clients
    function Send() {
      function send2qBittorrent(selectedTorrent, labels, dtype) {
        Qbittorent.SendTask(selectedTorrent, labels, dtype);
      }
      Lampa.Listener.follow('torrent', function (e) {
        if (e.type === 'onlong') {
          var _Lampa$Activity$activ, _Lampa$Activity$activ2, _Lampa$Activity$activ3;
          var selectedTorrent = e.element;
          var labels = "".concat((_Lampa$Activity$activ = Lampa.Activity.active().movie) !== null && _Lampa$Activity$activ !== void 0 && _Lampa$Activity$activ.first_air_date ? "tv" : "movie", "/").concat((_Lampa$Activity$activ2 = Lampa.Activity.active().movie) === null || _Lampa$Activity$activ2 === void 0 ? void 0 : _Lampa$Activity$activ2.id);
          var dtype = (_Lampa$Activity$activ3 = Lampa.Activity.active().movie) !== null && _Lampa$Activity$activ3 !== void 0 && _Lampa$Activity$activ3.first_air_date ? "TV" : "Movies";
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

    function startClient(_x) {
      return _startClient.apply(this, arguments);
    }
    function _startClient() {
      _startClient = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(client) {
        var result, _yield$Promise$all, _yield$Promise$all2, qbData, qbInfo, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _context2.p = 0;
              _context2.n = 1;
              return Promise.all([Qbittorent.GetData(), Qbittorent.GetInfo()]);
            case 1:
              _yield$Promise$all = _context2.v;
              _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
              qbData = _yield$Promise$all2[0];
              qbInfo = _yield$Promise$all2[1];
              result = {
                data: qbData,
                info: qbInfo
              };
              console.log('TDM:', result);
              return _context2.a(2, result);
            case 2:
              _context2.p = 2;
              _t2 = _context2.v;
              console.error('TDM', 'Error fetching client data:', _t2);
              throw _t2;
            case 3:
              return _context2.a(2);
          }
        }, _callee2, null, [[0, 2]]);
      }));
      return _startClient.apply(this, arguments);
    }
    function torrentInfo() {
      Lampa.Listener.follow('full', function (e) {
        if (e.type === 'complite') {
          setTimeout(function () {
            function findTorrent(data, method, id) {
              var searchLabel = "".concat(method, "/").concat(id);
              return data.find(function (item) {
                return item.labels && item.labels.includes(searchLabel);
              });
            }
            startClient(client).then(function (r) {
              if (r && r.data) {
                var torrent = findTorrent(r.data, e.object.method, e.object.id);
                if (torrent) {
                  // Create button element
                  var $button = $("<div class=\"full-start__button selector button--lme_torrent\">\n                                <svg fill=\"currentColor\" version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 588.601 588.6\" xml:space=\"preserve\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"> <g> <path d=\"M168.405,288.048c-3.019,0.084-4.936,0.419-5.864,0.728v20.174l5.632-0.059c6.463-0.078,10.558-4.35,10.558-10.768 C178.73,291.017,174.636,287.869,168.405,288.048z\"></path> <path d=\"M82.324,290.445c-8.177,0.227-12.49,10.278-12.49,22.491c0,12.045,4.588,21.674,12.49,21.737 c8.089,0.079,12.701-9.761,12.701-22.412C95.018,300.86,90.688,290.213,82.324,290.445z\"></path> <path d=\"M125.722,289.235c-2.813,0.082-4.617,0.396-5.484,0.696v19.515l5.276-0.059c6.03-0.074,9.858-4.203,9.858-10.404 C135.372,292.117,131.544,289.074,125.722,289.235z\"></path> <path d=\"M539.568,49.201h-178.2c-0.786,0-1.561,0.074-2.347,0.124V0L11.228,46.419v494.562L359.032,588.6v-50.814 c0.78,0.053,1.55,0.115,2.341,0.115h178.2c20.852,0,37.8-16.959,37.8-37.8v-413.1C577.368,66.161,560.425,49.201,539.568,49.201z M361.368,70.801h178.2c8.928,0,16.2,7.267,16.2,16.2v271.329c-23.272-58.704-70.2-90.393-132.864-99.347 c-18.879-2.705-21.79,0.886-19.687,19.517c1.482,13.252,11.786,9.158,18.747,10.022c56.574,7.085,103.982,49.642,115.288,104.147 c7.267,34.974-1.266,71.872-21.305,101.05h-14.08c36.64-49.116,38.834-102.389,2.964-149.575 c-33.307-43.802-99.62-61.505-145.8-42.604V71.043C359.797,70.93,360.572,70.801,361.368,70.801z M359.032,333.687 c2.226-0.891,4.25-1.703,6.265-2.479c45.752-17.649,97.817-0.606,122.096,39.946c23.757,39.726,14.223,90.034-22.892,122.565 h-14.122c3.912-2.942,7.73-6.181,11.411-9.734c26.314-25.376,35.374-56.162,24.01-90.925 c-11.527-35.258-37.446-55.244-74.007-60.592c-18.114-2.647-36.956,1.244-52.761,9.661V333.687z M359.032,378.891 c0.169-0.163,0.327-0.354,0.506-0.517c22.939-22.17,62.259-21.479,84.555,1.397c22.687,23.277,22.887,60.307-2.479,81.949 c-13.11,11.175-29.995,20.408-46.659,24.49c-11.935,2.921-23.905,4.777-35.923,6.021V378.891z M296.331,275.25l49.401-1.7v11.156 l-19.232,0.514v61.077l-11.938-0.19v-60.57l-18.236,0.493V275.25H296.331z M60.247,292.37l-12.49,0.332v49.265l-7.771-0.11v-48.953 l-11.929,0.321V284.5l32.189-1.113V292.37z M81.857,343.459c-12.677-0.211-20.545-12.983-20.545-30.26 c0-18.077,8.521-31.118,21.209-31.572c13.458-0.466,21.526,12.714,21.526,30.085C104.048,332.153,94.521,343.67,81.857,343.459z M136.836,343.343c-0.738-1.867-1.917-6.982-3.31-14.776c-1.395-8.147-3.73-10.721-8.819-10.895l-4.47,0.025v25.393l-8.701-0.138 v-60.515c3.267-0.828,8.208-1.55,13.324-1.73c7.056-0.242,11.907,1.071,15.238,4.504c2.745,2.797,4.316,7.148,4.316,12.469 c0,8.137-4.398,13.685-9.042,15.868v0.284c3.533,1.641,5.688,6.012,6.951,12.056c1.572,7.857,2.911,15.161,3.963,17.607 L136.836,343.343z M180.312,344.023c-0.788-1.935-2.059-7.229-3.554-15.298c-1.484-8.427-3.995-11.096-9.429-11.264l-4.788,0.021 v26.262l-9.305-0.143v-62.574c3.488-0.865,8.754-1.608,14.241-1.798c7.549-0.274,12.738,1.086,16.313,4.627 c2.942,2.896,4.617,7.394,4.617,12.906c0,8.412-4.704,14.16-9.682,16.428v0.295c3.783,1.688,6.096,6.207,7.446,12.477 c1.68,8.127,3.119,15.684,4.237,18.22L180.312,344.023z M231.742,344.82l-33.874-0.533v-65.646l32.598-1.118v10.083l-22.539,0.609 v17.075l21.266-0.306v9.978l-21.266,0.137v19.438l23.815,0.189V344.82z M241.052,277.151l12.234-0.422l15.515,29.141 c4.061,7.668,7.604,15.688,10.434,23.235h0.19c-0.73-9.313-1.004-18.299-1.004-28.94v-24.301l10.491-0.366v70.208l-11.675-0.18 l-15.881-30.47c-3.828-7.515-7.791-15.884-10.702-23.535l-0.264,0.105c0.43,8.812,0.517,17.819,0.517,29.072v24.421l-9.848-0.152 v-67.816H241.052z M539.568,516.301h-4.915c8.644-11.56,15.746-23.467,21.115-35.743v19.543 C555.769,509.035,548.507,516.301,539.568,516.301z\"></path> </g> </g></svg>\n                                <span>".concat(torrent.completed > 0 ? "".concat(torrent.state, " - ").concat(Number((torrent.completed * 100).toFixed(2)), "%") : torrent.state, "</span>\n                            </div>"));

                  // Attach event handlers
                  $button.on("hover:enter", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
                    var enabled, menu;
                    return _regenerator().w(function (_context) {
                      while (1) switch (_context.n) {
                        case 0:
                          enabled = Lampa.Controller.enabled().name;
                          menu = [];
                          menu.push({
                            title: Lampa.Lang.translate('resume'),
                            action: 'resume'
                          }, {
                            title: Lampa.Lang.translate('pause'),
                            action: 'pause'
                          }, {
                            title: Lampa.Lang.translate('delete'),
                            action: 'delete'
                          });


                          // Add full delete option
                          menu.push({
                            title: Lampa.Lang.translate('fullDelete'),
                            action: 'delete',
                            deleteFiles: true
                          });

                          // Set menu
                          Lampa.Select.show({
                            title: torrent.completed > 0 ? "".concat(torrent.state, " - ").concat(Number((torrent.completed * 100).toFixed(2)), "%") : torrent.state,
                            items: menu,
                            onBack: function onBack() {
                              // Повертаємось до попереднього контролера, якщо він існує
                              var currentController = Lampa.Controller.enabled();
                              if (currentController && currentController.name !== enabled) {
                                Lampa.Controller.toggle(enabled);
                              } else {
                                // Якщо контролер не змінився, просто вимикаємо меню
                                Lampa.Controller.toggle('menu');
                              }
                            },
                            onSelect: function onSelect(a) {
                              return Qbittorent.SendCommand(a, torrent);
                            }
                          });
                        case 1:
                          return _context.a(2);
                      }
                    }, _callee);
                  })));

                  // Append button to container
                  e.object.activity.render().find('.full-start-new__buttons').append($button);
                }
              } else {
                console.error('TDM', 'Failed to get torrent client data');
              }
            });
          }, 100);
        }
      });
    }

    var TorrentStateManager = /*#__PURE__*/function () {
      function TorrentStateManager() {
        _classCallCheck(this, TorrentStateManager);
        this.torrents = [];
        this.interval = null;
        this.listener = Lampa.Listener;
        this.clients = {
          'qbittorent': Qbittorent
        };
      }
      return _createClass(TorrentStateManager, [{
        key: "start",
        value: function start() {
          this.interval = setInterval(this.update.bind(this), 5000); // Оновлювати кожні 5 секунд
          this.update();
        }
      }, {
        key: "stop",
        value: function stop() {
          if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
          }
        }
      }, {
        key: "update",
        value: function () {
          var _update = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
            var client_name, client, new_torrents, has_active_downloads_before, has_active_downloads_after;
            return _regenerator().w(function (_context) {
              while (1) switch (_context.n) {
                case 0:
                  _context.p = 0;
                  client_name = 'qbittorent';
                  client = this.clients[client_name];
                  if (client) {
                    _context.n = 1;
                    break;
                  }
                  return _context.a(2);
                case 1:
                  _context.n = 2;
                  return client.GetData();
                case 2:
                  new_torrents = _context.v;
                  if (new_torrents) {
                    has_active_downloads_before = this.hasActiveDownloads();
                    this.torrents = new_torrents;
                    has_active_downloads_after = this.hasActiveDownloads();
                    this.listener.send('torrents:updated', {
                      torrents: this.torrents
                    });
                    if (has_active_downloads_before !== has_active_downloads_after) {
                      this.listener.send('torrents:status_changed', {
                        active: has_active_downloads_after
                      });
                    }
                  }
                  _context.n = 4;
                  break;
                case 3:
                  _context.p = 3;
                  _context.v;
                case 4:
                  return _context.a(2);
              }
            }, _callee, this, [[0, 3]]);
          }));
          function update() {
            return _update.apply(this, arguments);
          }
          return update;
        }()
      }, {
        key: "hasActiveDownloads",
        value: function hasActiveDownloads() {
          return this.torrents.some(function (t) {
            return t.state === 'downloading' || t.state === 'checking';
          });
        }
      }, {
        key: "on",
        value: function on(event, callback) {
          this.listener.follow(event, callback);
        }
      }]);
    }();
    var TorrentStateManager$1 = new TorrentStateManager();

    /**
     * Parse torrent labels to extract media information
     * 
     * @param {Array|string} labels - Labels to parse
     * @returns {Object|null} - Parsed media type and ID, or null if not found
     */
    function parseLabels(labels) {
      if (!labels) return null;

      // Convert string to array if needed
      var labelArray = Array.isArray(labels) ? labels : labels.split(',');

      // Find label matching tv/movie pattern
      var matchedLabel = labelArray.find(function (label) {
        return /^(tv|movie)\/\d+$/.test(label);
      });
      if (!matchedLabel) return null;

      // Split matched label into parts
      var _matchedLabel$split = matchedLabel.split('/'),
        _matchedLabel$split2 = _slicedToArray(_matchedLabel$split, 2),
        method = _matchedLabel$split2[0],
        tID = _matchedLabel$split2[1];
      return {
        method: method,
        tID: tID
      };
    }

    /**
     * Show the torrent action menu
     * 
     * @param {Object} torrentData - Data for the selected torrent
     * @param {Array} allTorrents - All torrents (needed for 'parse-all' action)
     */
    function showTorrentMenu(torrentData, allTorrents) {
      var client = 'qbittorent';
      var enabled = Lampa.Controller.enabled().name;
      var hasMetadata = torrentData.tmdb_id && torrentData.media_type || parseLabels(torrentData.labels);
      var menuItems = [{
        title: Lampa.Lang.translate('resume'),
        action: 'resume'
      }, {
        title: Lampa.Lang.translate('pause'),
        action: 'pause'
      }, {
        title: Lampa.Lang.translate('delete'),
        action: 'delete'
      }].concat(_toConsumableArray(hasMetadata ? [{
        title: Lampa.Lang.translate('openCard'),
        action: 'card'
      }] : []), [{
        title: Lampa.Lang.translate('add_metadata'),
        action: 'parse'
      }, {
        title: Lampa.Lang.translate('add_metadata_all'),
        action: 'parse-all'
      }]);
      menuItems.push({
        title: Lampa.Lang.translate('fullDelete'),
        action: 'delete',
        deleteFiles: true
      });
      Lampa.Select.show({
        title: torrentData.name,
        items: menuItems,
        onBack: function onBack() {
          // Повертаємось до попереднього контролера, якщо він існує
          var currentController = Lampa.Controller.enabled();
          if (currentController && currentController.name !== enabled) {
            Lampa.Controller.toggle(enabled);
          } else {
            // Якщо контролер не змінився, просто вимикаємо меню
            Lampa.Controller.toggle('menu');
          }
        },
        onSelect: function onSelect(action) {
          handleTorrentAction(action, torrentData, allTorrents);
        }
      });
    }

    /**
     * Handle torrent action selection
     * 
     * @param {Object} action - Selected action
     * @param {Object} torrentData - Data for the selected torrent
     * @param {Array} allTorrents - All torrents (needed for 'parse-all' action)
     */
    function handleTorrentAction(_x, _x2, _x3) {
      return _handleTorrentAction.apply(this, arguments);
    }
    function _handleTorrentAction() {
      _handleTorrentAction = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(action, torrentData, allTorrents) {
        var client, cardInfo, clientConfig, _clientConfig, _clientConfig2, _clientConfig3, _clientConfig4, _clientConfig5, _clientConfig6, _clientConfig7, _t, _t2;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              client = 'qbittorent';
              if (!(action.action === 'card')) {
                _context.n = 1;
                break;
              }
              cardInfo = null; // Спочатку перевіряємо новий метод (з DB)
              if (torrentData.tmdb_id && torrentData.media_type) {
                cardInfo = {
                  tID: torrentData.tmdb_id,
                  method: torrentData.media_type
                };
              }
              // Якщо не вийшло, перевіряємо старий метод (з labels)
              else {
                cardInfo = parseLabels(torrentData.labels);
              }
              if (cardInfo) {
                Lampa.Activity.push({
                  url: '',
                  component: 'full',
                  id: cardInfo.tID,
                  method: cardInfo.method,
                  source: Lampa.Storage.field('source') || 'tmdb'
                });
              } else {
                Lampa.Bell.push({
                  text: 'No metadata available for this torrent'
                });
              }
              _context.n = 29;
              break;
            case 1:
              _context.p = 1;
              if (!(action.action === 'parse')) {
                _context.n = 3;
                break;
              }
              // Використовуємо нову уніфіковану функцію для одного торента
              clientConfig = {
                type: 'qbittorrent',
                url: Lampa.Storage.field("lmetorrentqBittorentUrl"),
                useProxy: Lampa.Storage.field("lmetorrentqBittorentProxy") === true
              };
              _context.n = 2;
              return updateMetadataForTorrent(torrentData, clientConfig);
            case 2:
              _context.n = 6;
              break;
            case 3:
              if (!(action.action === 'parse-all')) {
                _context.n = 5;
                break;
              }
              // Використовуємо нову уніфіковану функцію для всіх торентів
              _clientConfig = {
                type: 'qbittorrent',
                url: Lampa.Storage.field("lmetorrentqBittorentUrl"),
                useProxy: Lampa.Storage.field("lmetorrentqBittorentProxy") === true
              };
              _context.n = 4;
              return updateAllMetadata(allTorrents, _clientConfig);
            case 4:
              _context.n = 6;
              break;
            case 5:
              _context.n = 6;
              return Qbittorent.SendCommand(action, torrentData);
            case 6:
              _context.n = 29;
              break;
            case 28:
              _context.p = 28;
              _t2 = _context.v;
              console.error('TDM', 'Error handling action:', _t2);
              Lampa.Bell.push({
                text: Lampa.Lang.translate('actionReturnedError')
              });
            case 29:
              return _context.a(2);
          }
        }, _callee, null, [[1, 28]]);
      }));
      return _handleTorrentAction.apply(this, arguments);
    }

    /**
     * Utility functions for Torrent Manager plugin
     */

    /**
     * Create a panel navigation item for Lampa.Select.show
     * @returns {Function} Function that calls Lampa.Activity.push
     */
    function createPanelNavigationItem() {
      return function () {
        Lampa.Activity.push({
          url: '',
          title: "qBittorrent Manager",
          component: 'lmetorrentPanel',
          page: 1
        });
      };
    }

    var HeaderIconController = /*#__PURE__*/function () {
      function HeaderIconController(element) {
        _classCallCheck(this, HeaderIconController);
        this.element = element;
        this.bind();
        this.listen();
      }
      return _createClass(HeaderIconController, [{
        key: "bind",
        value: function bind() {
          this.element.on('hover:enter', this.showSidebar.bind(this));
        }
      }, {
        key: "listen",
        value: function listen() {
          TorrentStateManager$1.on('torrents:status_changed', this.updateColor.bind(this));
        }
      }, {
        key: "showSidebar",
        value: function showSidebar() {
          var torrents = TorrentStateManager$1.torrents.filter(function (t) {
            return t.state !== 'Finished' && t.completed !== 1;
          });
          var sortedTorrents = this.sortTorrents(torrents);
          var activeDownloads = torrents.filter(function (t) {
            return t.state === 'Downloading' || t.state === 'Сhecking';
          }).length;
          // Create items for Lampa.Select.show
          var items = [
          // Panel navigation item
          //createPanelNavigationItem(),
          {
            title: "qBittorrent Manager",
            action: 'panel',
            onSelect: function onSelect() {
              createPanelNavigationItem()();
            }
          }].concat(_toConsumableArray(sortedTorrents.map(function (torrent) {
            return {
              title: "".concat(torrent.name, " (").concat(Math.round((torrent.completed || 0) * 100), "%)"),
              action: 'torrent',
              torrent: torrent
            };
          })));
          Lampa.Select.show({
            title: "Torrents (".concat(activeDownloads, "/").concat(TorrentStateManager$1.torrents.length, ")"),
            items: items,
            onBack: function onBack() {
              Lampa.Controller.toggle('content');
            },
            onSelect: function onSelect(item) {
              if (item.action === 'torrent') {
                showTorrentMenu(item.torrent);
              } else if (item.action === 'panel') {
                item.onSelect();
              }
              // For summary item, we could show a general menu or just do nothing
            }
          });
        }
      }, {
        key: "sortTorrents",
        value: function sortTorrents(torrents) {
          return torrents.sort(function (a, b) {
            if (a.state === 'downloading' && b.state !== 'downloading') return -1;
            if (a.state !== 'downloading' && b.state === 'downloading') return 1;
            return b.id - a.id;
          });
        }
      }, {
        key: "updateColor",
        value: function updateColor(event) {
          if (event.active) {
            this.element.style.color = 'yellow';
          } else {
            this.element.style.color = 'limegreen';
          }
        }
      }]);
    }();

    function headerIcon() {
      var icon_html = "\n        <div class=\"head__action selector torrent-manager-icon\">\n            <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M12 4L12 14\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n                <path d=\"M16 10L12 14L8 10\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n                <path d=\"M4 18H20\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n            </svg>\n        </div>";
      var element = document.createElement('div');
      element.innerHTML = icon_html;
      return element.firstElementChild;
    }
    var DomInjector = /*#__PURE__*/function () {
      function DomInjector() {
        _classCallCheck(this, DomInjector);
      }
      return _createClass(DomInjector, [{
        key: "inject",
        value: function inject() {
          var iconElement = headerIcon();
          Lampa.Head.render().find('.open--search').after(iconElement);
          return new HeaderIconController(iconElement);
        }
      }]);
    }();
    var DomInjector$1 = new DomInjector();

    /**
     * Torrent Manager Plugin for Lampa
     * 
     * This plugin provides integration with various torrent clients
     * to manage torrents directly from the Lampa interface.
     * 
     * @version 2.7
     * @author @lme_chat
     */

    /** 
     * Plugin manifest information
     */
    var MANIFEST = {
      type: 'other',
      version: '2.7',
      author: '@lme_chat',
      name: 'Torrent Manager',
      description: 'Manager and Runner query',
      component: 'lmetorrent',
      icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"200\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M13.684 23.94a12.013 12.013 0 0 0 9.599-7.79c-.118.044-.26.096-.432.147c-2 .59-3.404-.466-3.687-.649c-.283-.18-.587-.48-.643-.464c-.183 1.132-1.218 2.706-3.58 3.42c-1.295.391-2.687.4-3.681-.157l.328.822c.13.328.351.866.488 1.192c0 0 .858 2.044 1.608 3.48M2.723 7.153l3.54-.66c.323-.059.68.124.794.407l2.432 6.07c.332.633.399.773.615 1.043c0 0 1.68 2.398 4.24 1.812c1.726-.394 2.532-1.69 2.587-2.612c.057-.296-.032-.669-.185-1.016L13.832 5.61c-.117-.266.022-.527.306-.581l2.953-.55a.69.69 0 0 1 .706.376l3.227 6.91c.13.276.394.712.588.966c0 0 .671.964 1.747.78c.266 0 .569-.143.569-.143c.047-.43.072-.866.072-1.31c0-6.627-5.373-12-12.002-12C5.372.06 0 5.433 0 12.06c0 5.319 3.46 9.827 8.252 11.402a24.768 24.768 0 0 1-.919-2.121L2.298 7.808c-.111-.297.083-.59.425-.654\"/></svg>"
    };

    /**
     * Register all UI templates with Lampa
     */
    function registerTemplates() {
      // CSS styles
      Lampa.Template.add('lmemStyle', "\n        <style>\n            @charset 'UTF-8';.btnTDdownload{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}svg.btnTDdownload{width:36px;height:36px;margin-right:5%}.lmetorrent-error_body{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center}.lmetorrent-error_body .lmetorrent-error_result{margin-top:2em}.lmetorrent-head{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:0 2% 0 2%;margin:0 2% 2% 2%}.lmetorrent-header__update{white-space:nowrap}.lmetorrent-header__space{margin-left:auto}.lmetorrent-catalog--list.category-full{margin-left:2%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}.lmetorrent_card__completed{position:absolute;right:0;bottom:0;font-size:.8em;-webkit-border-radius:.3em;-moz-border-radius:.3em;padding:.4em .4em;border-radius:.3em;text-align:center;font-weight:bold;background-color:var(--background-color);color:var(--text-color)}.lmetorrent_card__completed[data-completed]:nth-child(n):nth-last-child(n+51){--background-color:#fcc;--text-color:#900}.lmetorrent_card__completed[data-completed]:nth-child(n+51):nth-last-child(n+2){--background-color:#ffc;--text-color:#990}.lmetorrent_card__completed[data-completed='100']{--background-color:#cfc;--text-color:#090}.lmetorrent_card__state{left:0;top:0}.lmetorrent_card__size{left:0;bottom:0}.lmetorrent_card__size,.lmetorrent_card__state{position:absolute;padding:.4em .4em;background:#fff;color:#000;font-size:.8em;-webkit-border-radius:.3em;border-radius:.3em}.lmetorrent-item{margin-right:.5em;margin-bottom:1em;width:13%;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;border:solid .01em #fff;-webkit-border-radius:.8em;border-radius:.8em}.lmetorrent-item.focus{border:solid .26em #fff}.lmetorrent-item__data{margin-bottom:.4em}.lmetorrent-item__state{top:.5em;left:.5em;padding:.1em .3em;font-weight:bold;-webkit-border-radius:.25em;border-radius:.25em;color:#292d32;background-color:#eee}.lmetorrent-item__badge>svg{width:1em;height:1em;vertical-align:bottom}.lmetorrent-item__name{font-size:1.1em;margin-top:.8em;white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis}@media screen and (max-width:580px){.lmetorrent-item{width:21%}}@media screen and (max-width:385px){.lmetorrent-item__name{display:none}}.torrent-manager-icon{--icon-status-color:limegreen;color:var(--icon-status-color)}.torrent-manager-sidebar{position:fixed;top:0;right:-350px;width:350px;height:100%;background-color:rgba(0,0,0,0.85);z-index:1000;-webkit-transition:right .3s;-o-transition:right .3s;transition:right .3s;color:white;padding:20px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.torrent-manager-sidebar.visible{right:0}.torrent-manager-sidebar__header{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:20px;font-weight:bold;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.torrent-manager-sidebar__list{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:10px;overflow-y:auto;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1}.torrent-manager-sidebar__item{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:10px;background-color:rgba(255,255,255,0.1);-webkit-border-radius:5px;border-radius:5px;cursor:pointer;gap:10px}.torrent-manager-sidebar__item:hover{background-color:rgba(255,255,255,0.2)}.torrent-manager-sidebar__item-name{white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1}.torrent-manager-sidebar__item-percent{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}\n        </style>\n    ");

      // Header template
      Lampa.Template.add('lmetorrent_header', "<div class=\"lmetorrent-header__data lmetorrent-header__update simple-button selector\">Update</div>\n          <div class=\"lmetorrent-header__data lmetorrent-header__space\">Free space: {space}</div>\n        ");

      // List item template
      Lampa.Template.add('lmetorrent_item', "<div class=\"card selector lmetorrent-item\">\n            <div class=\"lmetorrent-item__data lmetorrent-item__name\">{name}</div>\n            <div class=\"lmetorrent-item__data lmetorrent-item__state\">{state}</div>\n            <div class=\"lmetorrent-item__data lmetorrent-item__progress\">{size} / {completed}</div>\n        </div>");

      // Card item template
      Lampa.Template.add('lmetorrent_item__card', "<div class=\"card card--category selector layer--visible layer--render\">\n            <div class=\"card__view\">\n                <img src=\"{image}\" data-src=\"{image_src}\" alt=\"{title}\" class=\"card__img\">\n                <div class=\"card__icons\">\n                    <div class=\"card__icons-inner\">\n                    </div>\n                </div>\n                <div class=\"lmetorrent_card__state\">{state}</div>\n                <div class=\"lmetorrent_card__size\">{size}</div>\n                <div class=\"lmetorrent_card__completed\" data-completed=\"{data-completed}\">{completed}</div>\n            </div>\n        </div>");
    }

    /**
     * Check if a session key date is older than 5 days
     * 
     * @param {number} keyDate - Timestamp of the key creation date
     * @returns {boolean} - True if the key is old or doesn't exist
     */
    function isKeyDateOld(keyDate) {
      if (!keyDate) {
        return true;
      }
      var currentTimestamp = Math.floor(Date.now() / 1000);
      var fiveDaysInSeconds = 5 * 24 * 60 * 60;
      var timestampFiveDaysAgo = currentTimestamp - fiveDaysInSeconds;
      return keyDate < timestampFiveDaysAgo;
    }

    /**
     * Create and add menu button for the plugin
     * 
     * @returns {JQuery} - The created button element
     */
    function createMenuButton() {
      var button = $("<li class=\"menu__item selector\">\n            <div class=\"menu__ico\">".concat(MANIFEST.icon, "</div>\n            <div class=\"menu__text\">").concat(MANIFEST.name, "</div>\n        </li>"));
      button.on('hover:enter', function () {
        createPanelNavigationItem()();
      });
      return button;
    }

    /**
     * Initialize client authentication based on selected client
     */
    function initializeClientAuth() {
      // qBittorrent doesn't require authentication
    }

    /**
     * Main plugin initialization function
     */
    function initializePlugin() {
      try {
        // Initialize language support
        Component$1();

        // Register UI templates
        registerTemplates();

        // Register panel component
        Lampa.Component.add('lmetorrentPanel', Component);

        // Register plugin in manifest
        Lampa.Manifest.plugins = MANIFEST;

        // Add menu button
        torrentInfo();
        $('.menu .menu__list').eq(0).append(createMenuButton());

        // Add CSS styles
        $('body').append(Lampa.Template.get('lmemStyle', {}, true));

        // Initialize configuration
        Main$1(MANIFEST);

        // Initialize downloader
        Send();

        // Initialize client authentication
        initializeClientAuth();

        // Initialize new header feature
        var iconController = DomInjector$1.inject();
        TorrentStateManager$1.start();
      } catch (error) {
        console.error('TDM', 'Error initializing Torrent Manager plugin:', error);
      }
    }

    /**
     * Start the plugin when Lampa is ready
     */
    function startPlugin() {
      window.plugin_lmetorrent_ready = true;
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

    // Initialize the plugin if not already initialized
    if (!window.plugin_lmetorrent_ready) {
      startPlugin();
    }

})();
