document.querySelector('.player-chunk-prev').addEventListener('click', () => {
    moveClass('player-chunk--active', 'previousElementSibling')
    moveClass('timeline-chunk--active', 'previousElementSibling', (el) => {
        const inner = el.querySelector('.timeline-chunk-inner');
        let w = parseFloat(inner.style.width) || 0;
        el.querySelector('.timeline-chunk-inner').style.width = '';
        return w <= 20 
       
    });

});

document.querySelector('.player-chunk-next').addEventListener('click', next)

function next() {
    const el = moveClass('timeline-chunk--active', 'nextElementSibling')
    moveClass('player-chunk--active', 'nextElementSibling')
    if (el) {
        el.querySelector('.timeline-chunk-inner').style.width = '';
    }
}


function moveClass(className, method, pred) {
    const active = document.querySelector('.' + className);
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
        const active = document.querySelector('.timeline-chunk--active').querySelector('.timeline-chunk-inner');
        let w = parseFloat(active.style.width) || 0;
        if (w === 100) {
            next();

            return;
        }
        active.style.width = String(w + step) + '%';

    }, (time * 1000) * (step / 100));
}

runInterval(5, 1)