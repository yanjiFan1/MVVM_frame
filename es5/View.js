function View(model, el) {
	this.el = el;
	this.model = model;

	this.init();
}

View.prototype.init = function () {
	var me = this;
	this.model.on("change", function (value) {
		me.model.get("value");
		if (me.el.type === "text") {
			me.el.value = value;
		} else {
			me.el.innerText = value;
		}		
	});
	if (this.el.type === "text") {
		this.el.addEventListener("change", function () {
			me.model.set("value", this.value);
		});
	} else {
		this.el.addEventListener("click", function () {
			var num = new Number(this.innerText || 0);
			me.model.set("value", num + 1);
		});
	}

}