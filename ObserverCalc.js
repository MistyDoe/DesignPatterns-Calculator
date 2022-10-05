function Calc() {
	this.observers = [];
}

Calc.prototype = {
	subscribe: function (fn) {
		this.onservers.push(fn);
	},
	unsubscribe: function (fnRemove) {
		this.observers = this.observers.filter((fn) => {
			if (fn != fnRemove) return fn;
		});
	},
	fire: function () {
		this.observers.forEach((fn) => {
			fn.call();
		});
	},
};
