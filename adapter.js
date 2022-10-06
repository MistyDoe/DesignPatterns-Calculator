// 2 classes working same way but have different interfaces
class OldCalc {
    operations(t1, t2, operation) {
        switch (operation) {
            case 'add': return t1 + t2
            case 'subtract': return t1 - t2
            case 'multiply': return t1 * t2
            case 'divide': return t1 / t2
            default: return NaN
        }
    }
}

class NewCalc {
    add(t1, t2) {
        return t1 + t2
    }

    subtract(t1, t2) {
        return t1 - t2
    }

    multiply(t1, t2) {
        return t1 * t2
    }

    divide(t1, t2) {
        return t1 / t2
    }
}

class CalcAdapter {
    constructor() {
        this.calc = new NewCalc()
    }
    
    operations(t1, t2, operation) {
        switch (operation) {
            case 'add': return this.calc.add(t1, t2)
            case 'subtract': return this.calc.subtract(t1, t2)
            case 'multiply': return this.calc.multiply(t1, t2)
            case 'divide': return this.calc.divide(t1, t2)
            default: return NaN
        }
    }
}

const oldCalc = new OldCalc()
console.log(oldCalc.operations(10, 5, 'add'))

const newCalc = new NewCalc()
console.log(newCalc.add(10, 5))

// Interface is OLD, but functionality is NEW
const adapter = new CalcAdapter()
console.log(adapter.operations(25, 10, 'subtract'))
