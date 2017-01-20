#!/usr/bin

const docker = require('./node/docker.js')
const core = require('./node/core.js')
const inquirer = require('inquirer')


const dockers = core.setVars()

inquirer.prompt([
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
	]).then(function (answers) {
    // Use user feedback for... whatever!!
})



// for (let d in dockers) {
// 	let text = dockers[d]
// 	console.log(text)
// }


/*

options:
-stack
-rootfs
	build
	build local
-build
	all
	bash
	single
	run
-package
	all
	single
	bash
	run
-pkg_rootfs
	build

*/
