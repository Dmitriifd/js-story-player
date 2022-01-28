import Player from './player/player.js';

new Player({
    target: '.my-player',
    delayPerSlide: 5,
    
    slides: [
        {
            url: 'img/1.jpg',
            alt: 'img1',
            filter: ['blur(2px)'],

            overlays: [
                {
                    type: 'Text',
                    text: 'Привет',
                    classes: ['watercolor'],
                    styles: {
                        'font-size': '60px',
                        top: '30%',
                        left: '20%',
                    },
                },
                {
                    type: 'Question',
                    question: 'Какой-то вопрос?',
                    variants: [
                        'Да',
                        'Нет'
                    ],
                    styles: {
                        top: '60%',
                        left: '30%',
                    }
                },

            ],
        },
        {
            url: 'img/2.jpg', 
            alt: 'img2', 
            overlays: [
                {
                    type: 'Text',
                    text: 'Привет мир',
                    classes: ['watercolor'],
                    styles: {
                        'font-size': '20px',
                        top: '50%',
                        left: '10%',
                    }
                },

            ],
        },
        { url: 'img/3.jpg', alt: 'img3' },
        { url: 'img/4.jpg', alt: 'img4' },
    ]
});
