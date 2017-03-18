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
				console.log(`${data.entities.greeting} to you too`);
				rl.prompt();
				break;
			case 'Exit':
				console.log('Have a great day :)!');
				process.exit(0);
			default:
				console.log("I don't know what you mean by \"%s\" :(", reply);
				rl.prompt();
				break;
		}
	});
});
