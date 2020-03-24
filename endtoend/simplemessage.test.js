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
	});

	it('should open trash chat and return to the chatlist screen', async () => {

	});

	it('should create a new chat, open it and send a message', async () => {

	});
});


