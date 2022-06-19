// Probably this isn't the best way to do it, but I'm not a JS expert
// and I'm not really a backend-focused developer (or even a web-focused one)

"use strict";

const express = require('express');
const app = express();

const path = require('path');

const port = process.env.PORT || 3000;
const ADDRESS = process.env.ADDRESS || '127.0.0.1';

app.use(
	express.static(
		path.resolve("./book"),
		{
			index: 'introduction.html',
			extensions: ['html']
		}
	)
);

// 404 Page
app.use(function(req, res){
	res.status(404);
  
	// respond with html page
	if (req.accepts('html')) {
	  res.sendFile(path.resolve('./book/404.html'));
	  return;
	}
  
	// respond with json
	if (req.accepts('json')) {
	  res.send({
		status: 404,
		error: 'Not found'
	  });
	  return;
	}

	// default to plain-text. send()
	res.type('txt').send('404 - Not found');
  });

console.log("[PATH] - " + path.resolve("./book"));

app.get('/', (_, res) => res.sendFile(path.resolve('./book/introduction.html')));

app.get



// app.listen(port, () => console.log(`[SERVER] - STARTED ON PORT ${port}`));
app.listen(port, ADDRESS, () => console.log(`[SERVER] - STARTED ON PORT ${port} IP ${ADDRESS}`));