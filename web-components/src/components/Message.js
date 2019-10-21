const template = document.createElement('template');
template.innerHTML = `
    <style>
        .result {
            position: relative;
            background-color: rgb(212, 197, 214);
            color: black;
            width: auto;
            height: auto;
            min-width: 40%;
            max-width: 70%;
            font-size: 40px;
            min-height: 70px;
            border: 1px solid rgba(25, 25, 25, 0.32);
            border-radius: 10px;
            margin: 10px 60px 10px 10px;
            padding: 10px;
        }

        .result:before {
            content: " ";
            position: absolute;
            width: 0;
            height: 0;
            right: -48px;
            bottom: 0px;
            border: 25px solid;
            border-color: transparent transparent rgba(25, 25, 25, 0.32) rgba(25, 25, 25, 0.32);
        }

        .result:after {
            content: " ";
            position: absolute;
            width: 0;
            height: 0;
            right: -46px;
            bottom: 1px;
            border: 25px solid;
            border-color: transparent transparent #D4C5D6 #D4C5D6;
        }

        .message {
            display: flex;
            align-self: flex-start;
            font-size: 30px;
            color: black;
            padding: 10px 15px;
            line-height: 1;
            word-break: break-all;
            -moz-hyphens: auto;
            -webkit-hyphens: auto;
            -ms-hyphens: auto;
        }

        .time {
            display: flex;
            aling-self: flex-end;
            font-size: 20px;
            color: gray;
            padding: 1vh;
        }
    </style>
    <form>
        <div class="message"></div>
        <div class="time"></div>
    </form>
`;

class Message extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
        this.$message = this._shadowRoot.querySelector('.mesage');
        this.$time = this._shadowRoot.querySelector('.time');
    }

    get time() {
        return this.$time.innerText;
    }

    set time(time) {
        this.$time.innerText = time;
    }

    get innerText() {
        return this.$message.innerText;
    }

    set innerText(text) {
        this.$message.innerText = text;
    }
}

customElements.define('my-message', Message);