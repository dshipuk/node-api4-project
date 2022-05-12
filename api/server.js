const express = require("express")
const User = require("./user-modal")

const server = express();

server.use(express.json())

server.get("/api/users", (req, res) => {
    User.getUser()
        .then(result => {
            res.json(result)
        })
})

server.post("/api/register", (req, res) => {
    User.createUser(req.body)
        .then(result => {
            res.status(201).json(result)
        })
})

server.post("/api/login", (req, res) => {
    User.login(req.body)
        .then(result => {
            res.json(result)
        })
})

module.exports = server;