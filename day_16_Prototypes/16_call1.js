function setUsername(username) {
    this.username = username
    // console.log("Called")
}

const createUser = function createUsers(username,email,password) {
    // this.username = username
    setUsername.call(this,username)
    this.email = email
    this.password = password
    console.log(this.username, this.email, this.password)
}

// setUsername()

const user1 =  new createUser('hi','hello','world')
const user2 =  new createUser('bye','good bye','world')