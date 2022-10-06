function add(x, y) {
	return x + y;
}
function sub(x, y) {
	return x - y;
}
function mul(x, y) {
	return x * y;
}
function div(x, y) {
	return x / y;
}

var Command = function (execute, value) {
	this.execute = execute;
	this.value = value;
};

var AddCommand = function (value) {
	return new Command(add, value);
};

var SubCommand = function (value) {
	return new Command(sub, value);
};

var MulCommand = function (value) {
	return new Command(mul, value);
};

var DivCommand = function (value) {
	return new Command(div, value);
};

var Calculator = function () {
	var current = 0;
	var commands = [];

	return {
		execute: function (command) {
			current = command.execute(current, command.value);
			commands.push(command);
		},

		getCurrentValue: function () {
			return current;
		},
	};
};

var calculator = new Calculator();
calculator.execute(new AddCommand(5));
calculator.execute(new MulCommand(3));
calculator.execute(new SubCommand(5));

console.log("\nResut: " + calculator.getCurrentValue());
