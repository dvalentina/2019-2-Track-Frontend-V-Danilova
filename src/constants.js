// views urls
export const CREATE_USER_URL = 'http://localhost:8000/users/create/';
export const SEND_MESSAGE_URL = 'http://localhost:8000/chats/send_message/';

// trash chat urls and constants
export const TRASH_CHAT_ID = 1;
export const TRASH_CHAT_MESSAGES_URL = `http://localhost:8000/chats/${TRASH_CHAT_ID}/messages/`;

// centrifugo
export const CENTRIFUGO_CHAT_ID = 2;
export const CENTRIFUGO_WEBSOCKET_URL = 'ws://localhost:8001/connection/websocket';
export const CENTRIFUGO_MESSAGES_URL = `http://localhost:8000/chats/${CENTRIFUGO_CHAT_ID}/messages/`;

