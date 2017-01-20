#!/usr/bin

let dateformat = require('dateformat')
let fs = require('fs')

let docker = require('./node/docker.js')

let now = new Date()

let dockerfiles = fs.readdirSync('./dockerfile/')
for (let d in dockerfiles) {
	console.log(dockerfiles[d])
}



let instance = {}

instance.dockerTask = 'run'
instance.repoName = 'kjbreil'
instance.imageName = 'arch-base'
instance.imageVersion = dateformat(now, "isoDate")
instance.dockerName = 'test'
instance.dockerCmd = ['ls', '/bin']
instance.dockerVolumes = ''
instance.dockerPorts = ''


// console.log(instance.dockerTask)


docker.docker(instance.dockerTask, instance.repoName, instance.imageName, instance.imageVersion, instance.dockerName, instance.dockerCmd, instance.dockerVolumes, instance.dockerPorts)

