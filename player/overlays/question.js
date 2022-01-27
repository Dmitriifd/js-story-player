import { Overlay } from './overlay.js';

export class Question extends Overlay {
    /**
     * Текст вопроса
     * @type {string}
     */
    question;

    /**
     * Варианты ответа
     * @type {string[]}
     */
    variants = ['Да', 'Нет'];

    /** @override */
    constructor(params) {
        super(params);
        
        this.question = params?.question;

        if (typeof this.variants !== 'string') {
            throw new ReferenceError('A quistion text to the created overlay is not specified');
        }

        this.variants = params?.variants ?? this.variants;
    }

    /** @override */
    render() {
        const el = super.render();

        el.innerHTML = `
            <div class="question">
                ${overlay.question}
                <div class="question-answers">
                    <button value="1">${overlay.variants[0] || 'Да'}</button>
                    <button value="2">${overlay.variants[1] || 'Нет'}</button>
                </div>
            </div>
        `;
        return el;
    }

}