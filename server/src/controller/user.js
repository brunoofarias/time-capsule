const express = require('express')
const UserFactory = require('./../factory/user')
const UserService = require('./../service/user')

const UserController = (server) => {
    const router = express.Router()

    router.post('/', async (request, response) => {
        try {
            const user = request.body
            UserFactory.verify(user)
            let userCreated = await UserService.create(user)

            response.status(userCreated.status).json(userCreated.message)
        } catch (error) {
            switch (error.message) {
                case 'INVALID_PARAMTERS':
                    return response.json({
                        message: 'Parametrôs inválidos.'
                    }).status(422)

                default:
                    return response.json({
                        message: 'Erro genérico: ' + error.message
                    }).status(500)
            }
        }
    })

    server.use('/user', router)
}

module.exports = UserController
