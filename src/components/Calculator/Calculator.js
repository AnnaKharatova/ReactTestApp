export class Calculator {

    constructor(a, b) {
        this._a = a;
        this._b = b;
    }

    add() {
        return Number(this._a) + Number(this._b)
    }

    subtract() {
        return this._a - this._b
    }

    multiply() {
        return this._a * this._b

    }

    divide() {
        if (this._b != 0) {
            return this._a / this._b
        } else
            return 'На ноль делить нельзя'
    }
}