function createUser(username, score) {
    this.username = username
    this.score = score
}

createUser.prototype.increment = function() {
    this.score++
}

createUser.prototype.printMe = function() {
    console.log(`${this.username} scored ${this.score}`)
}

const luffy = new createUser('luffy',20)
const zoro = new createUser('zoro',20)

luffy.printMe()