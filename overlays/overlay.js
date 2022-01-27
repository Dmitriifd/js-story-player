class Overlay {
    /**
     * Список дополнительных классов для наложения
     * @type {string[]}
     */
    classes = [];

    /**
     * Словарь дополнительных стилей для наложения
     * @type {Object<string, string}
     */
    styles = {};

    /**
     * Создает новый экземпляр наложения
     * 
    * Словарь дополнительных стилей для наложения
    * @param {{
    *   classes?: string[]
    *   styles?: Object<string, string>
    * }=} [params] - параметры наложения
    */
    constructor(params) {
        this.classes = params?.classes ?? this.classes;
        if (!Array.isArray(this.classes)) {
            throw new TypeError('Additional classes can be defined only as array')
        }
        this.styles = params?.styles ?? this.styles;
        if (typeof this.styles !== 'object') {
            throw new TypeError('Additional styles can be defined only as object')
        }
    }

    /**
     * Рендерит исходный виджет
     * @type {Element}
     */
    render() {
        const classes = this.classes.join(' ');
        const styles = Object.entries(this.styles)
            .map((el) => el.join(':'))
            .join(';');

        const tpl = `<div class="player-chunck-overlay ${classes}" style="${styles}"></div>`;

        const wrapper = document.createElement('div');
        wrapper.innerHTML = tpl;
        return wrapper.children[0];
    }

}