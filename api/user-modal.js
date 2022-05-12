module.exports = {
    getUser,
    createUser,
    login
}

const USERS = []



async function getUser() {
    if (USERS.length === 0) {
        return {
            message: "No Users Found"
        }
    }
    return USERS;
}


async function createUser(object) {
    USERS.push(object)
    return object
}


async function login({ name }) {
    return name
}