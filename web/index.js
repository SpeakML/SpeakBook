// Probably this isn't the best way to do it, but I'm not a JS expert
// and I'm not really a backend-focused developer (or even a web-focused one)

"use strict";

const { ADDRGETNETWORKPARAMS } = require('dns');
const express = require('express');
const app = express();

const path = require('path');
const server = require('http').createServer(app);

const port = process.env.PORT || 3338;
const ADDRESS = process.env.ADDRESS || '127.37.37.37';

app.use(
	express.static(
		path.resolve("../book"),
		{
			index: 'introduction.html',
			extensions: ['html']
		}
	)
);
console.log("[PATH] - " + path.resolve("../book"));

app.get('/', (req, res) => res.sendFile(path.resolve('./../book/introduction.html')));
app.get('/:page', (req, res) => res.sendFile(path.resolve(`./../book/${req.params.page}.html`)));

// app.listen(port, () => console.log(`[SERVER] - STARTED ON PORT ${port}`));
server.listen(port, ADDRESS, () => console.log(`[SERVER] - STARTED ON PORT ${port} IP ${ADDRESS}`));