export default class QBPlugin {
  constructor() {
    // URL вашего HTTPS proxy
    this.apiUrl = 'https://torproxy.struvehome.com/torrents';

    // Название и иконка для шапки Lampa
    this.name = 'qBittorrent';
    this.icon = 'icon.png';
  }

  // Метод для запроса списка торрентов
  async getTorrents() {
    try {
      const res = await fetch(this.apiUrl);
      const data = await res.json();
      return data;
    } catch (e) {
      console.error('Failed to fetch torrents:', e);
      return [];
    }
  }

  // Метод для отображения UI
  async renderUI() {
    const torrents = await this.getTorrents();
    const container = document.createElement('div');
    container.style.padding = '10px';
    container.style.background = '#111';
    container.style.color = '#fff';
    container.style.fontFamily = 'sans-serif';

    if (torrents.length === 0) {
      container.innerText = 'Нет торрентов или ошибка подключения';
    } else {
      const list = document.createElement('ul');
      torrents.forEach(t => {
        const li = document.createElement('li');
        li.innerText = `${t.name} — ${t.progress.toFixed(1)}%`;
        list.appendChild(li);
      });
      container.appendChild(list);
    }

    // Добавляем в body
    document.body.innerHTML = ''; // очищаем
    document.body.appendChild(container);
  }

  // Метод для интеграции кнопки в шапку
  initHeaderButton() {
    const btn = document.createElement('button');
    btn.innerText = this.name;
    btn.style.padding = '6px 12px';
    btn.style.margin = '4px';
    btn.style.background = '#ff5722';
    btn.style.color = '#fff';
    btn.style.border = 'none';
    btn.style.borderRadius = '4px';
    btn.style.cursor = 'pointer';
    btn.onclick = () => this.renderUI();

    // Добавляем в шапку (header)
    const header = document.querySelector('header') || document.body;
    header.appendChild(btn);
  }

  // Инициализация плагина
  init() {
    this.initHeaderButton();
  }
}

// Автоматический запуск
window.qbPlugin = new QBPlugin();
window.qbPlugin.init();
