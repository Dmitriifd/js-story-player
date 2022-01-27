import { Overlay } from './overlays/overlay.js';

/** 
* 
* @typedef {{url: string, alt?: string, overlays?: Overlay[]}}
*/
const Slide;

/** 
* 
* @typedef {Slide[]}
*/
const Slides;

export class Player {
    /** 
    * Контейнер для плеера
    * @type {Element}
    */
    target;

    /** 
    * список слайдов плеера
    * @type {Slides}
    */
    slides;

    /**
     * как долго показывается один слайд
    * @type {number}
    */
    delayPerSlide = 1;

    /**
     * Создает объект плеера
     * 
     * @param {{
     *  target: string,
     *  slides: Slides,
     *  delayPerSlide?: number,
     * }} params - параметры иницилизации
     * 
     *  1. target - место иницилизации плеера, css селектор 
     *  2. slides - список слайдов плеера
     *  3. delayPerSlide -как долго показывается один слайд
     * 
     * @returns {Element|null}
     */
    constructor(params) {
        this.target = document.querySelector(params?.target);

        if (this.target === null) {
            throw new ReferenceError('A target to mount the player is not specified')
        }

        this.slides = params?.slides;

        if (!Array.isArray(this.slides)) {
            throw new TypeError('Slides to render is not specified');
        }

        this.delayPerSlide = params?.delayPerSlide ?? this.delayPerSlide;
    }

    generateTimelineChunks() {
        const wrapper = document.createDocumentFragment();

        for (const i of this.slides.keys()) {
            const el = document.createElement('div');

            el.innerHTML = `
                <div class="timeline-chunk ${i === 0 ? 'timeline-chunk--active' : ''}">
                    <div class="timeline-chunk-inner"></div>
                </div>
            `;

            wrapper.append(el.children[0]);
        }

        return wrapper;
    }

    generatePlayerChunk() {
        const wrapper = document.createDocumentFragment();

        for (const [i, slide] of this.slides.entries()) {
            const style = [];

            if (slide.filter) {
                style.push(`filter: ${slide.filter.join(' ')}`);
            }

            const el = document.createElement('div');
            el.innerHTML = `
                <div class="player-chunk ${i === 0 ? 'player-chunk--active' : ''}">
                    <img class="player-img" src="${slide.url}" alt="${slide.alt ?? ''}" style="${style.join(';')}">
                </div>
            `;
            wrapper.append(el)
        }

        return wrapper;
    }

    /**
     * @param {Slide} slide 
     * @returns {Node}
     */

    generateOverlays(slide) {
        const wrapper = document.createDocumentFragment();

        if (slide.overlays == null) {
            return wrapper;
        }

        let res = '';

        for (const el of slide.overlays) {
            const classes = el.classes !== undefined ? el.classes.join(' ') : '';
            const styles = (el.styles !== undefined ? Object.entries(el.styles) : [])
                .map((el) => el.join(':'))
                .join(';');
            res += `<div class="player-chunck-overlay ${classes}" style="${styles}">${renderOverlay(el)}</div>`;
        }

        return res;

        function renderOverlay(overlay) {
            if (overlay.type === 'text') {
                return overlay.value;
            }
            if (overlay.type === 'img') {
                return `<img src="${overlay.value}" alt="" />`
            }
            if (overlay.type === 'question') {
                return `
                    <div class="question">
                        ${overlay.question}
                        <div class="question-answers">
                            <button value="1">${overlay.variants[0] || 'Да'}</button>
                            <button value="2">${overlay.variants[1] || 'Нет'}</button>
                        </div>
                    </div>
                `
            }
            return '';
        }
    }

    generatePlayerLayout() {
        return `
            <div class="player">
                <div class="timeline">${timelineChunks}</div>

                <div class="player-content-wrapper">
                    <div class="player-chunk-switcher player-chunk-prev"></div>
                    <div class="player-chunk-switcher player-chunk-next"></div>

                    <div class="player-content">${playerChunks}</div>
                </div>
            </div>
        `;
    }

}