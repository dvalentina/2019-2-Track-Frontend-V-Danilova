const template = document.createElement('template');
template.innerHTML = `
  <style>
    form-input {
      display: flex;
      flex-direction: row;
      width: 100vw;
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
    this.$chatBox = this.shadowRoot.querySelector('.chat-box');

    this.$chatHistory = JSON.parse(localStorage.getItem('chats')) || [];

    this.$form.addEventListener('submit', this.onSubmit.bind(this));
    this.$form.addEventListener('keypress', this.onKeyPress.bind(this));
  }

  renderMessages() {
    this.$chatHistory = JSON.parse(localStorage.getItem('chats')) || [];
    const chatId = Number(this.getAttribute('id'));
    this.$messages = this.$chatHistory[chatId].messages;
    for (let i = 0; i < this.$messages.length; i += 1) {
      const newMessage = document.createElement('message-block');
      newMessage.innerText = this.$messages[i].innerText;
      newMessage.time = this.$messages[i].time;
      newMessage.authorName = this.$messages[i].authorName;
      this.$chatBox.insertAdjacentElement(
        'afterbegin',
        newMessage,
      );
    }
  }

  clearMessages() {
    while (this.$chatBox.firstChild) {
      this.$chatBox.removeChild(this.$chatBox.firstChild);
    }
  }

  onSubmit(event) {
    event.preventDefault();
    if (this.$input.value === '') {
      return;
    }
    const newMessage = document.createElement('message-block');
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

    const chatId = Number(this.getAttribute('id'));
    this.$chatHistory = JSON.parse(localStorage.getItem('chats')) || [];
    this.$chatHistory[chatId].messages.push({
      authorName: newMessage.authorName,
      innerText: newMessage.innerText,
      time: newMessage.time,
    });
    this.$chatBox.insertBefore(newMessage, this.$chatBox.firstChild);
    this.$input.value = '';
    this.addMessageToLocalStorage();
  }

  onKeyPress(event) {
    if (event.keyCode === 13) {
      this.$form.dispatchEvent(new Event('submit'));
    }
  }

  addMessageToLocalStorage() {
    const chatId = Number(this.getAttribute('id'));
    if (this.$chatHistory[chatId].messages === '') {
      this.$chatHistory[chatId].messages = [];
    }
    localStorage.setItem('chats', JSON.stringify(this.$chatHistory));
  }
}

customElements.define('message-form', MessageForm);
