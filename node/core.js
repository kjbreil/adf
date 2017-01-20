const fs = require('fs')
const dateformat = require('dateformat')
let now = new Date()

exports.setVars = function() {
	let dockers = {}
	let dockerfiles = fs.readdirSync('./dockerfile/')
	for (let d in dockerfiles) {
		dockers[dockerfiles[d]] = {}
		dockers[dockerfiles[d]].order = dockerfiles[d].substring(0,2)
		dockers[dockerfiles[d]].imageName = dockerfiles[d].replace(/\d\d\_/, '')
		dockers[dockerfiles[d]].repoName = 'kjbreil'
		dockers[dockerfiles[d]].imageVersion = dateformat(now, "isoDate")
		dockers[dockerfiles[d]].dockerName = 'test'
		dockers[dockerfiles[d]].dockerCmd = ['ls', '/bin']
		dockers[dockerfiles[d]].dockerVolumes = ''
		dockers[dockerfiles[d]].dockerPorts = ''
		dockers[dockerfiles[d]].dockerTask = 'run'
	}
	return dockers
}

