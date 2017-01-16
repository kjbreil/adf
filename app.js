#!/usr/bin

const docker = require('./node/docker.js')


instance.dockerTask
instance.repoName
instance.imageName
instance.imageVersion
instance.dockerName
instance.dockerCmd
instance.dockerVolumes
instance.dockerPorts





docker.docker('run', 'kjbreil', 'arch-build', 'latest', 'test', ['ls', '/bin'])

