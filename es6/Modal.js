function Model(data) {
	this.data = data;
}

Model.prototype = new Object(Event.prototype);
Model.prototype.constructor = Model;

Model.prototype.set = function (key, value) {
	if (this.data[key]) {
		this.data[key] = value;
	}
	this.emit("change", value);
}


Model.prototype.get = function (key) {
	console.log("key: ", key, " value: ", this.data[key]);
}