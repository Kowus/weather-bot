'use strict';

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false
});
const matcher = require('./matcher');

rl.setPrompt('jerome > ');
rl.prompt();
rl.on('line', reply => {
	matcher(reply, data => {
		switch (data.intent)
		{
			case 'Hello':
				console.log('Hello there');
				rl.prompt();
				break;
			default:
				console.log("I don't know what you mean by \"%s\" :(", reply);
				rl.prompt();
				break;
		}
	});
});
