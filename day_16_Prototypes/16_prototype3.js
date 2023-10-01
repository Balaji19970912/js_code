let name1 = "Balaji       "

String.prototype.trueLength = function() {
    console.log(`${this}`)
    console.log(`True length of --> ${this} is ${this.trim().length}`)
}

name1.trueLength()