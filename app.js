#!/usr/bin

const docker = require('./node/docker.js')
const core = require('./node/core.js')
const inquirer = require('inquirer')


const dockers = core.setVars()

inquirer.prompt([
	{
		type: 'list',
		name: 'size',
		message: 'What size do you need?',
		choices: ['Large', 'Medium', 'Small'],
		filter: function (val) {
			return val.toLowerCase();
		}
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
