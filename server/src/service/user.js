const User = require('./../model/user')

const UserService = () => {
    const create = (data) => {
        return new Promise((resolve, reject) => {
            const user = new User(data)
            user.save(err => {
                if (err) reject(new Error(err))

                resolve({ status: 200, message: 'Usuário Inserido com sucesso!' })
            })
        })
    }

    return {
        create
    }
}

module.exports = UserService()
