(function () {
    'use strict';

    /**
     * Плагин для отправки магнет ссылок в Telegram
     * При долгом нажатии на фильм появляется кнопка "Отправить в Telegram"
     */

    // Настройки Telegram
    var TELEGRAM_BOT_TOKEN = '8441157245:AAH2ciDkbEyoNo0bqsATxUbL3IOmUGXoTI0';
    var TELEGRAM_CHAT_ID = '890726322';

    /**
     * Отправляет магнет ссылку в Telegram
     * @param {Object} selectedTorrent - Объект с информацией о торренте
     * @param {string} labels - Метки (не используется)
     * @param {string} dtype - Тип (не используется)
     */
    function send2Telegram(selectedTorrent, labels, dtype) {
        if (!selectedTorrent) {
            Lampa.Bell.push({
                text: 'Ошибка: Торрент не выбран'
            });
            return;
        }

        // Получаем магнет ссылку
        var magnetLink = selectedTorrent.MagnetUri || selectedTorrent.Link;

        if (!magnetLink) {
            Lampa.Bell.push({
                text: 'Ошибка: Магнет ссылка не найдена'
            });
            return;
        }

        // Получаем название фильма
        var movieTitle = null;
        try {
            var activeMovie = Lampa.Activity.active().movie;
            if (activeMovie) {
                movieTitle = activeMovie.title || activeMovie.name || null;
            }
        } catch (e) {
            console.log('Telegram: Не удалось получить название фильма');
        }

        // Формируем сообщение
        var message = '🔗 Магнет ссылка';
        if (movieTitle) {
            message += '\n\n📽️ ' + movieTitle;
        }
        message += '\n\n' + magnetLink;

        // Показываем уведомление
        Lampa.Bell.push({
            text: 'Отправка в Telegram...'
        });

        // Отправляем в Telegram
        $.ajax({
            url: 'https://api.telegram.org/bot' + TELEGRAM_BOT_TOKEN + '/sendMessage',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: message
            }),
            timeout: 10000
        }).done(function(response) {
            if (response.ok) {
                Lampa.Bell.push({
                    text: '✅ Магнет ссылка отправлена в Telegram'
                });
                console.log('Telegram: Сообщение отправлено успешно');
            } else {
                Lampa.Bell.push({
                    text: '❌ Ошибка: ' + (response.description || 'Неизвестная ошибка')
                });
                console.error('Telegram: Ошибка отправки:', response);
            }
        }).fail(function(jqXHR, textStatus, errorThrown) {
            Lampa.Bell.push({
                text: '❌ Ошибка подключения к Telegram'
            });
            console.error('Telegram: Ошибка запроса:', textStatus, errorThrown);
        });
    }

    /**
     * Инициализация плагина
     */
    function initTelegramSender() {
        // Подписываемся на событие долгого нажатия на торрент
        Lampa.Listener.follow('torrent', function (e) {
            if (e.type === 'onlong') {
                var selectedTorrent = e.element;

                // Добавляем кнопку отправки в Telegram
                e.menu.push({
                    title: '<div class="btnTDdownload wait"><svg class="btnTDdownload" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.23-.76.35-1.08.34-.36-.01-1.04-.2-1.53-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" fill="currentColor"/></svg>Telegram</div>',
                    send2app: send2Telegram,
                    onSelect: function(a) {
                        a.send2app(selectedTorrent, null, null);
                    }
                });
            }
        });

        console.log('Telegram Sender: Плагин инициализирован');
    }

    /**
     * Запуск плагина
     */
    function startPlugin() {
        if (window.Lampa) {
            // Если Lampa уже загружена
            initTelegramSender();
        } else {
            // Ждем загрузки Lampa
            if (window.appready) {
                initTelegramSender();
            } else {
                Lampa.Listener.follow('app', function (e) {
                    if (e.type === 'ready') {
                        initTelegramSender();
                    }
                });
            }
        }
    }

    // Инициализация плагина
    if (!window.telegram_sender_ready) {
        window.telegram_sender_ready = true;
        startPlugin();
    }

})();
