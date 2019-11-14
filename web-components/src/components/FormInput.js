const template = document.createElement('template');
template.innerHTML = `
  <style>
    input {
      border: 0;
      outline: none;
      width: calc(100vw - 11vh);
      height: 12vh;
      padding-left: 3.5vh;
      font-size: 3.5vh;
      display: flex;
      flex-direction: row;
    }

    :host {
      display: inline-block;
      border-top: 1px solid rgba(25, 25, 25, 0.32);
    }

    .button-attachment {
      display: flex;
      width: 7vh;
      height: 7vh;
      align-content: center;
      background-color: white;
      position: relative;
    }

    .button-attachment-svg {
      position: absolute;
      top: 1.5vh;
      left: 1.5vh;
    }

    button {
      display: inline-block;
      border: none;
      cursor: pointer;
      outline: none;
      transition: background-color 0.5s, border-radius 0.5s;
    }
    button:hover {
      background-color: rgba(0,0,0, 0.2);
      border-radius: 50%;
      cursor: pointer;
    }

  </style>
  <input type="text"></input>
  <button class="button-attachment">
    <svg class="button-attachment-svg" version="1.1" id="Capa_1" x="0px" y="0px"
    width="4vh" height="4vh" fill="grey" viewBox="0 0 510 510" style="enable-background:new 0 0 510 510;" xml:space="preserve">
      <g>
        <g id="attachment">
          <path d="M140.25,395.25C63.75,395.25,0,331.5,0,255s63.75-140.25,140.25-140.25H408c56.1,0,102,45.9,102,102
            c0,56.1-45.9,102-102,102H191.25c-35.7,0-63.75-28.05-63.75-63.75s28.05-63.75,63.75-63.75H382.5v38.25H191.25
            c-15.3,0-25.5,10.2-25.5,25.5s10.2,25.5,25.5,25.5H408c35.7,0,63.75-28.05,63.75-63.75S443.7,153,408,153H140.25
            c-56.1,0-102,45.9-102,102c0,56.1,45.9,102,102,102H382.5v38.25H140.25z"/>
        </g>
      </g>
    </svg>
  </button>
`;

class FormInput extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.$input = this.shadowRoot.querySelector('input');
  }

  static get observedAttributes() {
    return ['name', 'value', 'placeholder', 'disabled'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.$input.setAttribute(name, newValue);
  }

  get value() {
    return this.$input.value;
  }

  set value(value) {
    this.$input.value = value;
  }
}

customElements.define('form-input', FormInput);
