#!/usr/bin

const spawn = require('child_process').spawn

exports.docker = function(dockerTask, repoName, imageName, imageVersion, dockerName, dockerCmd, dockerVolumes, dockerPorts) {

	args = argSet(dockerTask, repoName, imageName, imageVersion, dockerName, dockerCmd, dockerVolumes, dockerPorts)

	// // One of these day's I'll implement real logging
	// console.log("docker", [].concat(args))

	const run = spawn("docker", [].concat(args))
	
	run.stdout.on('data', (data) => {
		console.log(`${data}`)
	})
	run.stderr.on('data', (data) => {
		console.log(`${data}`)
	})
}

argSet = function(dockerTask, repoName, imageName, imageVersion, dockerName, dockerCmd, dockerVolumes, dockerPorts) {
	switch (dockerTask) {
		case 'run':
			args = ['--rm']
			name = ['--name', imageName+'-'+dockerName]
			image = [repoName + '/' + imageName + ':' + imageVersion]
			break
	}
	return [].concat(dockerTask, args, name, image, dockerCmd)
}