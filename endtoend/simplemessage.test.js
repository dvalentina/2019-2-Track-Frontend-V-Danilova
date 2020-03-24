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
		await page.click('[href="#/trash_chat"]');
		await expect(page).toMatch('trash chat status');
		await page.click('[id="return"]');
		await expect(page).toMatch('Messenger');
	});

	it('should create a new chat, open it and send a message', async () => {
		await page.click('[id="create_chat"');
		await expect(page).toMatch('User Name #0');
		await page.click('[data-id="0"]');
		await expect(page).toMatch('был(а) 2 часа назад');
		await expect(page).toFill('[id="send_message"]', 'Hello!');
		await page.keyboard.press('Enter');
		await expect(page).toMatch('Me');
	});
});


