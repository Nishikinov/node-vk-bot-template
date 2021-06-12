const fs = require('fs')

module.exports.send = function(text, to, params2) {
	return new Promise(function(resolve, reject) {
		const params1 = {
			peer_id: to,
			message: text,
			random_id: easyvk.randomId()
		}
		vk.call('messages.send', {...params1, ...params2 }, 'post').then((vkr) => {
			resolve(vkr.toString())
		}, error => {
			console.log("Rejected: " + error); // error - аргумент reject
		  }).catch(e => console.log(`Error! ${e}`));
	});
}

module.exports.scanDir = function(path, callback) { // TODO: Переделать поиск файлов в рекурсивный
    fs.readdir(path, (err, files) => {
        files.forEach(f => {
		    if (fs.lstatSync(path + f).isDirectory()) {
			    fs.readdir(path + f, (err, files) => {
				    files.forEach(f2 => {
                        callback(`./${path + f}/${f2}`)
				    })
			    })
		    } else {
                callback(path + f)
		    }
	    })
    });
}