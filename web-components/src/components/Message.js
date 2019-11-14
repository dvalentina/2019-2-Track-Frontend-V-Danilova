const template = document.createElement('template');
template.innerHTML = `
  <style>
    form {
      display: flex;
      flex-direction: column;
      animation: 1s ease-out 1 slidein;
    }

    @keyframes slidein {
      from {
        margin-left: 100%;
        width: 210%;
      }

      to {
        margin-left: 0%;
        width: 100%;
      }
    }

    .result {
      position: relative;
      display: flex;
      align-self: flex-end;
      flex-direction: column;
      background-color: rgb(212, 197, 214);
      color: black;
      width: auto;
      height: auto;
      min-width: 40%;
      max-width: 70%;
      min-height: 3vh;
      border: 1px solid #8B008B;
      border-radius: 1vh;
      margin: 1vh 5vh 1vh 1vh;
      padding: 1vh;
    }
    .result:before {
      content: " ";
      position: absolute;
      width: 0;
      height: 0;
      right: -4.2vh;
      bottom: 1vh;
      border: 2vh solid;
      border-color: transparent transparent #8B008B #8B008B;
    }
    .result:after {
      content: " ";
      position: absolute;
      width: 0;
      height: 0;
      right: -3.9vh;
      bottom: 1.1vh;
      border: 2vh solid;
      border-color: transparent transparent #D4C5D6 #D4C5D6;
    }

    .author-name {
      display: flex;
      align-self: flex-start;
      font-size: 3vh;
      color: #8E24AA;
      font-weight: bold;
      padding: 1vh;
    }

    .message {
      display: flex;
      align-self: flex-start;
      font-size: 3vh;
      color: black;
      padding: 1vh 1.2vh;
      line-height: 1;
      word-break: break-all;
    }

    .time {
      display: flex;
      align-self: flex-end;
      font-size: 2vh;
      color: gray;
      padding: 0.5vh;
    }
  </style>
  <form>
    <div class="result">
      <div class="author-name"></div>
      <div class="message"></div>
      <div class="time"></div>
    </div>
  </form>
`;

class Message extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.$authorName = this.shadowRoot.querySelector('.author-name');
    this.$message = this.shadowRoot.querySelector('.message');
    this.$time = this.shadowRoot.querySelector('.time');
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

  get authorName() {
    return this.$authorName.innerText;
  }

  set authorName(name) {
    this.$authorName.innerText = name;
  }
}

customElements.define('message-block', Message);
