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
	}
};


function add(num1, num2){
    return num1+num2
}
function subtract(){
    
}
function divide(){
    
}
function multiply(){
    
}

const calc = ['1', '+', '5']

calc.forEach((element, index) =>{
    res = [];
    if (typeof element !==num){
        if (element === '+'){
            res = calc.subscribe(add(calc(index-1),calc(index+1)))
            return res;
        }
    }
        })