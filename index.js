

function initPlayer(params) {
    const target = document.querySelector(params.target);

    if (target === null || params.slides === undefined) {
        return;
    }

    let timelineChunks = '';
    let playerChunks = '';
    let isFirst = true

    for (const el of params.slides) {
        timelineChunks += `
            <div class="timeline-chunk ${isFirst ? 'timeline-chunk--active' : ''}">
                <div class="timeline-chunk-inner"></div>
            </div>
        `;
        playerChunks += `
            <div class="player-chunk ${isFirst ? 'player-chunk--active' : ''}">
                <img class="player-img" src="${el.url}" alt="${el.alt || ''}">
            </div>
        `;
        isFirst = false
    }

    target.innerHTML = `
        
        <div class="player">
            <div class="timeline">${timelineChunks}</div>

            <div class="player-content-wrapper">
                <div class="player-chunk-switcher player-chunk-prev"></div>
                <div class="player-chunk-switcher player-chunk-next"></div>

                <div class="player-content">${playerChunks}</div>
            </div>
        </div>
    `;

    

    target.querySelector('.player-chunk-prev').addEventListener('click', () => {
        moveClass('player-chunk--active', 'previousElementSibling')
        moveClass('timeline-chunk--active', 'previousElementSibling', (el) => {
            const inner = el.querySelector('.timeline-chunk-inner');
            let w = parseFloat(inner.style.width) || 0;
            el.querySelector('.timeline-chunk-inner').style.width = '';
            return w <= 20

        });

    });

    target.querySelector('.player-chunk-next').addEventListener('click', next);

    function next() {
        const el = moveClass('timeline-chunk--active', 'nextElementSibling')
        moveClass('player-chunk--active', 'nextElementSibling')
        if (el) {
            el.querySelector('.timeline-chunk-inner').style.width = '';
        }
    }


    function moveClass(className, method, pred) {
        const active = target.querySelector('.' + className);
        const next = active[method];

        if (pred && !pred(active)) {
            return null;
        }

        if (next) {
            active.classList.remove(className);
            next.classList.add(className);
            return active;
        }

        return null;
    }

    let timer;

    function runInterval(time, step) {
        clearInterval(timer);

        timer = setInterval(() => {
            const active = target.querySelector('.timeline-chunk--active').querySelector('.timeline-chunk-inner');
            let w = parseFloat(active.style.width) || 0;
            if (w === 100) {
                next();

                return;
            }
            active.style.width = String(w + step) + '%';
            console.log((time * 1000) * (step / 100));
        }, (time * 1000) * (step / 100));
    }

    runInterval(params.delayPerSlide || 1, 1)

}




initPlayer({
    target: '.my-player',
    slides: [
        {url: 'img/1.jpg', alt: 'img1'},
        {url: 'img/2.jpg', alt: 'img2'},
        {url: 'img/3.jpg', alt: 'img3'},
        {url: 'img/4.jpg', alt: 'img4'},
    ],
    delayPerSlide: 5
})






