const template = document.createElement('template');
template.innerHTML = `
  <style>
    .chat-header {
      height: 175px;
      background-color: #8B008B;
      display: none;
      flex-direction: row;
      padding: 10px;
      align-items: center;
      justify-content: space-between;
    }

    .chatlist-header {
      height: 175px;
      background-color: #8B008B;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    /*chatheader*/

    .button-return {
      display: flex;
      flex-grow: 4;
    }

    .button-search {
      display: flex;
      flex-grow: 2;
      fill: white;
      height: 60px;
    }

    .user-avatar {
      display: flex;
      flex-grow: 2;
    }

    .user-info {
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: center;
      flex-grow: 2;
      color: white;
    }

    .user-name {
      display: flex;
      font-size: 40px;
      margin-bottom: 0;
    }

    .user-status {
      display: flex;
      font-size: 30px;
    }

    .button-options {
      display: flex;
      flex-grow: 2;
      fill: white;
    }

    /*chatlistheader*/

    .button-menu {
      display: flex;
      flex-grow: 4;
      height: 60px;
      padding: 15px;
    }

    .chatlist-title {
      display: flex;
      flex-grow: 3;
      font-size: 70px;
      font-weight: bold;
      color: white;
    }

    button {
      display: inline-block;
      border: none;
      cursor: pointer;
      outline: none;
      background-color: #8B008B;
    }
  </style>

  <div class="chatlist-header">
    <div class="button-menu">
      <svg version="1.1" id="button-menu-svg" fill="white" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      height="100%" viewBox="0 0 459 459" xml:space="preserve">
        <g>
          <g id="menu">
            <path d="M0,382.5h459v-51H0V382.5z M0,255h459v-51H0V255z M0,76.5v51h459v-51H0z"/>
          </g>
        </g>
      </svg>
    </div>
    <p class="chatlist-title">Messenger</p>
    <div class="button-search">
      <svg version="1.1" height="100%" id="chatlist-button-search" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 451 451" style="enable-background:new 0 0 451 451;" xml:space="preserve">
        <g>
          <path d="M447.05,428l-109.6-109.6c29.4-33.8,47.2-77.9,47.2-126.1C384.65,86.2,298.35,0,192.35,0C86.25,0,0.05,86.3,0.05,192.3
          s86.3,192.3,192.3,192.3c48.2,0,92.3-17.8,126.1-47.2L428.05,447c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4
          C452.25,441.8,452.25,433.2,447.05,428z M26.95,192.3c0-91.2,74.2-165.3,165.3-165.3c91.2,0,165.3,74.2,165.3,165.3
          s-74.1,165.4-165.3,165.4C101.15,357.7,26.95,283.5,26.95,192.3z"/>
        </g>
      </svg>
    </div>
  </div>

  <div class="chat-header">
    <button class="button-return">
      <svg fill="white" height="60px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 31.494 31.494" style="enable-background:new 0 0 31.494 31.494;" xml:space="preserve">
        <path d="M10.273,5.009c0.444-0.444,1.143-0.444,1.587,0c0.429,0.429,0.429,1.143,0,1.571l-8.047,8.047h26.554            c0.619,0,1.127,0.492,1.127,1.111c0,0.619-0.508,1.127-1.127,1.127H3.813l8.047,8.032c0.429,0.444,0.429,1.159,0,1.587
        c-0.444,0.444-1.143,0.444-1.587,0l-9.952-9.952c-0.429-0.429-0.429-1.143,0-1.571L10.273,5.009z"/>
      </svg>
    </button>
    <div class="user-avatar">
      <svg viewBox="0 0 480 480" fill="white" height="100px" xmlns="http://www.w3.org/2000/svg">
        <path d="m240 0c-132.546875 0-240 107.453125-240 240s107.453125 240 240 240c7.230469 0 14.433594-.324219 21.601562-.96875 6.664063-.597656 13.269532-1.511719 19.824219-2.65625l2.519531-.445312c121.863282-22.742188 206.359376-134.550782 194.960938-257.996094-11.398438-123.445313-114.9375-217.8945315-238.90625-217.933594zm-19.28125 463.152344h-.566406c-6.222656-.550782-12.398438-1.382813-18.519532-2.449219-.351562-.0625-.703124-.101563-1.046874-.167969-5.984376-1.070312-11.90625-2.398437-17.769532-3.949218l-1.417968-.363282c-5.71875-1.550781-11.375-3.351562-16.949219-5.351562-.578125-.207032-1.160157-.390625-1.738281-.605469-5.464844-2.007813-10.832032-4.257813-16.117188-6.691406-.65625-.292969-1.3125-.574219-1.96875-.886719-5.183594-2.398438-10.265625-5.101562-15.25-7.945312-.703125-.398438-1.414062-.796876-2.117188-1.191407-4.90625-2.863281-9.699218-5.933593-14.402343-9.175781-.710938-.496094-1.429688-.976562-2.136719-1.472656-4.621094-3.277344-9.125-6.757813-13.511719-10.398438l-1.207031-1.054687v-67.449219c.058594-48.578125 39.421875-87.941406 88-88h112c48.578125.058594 87.941406 39.421875 88 88v67.457031l-1.0625.886719c-4.472656 3.734375-9.0625 7.265625-13.777344 10.601562-.625.4375-1.257812.855469-1.878906 1.285157-4.757812 3.304687-9.632812 6.414062-14.625 9.335937-.625.363282-1.265625.707032-1.886719 1.066406-5.058593 2.878907-10.203125 5.597657-15.449219 8.046876-.601562.28125-1.207031.542968-1.816406.800781-5.328125 2.457031-10.742187 4.71875-16.246094 6.742187-.546874.203125-1.097656.378906-1.601562.570313-5.601562 2.007812-11.28125 3.824219-17.03125 5.382812l-1.378906.34375c-5.871094 1.550781-11.796875 2.886719-17.789063 3.960938-.34375.0625-.6875.105469-1.03125.160156-6.128906 1.070313-12.3125 1.902344-18.539062 2.457031h-.566407c-6.398437.550782-12.800781.847656-19.28125.847656-6.480468 0-12.933593-.242187-19.320312-.792968zm179.28125-66.527344v-52.625c-.066406-57.410156-46.589844-103.933594-104-104h-112c-57.410156.066406-103.933594 46.589844-104 104v52.617188c-86.164062-87.941407-85.203125-228.9375 2.148438-315.699219 87.351562-86.757813 228.351562-86.757813 315.703124 0 87.351563 86.761719 88.3125 227.757812 2.148438 315.699219zm0 0"/>
        <path d="m240 64c-44.183594 0-80 35.816406-80 80s35.816406 80 80 80 80-35.816406 80-80c-.046875-44.164062-35.835938-79.953125-80-80zm0 144c-35.347656 0-64-28.652344-64-64s28.652344-64 64-64 64 28.652344 64 64c-.039062 35.328125-28.671875 63.960938-64 64zm0 0"/>
      </svg>
    </div>
    <div class="user-info">
      <p class="user-name">Дженнифер</p>
      <p class="user-status">была 2 часа назад</p>
    </div>
    <div class="button-search">
      <svg version="1.1" id="Capa_1" height="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 451 451" style="enable-background:new 0 0 451 451;" xml:space="preserve">
        <g>
          <path d="M447.05,428l-109.6-109.6c29.4-33.8,47.2-77.9,47.2-126.1C384.65,86.2,298.35,0,192.35,0C86.25,0,0.05,86.3,0.05,192.3
          s86.3,192.3,192.3,192.3c48.2,0,92.3-17.8,126.1-47.2L428.05,447c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4
          C452.25,441.8,452.25,433.2,447.05,428z M26.95,192.3c0-91.2,74.2-165.3,165.3-165.3c91.2,0,165.3,74.2,165.3,165.3
          s-74.1,165.4-165.3,165.4C101.15,357.7,26.95,283.5,26.95,192.3z"/>
        </g>
      </svg>
    </div>
    <div class="button-options">
      <svg height="60px" version="1.1" id="button-options" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
        <g>
          <g>
            <g>
              <circle cx="256" cy="256" r="64"/>
              <circle cx="256" cy="448" r="64"/>
              <circle cx="256" cy="64" r="64"/>
            </g>
          </g>
        </g>
      </svg>
    </div>
  </div>
`;

class messengerHeader extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.$chatlistHeader = this.shadowRoot.querySelector('.chatlist-header');
    this.$chatHeader = this.shadowRoot.querySelector('.chat-header');
    this.$returnButton = this.shadowRoot.querySelector('.button-return');

    this.$chatList = document.querySelector('chat-list');
    this.$messageForm = document.querySelector('message-form');
    this.$createChatButton = document.querySelector('create-chat-button');

    this.$returnButton.addEventListener('click', this.onReturnButtonClicked.bind(this));
  }

  onReturnButtonClicked() {
    this.$chatHeader.style.display = 'none';
    this.$messageForm.style.display = 'none';
    this.$messageForm.clearMessages();

    this.$chatlistHeader.style.display = 'flex';
    this.$chatList.style.display = 'flex';
    this.$chatList.renderChats();
    this.$createChatButton.style.display = 'inline-block';
  }
}

customElements.define('messenger-header', messengerHeader);
