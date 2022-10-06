class MyCalc {
    constructor(initialValue = 0) {
        this.result = initialValue
    }

    add(value) {
        this.result += value
        return this
    }

    subtract(value) {
        this.result -= value
        return this
    }

    multiply(value) {
        this.result *= value
        return this
    }

    divide(value) {
        this.result /= value
        return this
    }
}

const calc = new MyCalc()
console.log(calc.add(5).subtract(1).multiply(2).divide(4).result)
