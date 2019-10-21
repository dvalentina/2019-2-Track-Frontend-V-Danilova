const template = document.createElement('template');
template.innerHTML = `
    <style>
        form-input {
            display: flex;
            flex-direction: row;
            width: 100%;
            align-items: center;
            background-color: white;
        }

        .chat-box {
            display: flex;
            flex-direction: column;
        }

        input[type=submit] {
            visibility: collapse;
        }
    </style>
    <form>
        <div class="chat-box"></div>
        <form-input name="message-text" placeholder="Cообщение"></form-input>
    </form>
`;

class MessageForm extends HTMLElement {
    constructor () {
        super();
        this.shadowRoot = this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.$form = this.shadowRoot.querySelector('form');
        this.$input = this.shadowRoot.querySelector('form-input');
        this.$chatbox = this.shadowRoot.querySelector('.chat-box');

        this.$messageHistory = JSON.parse(localStorage.getItem('key')) || [];

        for(let i = 0; i < this.$messageHistory.length; ++i) {
            const newMessage = document.createElement('my-message');
            newMessage.innerText = this.$messageHistory[i].innerText;
            newMessage.time = this.$messageHistory[i].time;
            this.$chatbox.insertBefore(newMessage, this.$chatbox.firstChild);
        }

        this.$form.addEventListener('submit', this._onSubmit.bind(this));
        this.$form.addEventListener('keypress', this._onKeyPress.bind(this));
    }

    _onSubmit (event) {
        event.preventDefault();
        if (this.$input.value === '') {
            return;
        }
        const newMessage = document.createElement('my-message');
        newMessage.innerText = this.$input.value;
        let now = new Date();
        newMessage.time = now.toTimeString();

        this.$messageHistory.push({ innerText: newMessage.innerText, time: newMessage.time });
        this.$chatbox.insertBefore(newMessage, this.$chatbox.firstChild);
        this.$input.value = '';
        this.addMessageToLocalStorage();
    }

    _onKeyPress (event) {
        if (event.keyCode === 13) {
            this.$form.dispatchEvent(new Event('submit'));
        }
    }

    addMessageToLocalStorage() {
        if (this.$messageHistory === '') {
            this.$messageHistory == [];
        }
        localStorage.setItem('key', JSON.stringify(this.$messageHistory));
    }
}

customElements.define('message-form', MessageForm);
