import 'expect-puppeteer';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

const path = require('path');

describe('app', () => {
	beforeAll(async () => {
		await page.goto('http://localhost:3000/');
	}, 60000);

	it('should check the page', async () => {
		await expect(page).toMatch('Messenger');
	}, 10000);

	it('should open trash chat and return to the chatlist screen', async () => {

	});

	it('should create a new chat, open it and send a message', async () => {

	});
});

const puppeteer = require('puppeteer');

// describe('chat', () => {
// 	beforeAll(async () => {
// 		const browser = await puppeteer.launch();
// 		const page = await browser.newPage();
// 		await page.goto('http://localhost:3000/');
// 	});

// 	it('chat must be created', async () => {
// 		await expect(page).toClick('#CreateChat');
// 	});

// 	it('chat must be open', async () => {
// 		await expect(page).toClick('#chat_id_0');
// 	});

// 	it('message must be sent', async () => {
// 		await expect(page).toFill('#message_input', 'Hello');
// 		await page.keyboard.press('Enter');
// 	});

// 	it('message must be displayed', async () => {
// 		await expect(page).toMatchElement('#message_text', {text: 'Hello'});
// 	});
	
// 	afterAll(async () => {
// 		await browser.close();
// 	});
// });
