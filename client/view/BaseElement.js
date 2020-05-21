export class BaseElement {

    constructor(className, id) {
        this.element = null;
        this.elementType = 'div';
        this.class = className;
        this.id = id;
    }

    appendToElement(el) {
        this.createElement(this.elementType);
        el.appendChild(this.element);
    }
    createElement(elementType) {
        let attribClass = document.createAttribute("class");
        let attribId = document.createAttribute("id");
        attribClass.value = this.class;
        attribId.value = this.id;
        this.element = document.createElement(elementType);
        this.element.setAttributeNode(attribClass);
        this.element.setAttributeNode(attribId);
    }
}