/**
 * Pizza delivery prompt example
 * run example by writing `node pizza.js` in your console
 */

'use strict';
var inquirer = require('inquirer');

console.log('Hi, welcome to Node Pizza');

var questions = [

	{
		type: 'expand',
		name: 'toppings',
		message: 'What about the toppings?',
		choices: [
			{
				key: 'p',
				name: 'Pepperoni and cheese',
				value: 'PepperoniCheese'
			},
			{
				key: 'a',
				name: 'All dressed',
				value: 'alldressed'
			},
			{
				key: 'w',
				name: 'Hawaiian',
				value: 'hawaiian'
			}
		]
	}
]

inquirer.prompt(questions).then(function (answers) {
  console.log('\nOrder receipt:');
  console.log(JSON.stringify(answers, null, '  '));
});