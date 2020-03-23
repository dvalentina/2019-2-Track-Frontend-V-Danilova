module.exports = {
	launch: {
		headless: false,  // для отображения в клиенте
	},
	server: {
		command: 'npm start',
		host: 'localhost',
		port: 3000,
		launchTimeout: 50000,
		debug: true,
	},
};
