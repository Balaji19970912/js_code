function userNames(user,email,age) {
    this.username = user
    this.emailId = email
    this.age = age

    return this
}

const userOne = new userNames('one','one@one.com',25)
const userTwo = new userNames('two','two@two.com',26)

console.log(userOne);