/**
 * Pizza delivery prompt example
 * run example by writing `node pizza.js` in your console
 */

'use strict';
var inquirer = require('inquirer');

console.log('Hola! You better know what you are doing...');

var questions = [

	{
		type: 'expand',
		name: 'main',
		message: 'Arch-Docker-Factory:',
		choices: [
			{
				key: 'b',
				name: 'Build image(s)',
				value: 'build'
			},
			{
				key: 'r',
				name: 'Run image(s)',
				value: 'run'
			},
			{
				key: 'd',
				name: 'daemonize',
				value: 'daemon'
			}
		]
	}
]

inquirer.prompt(questions).then(function (answers) {
	switch (answers.main) {
		case 'build':
			console.log('why you press build bitch')
			break;
		case 'run':
			console.log('running like a little bitch eh')
			break;
	}
});