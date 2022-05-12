module.exports = {
    getUser,
    createUser,
    login
}

const USERS = [
    {
        name: "foo",
        password: "bar"
    }
]



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


async function login({name, password}) {
    if (USERS.some(e => e.name === name && e.password === password)) {
        return {
            message: `Welcome ${name}`
        }
    } else {
        return {
            message: "Invalid Credentials"
        }
    }
}