'use strict';

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false
});

rl.setPrompt('foster > ');
rl.prompt();
rl.on('line', reply => {
	console.log(`You said ${reply}`);
	rl.prompt();
});
