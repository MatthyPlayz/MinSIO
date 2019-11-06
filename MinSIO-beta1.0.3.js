var fs = require("fs");
module.exports = {
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
	emit: function(emitting) {
		console.log(emitting);
		var typ = typeof emitting;
		var emits = emitting;
		var nl1, nl2 = "";
		if(typ === "string") {
			nl1 = "\"";
			nl2 = "\",";
		} else if(typ === "number") {
			nl1 = "";
			nl2 = ", ";
			emits = emits.toString();
		} else {
			nl1 = "";
			emits = JSON.stringify(emitting);
			nl2 = ",";
		}
		fs.appendFile('minsio.json', nl1 + emits + nl2, function (err) {
			if (err) {
				throw err;
				return false;
			}
			return true;
		});
	},
	closer: function(emitting) {
		console.log(emitting);
		var typ = typeof emitting;
		var emits = emitting;
		var nl1, nl2 = "";
		if(typ == "string") {
			nl1 = "\"";
			nl2 = "\"\n]";
		} else if(typ == "number") {
			nl2 = "\n]";
		} else {
			nl1 = "";
			var emits = JSON.stringify(emitting);
			nl2 = "\n]";
		}
		fs.appendFile('minsio.json', nl1 + emits + nl2, function (err) {
			if (err) {
				throw err;
				return false;
			}
			return true;
		});
	},
	get: function() {
		var rawdata = fs.readFileSync('minsio.json');
		var jsond = JSON.parse(rawdata);
		return jsond;
	}
}
