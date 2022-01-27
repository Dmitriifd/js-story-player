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

    /**
   * @override 
   * @param {{
   *   question: string,
   *   variants?: string[],
   *   alt?: string,
   *   classes?: string[],
   *   styles?: Object<string, string>,
   * }=} [params] - параметры наложения:
   * 
   * 1. question -  Текст вопроса
   * 2. [variants] - Варианты ответа
   */
    constructor(params) {
        super(params);
        
        this.question = params?.question;

        if (typeof this.variants !== 'string') {
            throw new ReferenceError('A quistion text to the created overlay is not specified');
        }

        this.variants = params?.variants ?? this.variants;

        if (this.variants.length === 0) {
            throw new Error('There is should be at least variant of answering');
        }
    }

    /** @override */
    render() {
        const el = super.render();

        el.innerHTML = `
            <div class="question">
                ${this.question}
                <div class="question-answers">
                    ${this.variants.map((label, i) => `<button value="${i}">${label}</button>`).join(' ')}
                </div>
            </div>
        `;
        return el;
    }

}