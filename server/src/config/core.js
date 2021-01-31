const createDatabase = require('./database')
const createWebserver = require('./webserver')

const createCore = (config = {}) => {
    const database = config.database || createDatabase()
    const webserver = config.webserver || createWebserver()
    
    const start = () => {
        console.log('> [core] Startting...')
        database.start()
        webserver.start()
        console.log('> [core] Startting Done!')
    }

    const stop = () => {
        console.log('> [core] Stoping...')
        database.stop()
        console.log('> [core] Stoping Done!')
    }

    return {
        start,
        stop
    }
}

module.exports = createCore
