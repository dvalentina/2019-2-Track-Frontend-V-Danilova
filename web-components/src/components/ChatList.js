const template = document.createElement('template');
template.innerHTML = `
  <style>
    .chat-list-space {
      display: flex;
      flex-direction: column;
      height: calc(100vh - 175px);
      width: 100%;
      overflow-y: scroll;
      background-color: white;
    }

    .create-chat-button {
      display: inline-block;
      position: absolute;
      right: 60px;
      bottom: 60px;
      background-color: #F7D721;
      fill: #9D8500;
      height: 200px;
      width: 200px;
      border-radius: 50%;
      cursor: pointer;
      border: none;
      outline: none;
    }
  </style>
  <div class="chat-list-space"></div>
  <button class="create-chat-button">
    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="50px" y="50px"
    width="100px" height="100px" viewBox="0 0 528.899 528.899" style="enable-background:new 0 0 528.899 528.899;"
    xml:space="preserve">
      <g>
        <path d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981
        c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611
        C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069
        L27.473,390.597L0.3,512.69z"/>
      </g>
    </svg>
  </button>
`;

class ChatList extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.$chatlistHeader = this.shadowRoot.querySelector('.chatlist-header');
    this.$chatListSpace = this.shadowRoot.querySelector('.chat-list-space');
    this.$createChatButton = this.shadowRoot.querySelector('.create-chat-button');

    this.$chatHistory = JSON.parse(localStorage.getItem('chats')) || [];
    this.renderChats();

    this.$createChatButton.addEventListener('click', this.onCreateChatButtonClicked.bind(this));
  }

  renderChats() {
    this.$chatHistory = JSON.parse(localStorage.getItem('chats')) || [];
    for (let i = 0; i < this.$chatHistory.length; i += 1) {
      const newChat = document.createElement('chat-block');
      newChat.setAttribute('id', i);
      newChat.chatName = this.$chatHistory[i].chatName;

      const chatMessages = this.$chatHistory[i].messages;
      const lastMessageNumber = chatMessages.length - 1;
      if (lastMessageNumber >= 0) {
        newChat.chatLastMessage = chatMessages[lastMessageNumber].innerText;
        newChat.chatTime = chatMessages[lastMessageNumber].time;
      } else {
        newChat.chatLastMessage = 'No messages yet';
        newChat.time = '';
      }
      this.$chatListSpace.insertAdjacentElement(
        'afterbegin',
        newChat,
      );
    }
  }

  clearChats() {
    while (this.$chatListSpace.firstChild) {
      this.$chatListSpace.removeChild(this.$chatListSpace.firstChild);
    }
  }

  onCreateChatButtonClicked() {
    this.addNewChat();
  }

  addNewChat() {
    this.$chatHistory = JSON.parse(localStorage.getItem('chats')) || [];
    const newChat = document.createElement('chat-block');
    const chatId = this.$chatHistory.length;
    newChat.setAttribute('id', chatId);

    newChat.chatName = `Name Surname #${chatId}`;
    newChat.chatLastMessage = 'Last message text';

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
    newChat.chatTime = `${twoDigitsAdjustmentHours}${nowHours}:${twoDigitsAdjustmentMinutes}${nowMinutes}`;

    newChat.messages = [];

    this.$chatHistory.push({
      id: newChat.id,
      messages: newChat.messages,
      chatName: newChat.chatName,
    });

    this.addChatToLocalStorage();

    this.$chatListSpace.insertAdjacentElement(
      'afterbegin',
      newChat,
    );
  }

  addChatToLocalStorage() {
    if (this.$chatHistory === '') {
      this.$chatHistory = [];
    }
    localStorage.setItem('chats', JSON.stringify(this.$chatHistory));
  }
}

customElements.define('chat-list', ChatList);
