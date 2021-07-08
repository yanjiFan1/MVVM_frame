function MVVM() {
	this.cache = {};
}

MVVM.prototype.bind = function (data, el) {
	var model = new Model(data);
	var view = new View(model, el);
	var key = "key_" + (new Date()).getTime();
	this.cache[key] = {
		model: model,
		view: view
	};
}