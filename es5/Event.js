function Event() {  
    this.handlers = {};  
}

Event.prototype.on = function (eventName, handler) {
	if (!this.handlers) {
		this.handlers = {};
	}
	if (this.handlers[eventName]) {
		this.handlers[eventName].push(handler);
	} else {
		this.handlers[eventName] = [handler];
	}
}

Event.prototype.emit = function (eventName, eventData) {
	if (this.handlers[eventName]) {
		this.handlers[eventName].forEach(function (handler) {
			handler(eventData);
		});
	}
}

Event.prototype.off = function (eventName, handler) {
	if (this.handlers[eventName]) {
		for (var i = 0; i < this.handlers[eventName].length; i++) {
			if (this.handlers[eventName][i] === handler) {
				this.handlers[eventName].splice(i, 1);
			}
		}
	}
}  