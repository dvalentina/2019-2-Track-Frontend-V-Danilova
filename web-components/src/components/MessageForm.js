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
      flex-direction: column-reverse;
      height: calc(100vh - 315px);
      overflow-y: auto;
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
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.$form = this.shadowRoot.querySelector('form');
    this.$input = this.shadowRoot.querySelector('form-input');
    this.$chatbox = this.shadowRoot.querySelector('.chat-box');

    this.$messageHistory = JSON.parse(localStorage.getItem('key')) || [];

    for (let i = 0; i < this.$messageHistory.length; i += 1) {
      const newMessage = document.createElement('my-message');
      newMessage.innerText = this.$messageHistory[i].innerText;
      newMessage.time = this.$messageHistory[i].time;
      newMessage.authorName = this.$messageHistory[i].authorName;
      this.$chatbox.insertBefore(newMessage, this.$chatbox.firstChild);
    }

    this.$form.addEventListener('submit', this.onSubmit.bind(this));
    this.$form.addEventListener('keypress', this.onKeyPress.bind(this));
  }

  onSubmit(event) {
    event.preventDefault();
    if (this.$input.value === '') {
      return;
    }
    const newMessage = document.createElement('my-message');
    newMessage.authorName = 'Me';
    newMessage.innerText = this.$input.value;

    const now = new Date();
    const nowMinutes = now.getMinutes();
    const nowHours = now.getHours();
    let twoDigitsAdjustmentMinutes = '';
    let twoDigitsAdjustmentHours = '';
    if (nowMinutes < 10) {
      twoDigitsAdjustmentMinutes = 0;
    }
    if (nowHours < 10) {
      twoDigitsAdjustmentHours = 0;
    }
    newMessage.time = `${twoDigitsAdjustmentHours}${nowHours}:${twoDigitsAdjustmentMinutes}${nowMinutes}`;

    this.$messageHistory.push({
      authorName: newMessage.authorName,
      innerText: newMessage.innerText,
      time: newMessage.time,
    });
    this.$chatbox.insertBefore(newMessage, this.$chatbox.firstChild);
    this.$input.value = '';
    this.addMessageToLocalStorage();
  }

  onKeyPress(event) {
    if (event.keyCode === 13) {
      this.$form.dispatchEvent(new Event('submit'));
    }
  }

  addMessageToLocalStorage() {
    if (this.$messageHistory === '') {
      this.$messageHistory = [];
    }
    localStorage.setItem('key', JSON.stringify(this.$messageHistory));
  }
}

customElements.define('message-form', MessageForm);
