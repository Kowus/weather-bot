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
	matcher(reply)
});
