require("dotenv").config();

const server = require("./api/server.js");

const PORT = process.env.PORT

if (PORT == null) {
    console.log("No Port Found")
} else {
    server.listen(PORT, () => {
        console.log(`Server listening on ${PORT}`)
    })
}