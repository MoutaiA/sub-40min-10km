import express from 'express';

const app = express();

app.get('/', (req, res) => {
	res.send('OK');
});

app.get('/healthcheck', (req, res) => {
	res.status(200).json({
		message: 'Server up',
		timestamp: Date.now(),
		version: process.env.VERSION ?? '1.0.0',
	});
});

export default app;
