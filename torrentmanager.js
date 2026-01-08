window.qbPlugin = {
    name: 'qBittorrent', // название для Lampa
    apiUrl: 'https://torp.struvehome.com/torrents',

    getTorrents: async function() {
        try {
            const res = await fetch(this.apiUrl);
            return await res.json();
        } catch (e) {
            console.error('Fetch error', e);
            return [];
        }
    },

    renderUI: async function() {
        const torrents = await this.getTorrents();
        const container = document.createElement('div');
        container.style.padding = '10px';
        container.style.background = '#111';
        container.style.color = '#fff';

        if (!torrents.length) {
            container.innerText = 'Нет торрентов';
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

    init: function() {
        // Этот метод Lampa вызывает автоматически
        console.log('qBittorrent plugin loaded');
    }
};

// Авто-запуск init
window.qbPlugin.init();
