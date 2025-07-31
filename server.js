import app from './index.js';

const port = process.env.PORT ?? 3000;

app.listen(port, (err) => {
	if (err) {
		throw new Error(`An error occurred when trying to run the server ${err.message}`);
	}
	console.log(`Server up on the port ${port}`);
})