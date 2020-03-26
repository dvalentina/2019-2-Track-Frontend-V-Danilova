module.exports = {
	launch: {
		headless: true,
		args: ['--disable-dev-shm-usage'],
	},
	server: {
		command: 'npm start',
		host: 'localhost',
		port: 3000,
		launchTimeout: 20000,
		debug: true,
	},
};
