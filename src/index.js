const messages = [
    "Alejandro",
    "Helen",
    "Ana",
    "Diego",
    "Laura",
    "Santiago",
    "Carolina"
]

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)]
    console.log(message)
}

module.exports = { randomMsg }