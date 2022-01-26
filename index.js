initPlayer({
	target: '.my-player',
	slides: [
		{
			url: 'img/1.jpg',
			alt: 'img1',
			overlays: [ 
                { 
                    type: 'text', 
                    value: 'Привет',
                    styles: {
                        color: 'orange',
                        'font-size': '60px',
                        'text-shadow': '1px 1px #000',
                        top: '60%',
                        left: '30%',
                        'transform': 'rotate(-30deg)',
                        animation: 'scale 2s infinite ease-in-out',
                    }
                },
                {
                    type: 'text',
                    value: 'Привет мир',
                    styles: {
                        color: 'orange',
                        'font-size': '20px',
                        'text-shadow': '1px 1px #000',
                        bottom: '10%',
                        right: '30%',
                        'transform': 'rotate(90deg)',
                        animation: 'scale 6s infinite ease-in-out',
                    }
                },
            ],
		},
		{ url: 'img/2.jpg', alt: 'img2' },
		{ url: 'img/3.jpg', alt: 'img3' },
		{ url: 'img/4.jpg', alt: 'img4' },
	],
	delayPerSlide: 5,
});
