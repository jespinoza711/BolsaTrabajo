
var fs =  require('fs')
var path = require('path')

var files =  fs.readdirSync( __dirname)

files.forEach(function(file){
	var file_name = path.basename(file, ".js")

	if (file_name != 'index'){
		exports[file_name] = require ('./' +file_name)
	}
})