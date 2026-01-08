// Создаём глобальный объект
window.qbPlugin = {
  apiUrl: 'https://torp.struvehome.com/torrents',

  getTorrents: async function() {
    try {
      const res = await fetch(this.apiUrl);
      return await res.json();
    } catch (e) {
      console.error('Failed to fetch torrents:', e);
      return [];
    }
  },

  renderUI: async function() {
    const torrents = await this.getTorrents();
    const container = document.createElement('div');
    container.style.padding = '10px';
    container.style.background = '#111';
    container.style.color = '#fff';
    container.style.fontFamily = 'sans-serif';

    if (!torrents || torrents.length === 0) {
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

    document.body.innerHTML = '';
    document.body.appendChild(container);
  },

  initHeaderButton: function() {
    const btn = document.createElement('button');
    btn.innerText = 'qBittorrent';
    btn.style.padding = '6px 12px';
    btn.style.margin = '4px';
    btn.style.background = '#ff5722';
    btn.style.color = '#fff';
    btn.style.border = 'none';
    btn.style.borderRadius = '4px';
    btn.style.cursor = 'pointer';
    btn.onclick = () => this.renderUI();

    const header = document.querySelector('header') || document.body;
    header.appendChild(btn);
  },

  init: function() {
    this.initHeaderButton();
  }
};

// Автозапуск
window.qbPlugin.init();
