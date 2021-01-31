const mongoose = require('mongoose')
const process = require('dotenv').config().parsed

const createDatabase = () => {
    let connection = null

    const start = () => {
        console.log('> [database] Starting...')

        if (!connection) {
            connection = mongoose.connect(`mongodb://${process.DB_HOST}/${process.DB_DATABASE}`, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }, (error) => {
                if (error) {
                    throw new Error(`> [database] Error starting MongoDB: ${error}`)
                } else {
                    console.log(`> [database] Starting Done!`)
                }
            })
        }

        return connection
    }

    const stop = () => {
        console.log('> [database] Stopping...')
        connection.disconnect()
        console.log('> [database] Stopping Done!')
    }

    return {
        start,
        stop
    }
}

module.exports = createDatabase
