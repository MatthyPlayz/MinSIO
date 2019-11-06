var fs = require("fs");
var sio = {
	open: function() {
		fs.appendFile('minsio.json', "[\n", function (err) {
			if (err) {
				throw err;
				return false;
			}
			return true;
		}); 
	},
	close: function() {
		fs.appendFile('minsio.json', "\n]", function (err) {
			if (err) {
				throw err;
				return false;
			}
			return true;
		}); 
	},
	emit: function(emitting, datatype) {
		if(datatype == "json") {
			fs.appendFile('minsio.json', emitting + ",\n", function (err) {
				if (err) {
					throw err;
					return false;
				}
				return true;
			}); 
		} else if(datatype == " ") {
			fs.appendFile('minsio.json', "\"" + emitting + "\",\n" , function (err) {
				if (err) {
					throw err;
					return false;
				}
				return true;
			}); 	
		} else if(datatype == 1) {
			fs.appendFile('minsio.json', emitting + ",\n", function (err) {
				if (err) {
					throw err;
					return false;
				}
				return true;
			}); 
		} else {
			return false;
		}
	},
	closer: function(emitting, datatype) {
		if(datatype == "json") {
			fs.appendFile('minsio.json', emitting, function (err) {
				if (err) {
					throw err;
					return false;
				}
				return true;
			}); 
		} else if(datatype == " ") {
			fs.appendFile('minsio.json', "\"" + emitting + "\"" , function (err) {
				if (err) {
					throw err;
					return false;
				}
				return true;
			}); 	
		} else if(datatype == 1) {
			fs.appendFile('minsio.json', emitting, function (err) {
				if (err) {
					throw err;
					return false;
				}
				return true;
			}); 
		} else {
			return false;
		}
		sio.close();
	},
	get: function() {
		var rawdata = fs.readFileSync('minsio.json');
		var jsond = JSON.parse(rawdata);
		return jsond;
	}
}
