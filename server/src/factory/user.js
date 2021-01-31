const { arrayKeysExists } = require('./../util/utils')

const UserFactory = () => {
    const verify = (user, checkParams = true) => {
        if (!user) {
            throw new Error('USER_NOT_FOUND')
        }

        if (checkParams) {
            let keys = [ "name", "email", "password", "phone" ]

            if (!arrayKeysExists(keys, user)) {
                throw new Error('INVALID_PARAMTERS')
            }
        }
    }

    return {
        verify
    }
}

module.exports = UserFactory()
