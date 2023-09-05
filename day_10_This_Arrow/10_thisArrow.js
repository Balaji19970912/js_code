function chai() {
    console.log(this)
}

const chai1 = () => {
    console.log(this)
}

chai()

chai1()