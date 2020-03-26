import 'expect-puppeteer';

describe('app', () => {
	beforeAll(async () => {
		await page.goto('http://localhost:3000/');
		await page.waitForSelector('[id="create_chat"');
	}, 20000);

	test('should check the page', async () => {
		await expect(page).toMatch('Messenger');
	});

	test('should open trash chat and return to the chatlist screen', async () => {
		await page.waitForSelector('[href="#/trash_chat"]');
		await page.click('[href="#/trash_chat"]');
		await expect(page).toMatch('trash chat status');
		await page.click('[id="return"]');
		await expect(page).toMatch('Messenger');
	});

	test('should create a new chat, open it and send a message', async () => {
		await page.waitForSelector('[id="create_chat"');
		await page.click('[id="create_chat"');
		await expect(page).toMatch('User Name #0');
		await page.click('[data-id="0"]');
		await expect(page).toMatch('был(а) 2 часа назад');
		await expect(page).toFill('[id="send_message"]', 'Hello!');
		await page.keyboard.press('Enter');
		await expect(page).toMatch('Me');
	});
});


