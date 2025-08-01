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

app.post('/v1/training/recompute', (req, res) => {
	let { query: { debugMode = false }} = req;
	debugMode = Boolean(debugMode);

	res.status(200).json({
		timestamp: Date.now(),
	});
});

export default app;
