const template = document.createElement('template');
template.innerHTML = `
  <style>
  .chat-block {
    display: flex;
    flex-direction: row;
    height: 12vh;
    justify-content: stretch;
    align-items: center;
    overflow: hidden;
    transition: background-color 0.5s;
  }
  .chat-block:hover {
    background-color: rgba(142, 36, 170, 0.15);
    cursor: pointer;
  }
  .chat-block:active {
    box-shadow: inset 0 0 20px 0 rgba(0, 0, 0, 0.25);
  }

  .chat-avatar {
    display: flex;
    flex-grow: 0;
    height: 10vh;
    width: 10vh;
    justify-content: center;
    align-items: center;
  }

  .chat-avatar-svg {
    display: flex;
    height: 8vh;
    width: 8vh;
  }

  .chat-block-center-column {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 65vw;
    overflow: hidden;
  }

  .chat-name {
    display: flex;
    font-size: 3.2vh;
    color: black;
    padding: 1vh;
  }

  .chat-last-message {
    display: flex;
    font-size: 3vh;
    color: grey;
    padding: 1vh;
  }

  .chat-block-right-column {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    flex-grow: 1;
  }

  .chat-time {
    display: flex;
    font-size: 2.5vh;
    color: grey;
    padding-top: 2vh;
    padding-right: 2vh;
  }

  .chat-delivery-indicator {
    display: flex;
    fill: #8B008B;
    padding: 2vh;
  }

  hr {
    border: none;
    color: grey;
    background-color: grey;
    height: 1px;
    width: calc(100vw - 12vh);
    margin-left: 12vh;
  }
  </style>

  <div class="chat-block">
    <div class="chat-avatar">
      <svg class="chat-avatar-svg" viewBox="0 0 480 480" fill="black" xmlns="http://www.w3.org/2000/svg">
        <path d="m240 0c-132.546875 0-240 107.453125-240 240s107.453125 240 240 240c7.230469 0 14.433594-.324219 21.601562-.96875 6.664063-.597656 13.269532-1.511719 19.824219-2.65625l2.519531-.445312c121.863282-22.742188 206.359376-134.550782 194.960938-257.996094-11.398438-123.445313-114.9375-217.8945315-238.90625-217.933594zm-19.28125 463.152344h-.566406c-6.222656-.550782-12.398438-1.382813-18.519532-2.449219-.351562-.0625-.703124-.101563-1.046874-.167969-5.984376-1.070312-11.90625-2.398437-17.769532-3.949218l-1.417968-.363282c-5.71875-1.550781-11.375-3.351562-16.949219-5.351562-.578125-.207032-1.160157-.390625-1.738281-.605469-5.464844-2.007813-10.832032-4.257813-16.117188-6.691406-.65625-.292969-1.3125-.574219-1.96875-.886719-5.183594-2.398438-10.265625-5.101562-15.25-7.945312-.703125-.398438-1.414062-.796876-2.117188-1.191407-4.90625-2.863281-9.699218-5.933593-14.402343-9.175781-.710938-.496094-1.429688-.976562-2.136719-1.472656-4.621094-3.277344-9.125-6.757813-13.511719-10.398438l-1.207031-1.054687v-67.449219c.058594-48.578125 39.421875-87.941406 88-88h112c48.578125.058594 87.941406 39.421875 88 88v67.457031l-1.0625.886719c-4.472656 3.734375-9.0625 7.265625-13.777344 10.601562-.625.4375-1.257812.855469-1.878906 1.285157-4.757812 3.304687-9.632812 6.414062-14.625 9.335937-.625.363282-1.265625.707032-1.886719 1.066406-5.058593 2.878907-10.203125 5.597657-15.449219 8.046876-.601562.28125-1.207031.542968-1.816406.800781-5.328125 2.457031-10.742187 4.71875-16.246094 6.742187-.546874.203125-1.097656.378906-1.601562.570313-5.601562 2.007812-11.28125 3.824219-17.03125 5.382812l-1.378906.34375c-5.871094 1.550781-11.796875 2.886719-17.789063 3.960938-.34375.0625-.6875.105469-1.03125.160156-6.128906 1.070313-12.3125 1.902344-18.539062 2.457031h-.566407c-6.398437.550782-12.800781.847656-19.28125.847656-6.480468 0-12.933593-.242187-19.320312-.792968zm179.28125-66.527344v-52.625c-.066406-57.410156-46.589844-103.933594-104-104h-112c-57.410156.066406-103.933594 46.589844-104 104v52.617188c-86.164062-87.941407-85.203125-228.9375 2.148438-315.699219 87.351562-86.757813 228.351562-86.757813 315.703124 0 87.351563 86.761719 88.3125 227.757812 2.148438 315.699219zm0 0"/>
        <path d="m240 64c-44.183594 0-80 35.816406-80 80s35.816406 80 80 80 80-35.816406 80-80c-.046875-44.164062-35.835938-79.953125-80-80zm0 144c-35.347656 0-64-28.652344-64-64s28.652344-64 64-64 64 28.652344 64 64c-.039062 35.328125-28.671875 63.960938-64 64zm0 0"/>
      </svg>
    </div>
    <div class="chat-block-center-column">
      <div class="chat-name"></div>
      <div class="chat-last-message"></div>
    </div>
    <div class="chat-block-right-column">
      <div class="chat-time"></div>
      <div class="chat-delivery-indicator">
        <svg version="1.1" id="Layer_1" fill="#8B008B" height="3vh" width="3vh" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
          <g>
            <g>
              <path d="M504.502,75.496c-9.997-9.998-26.205-9.998-36.204,0L161.594,382.203L43.702,264.311c-9.997-9.998-26.205-9.997-36.204,0
                c-9.998,9.997-9.998,26.205,0,36.203l135.994,135.992c9.994,9.997,26.214,9.99,36.204,0L504.502,111.7
                C514.5,101.703,514.499,85.494,504.502,75.496z"/>
            </g>
          </g>
        </svg>
      </div>
    </div>
  </div>
  <hr>
  
`;

class ChatBlock extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.$chatBlock = this.shadowRoot.querySelector('.chat-block');
    this.$chatAvatar = this.shadowRoot.querySelector('.chat-avatar');
    this.$chatName = this.shadowRoot.querySelector('.chat-name');
    this.$chatLastMessage = this.shadowRoot.querySelector('.chat-last-message');
    this.$chatTime = this.shadowRoot.querySelector('.chat-time');
    this.$chatDeliveryIndicator = this.shadowRoot.querySelector('.chat-delivery-indicator');

    this.$messengerHeader = document.querySelector('messenger-header');
    this.$chatlistHeader = this.$messengerHeader.shadowRoot.querySelector('div.chatlist-header');
    this.$chatList = document.querySelector('chat-list');
    this.$chatHeader = this.$messengerHeader.shadowRoot.querySelector('div.chat-header');
    this.$chatHeaderName = this.$messengerHeader.shadowRoot.querySelector('p.user-name');
    this.$messageForm = document.querySelector('message-form');

    this.$chatHistory = JSON.parse(localStorage.getItem('chats')) || [];

    this.addEventListener('click', this.openChat.bind(this));
  }

  openChat() {
    this.$chatlistHeader.style.display = 'none';
    this.$chatList.style.display = 'none';
    this.$chatList.clearChats();

    this.$chatHeader.style.display = 'flex';
    const chatId = Number(this.getAttribute('id'));
    this.$chatHistory = JSON.parse(localStorage.getItem('chats')) || [];
    this.$chatHeaderName.textContent = this.$chatHistory[chatId].chatName;

    this.$messageForm.style.display = 'flex';
    this.$messageForm.setAttribute('id', chatId);
    this.$messageForm.renderMessages();
  }

  get chatAvatar() {
    return this.$chatAvatar.innerHTML;
  }

  set chatAvatar(avatar) {
    this.$chatAvatar.innerHTML = avatar;
  }

  get chatName() {
    return this.$chatName.innerText;
  }

  set chatName(name) {
    this.$chatName.innerText = name;
  }

  get chatLastMessage() {
    return this.$chatLastMessage.innerText;
  }

  set chatLastMessage(lastMessage) {
    this.$chatLastMessage.innerText = lastMessage;
  }

  get chatTime() {
    return this.$chatTime.innerText;
  }

  set chatTime(time) {
    this.$chatTime.innerText = time;
  }

  get chatDeliveryIndicator() {
    return this.$chatDeliveryIndicator.innerHTML;
  }

  set chatDeliveryIndicator(deliveryIndicator) {
    this.$chatDeliveryIndicator.innerHTML = deliveryIndicator;
  }
}

customElements.define('chat-block', ChatBlock);
