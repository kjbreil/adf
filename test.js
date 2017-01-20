

let dockers = {}

let dockerName = 'boo'

dockers[dockerName] = {}
dockers[dockerName].name = 'test'

console.log(dockers[dockerName].name)
console.log('---')
console.log(dockers.boo.name)

let fs = require('fs')

dockerfiles = fs.readdirSync('./dockerfile/')
for (let d in dockerfiles) {
	console.log(dockerfiles[d])
}
console.log(dockerfiles)