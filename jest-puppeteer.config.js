module.exports = {
	launch: {
		headless: true,
	},
	server: {
		command: 'npm start',
		host: 'localhost',
		port: 3000,
		launchTimeout: 100000,
		debug: true,
	},
};
