initPlayer({
	target: '.my-player',
	slides: [
		{
			url: 'img/1.jpg',
			alt: 'img1',
            filter: ['blur(2px)'],
			overlays: [ 
                { 
                    type: 'text', 
                    value: 'Привет',
                    classes: ['watercolor'],
                    styles: {
                        'font-size': '60px',
                        // color: 'orange',
                        // 'text-shadow': '1px 1px #000',
                        // 'transform': 'rotate(-30deg)',
                        top: '30%',
                        left: '20%',
                        // animation: 'scale 2s infinite ease-in-out',
                    }
                },
                {
                    type: 'question',
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
            url: 'img/2.jpg', alt: 'img2', overlays: [
                {
                    type: 'text',
                    value: 'Привет мир',
                    classes: ['watercolor'],
                    styles: {
                        'font-size': '20px',
                        top: '50%',
                        left: '10%',
                    }
                },

            ], },
		{ url: 'img/3.jpg', alt: 'img3' },
		{ url: 'img/4.jpg', alt: 'img4' },
	],
	delayPerSlide: 5,
});
