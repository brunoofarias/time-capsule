const createCore = require('./config/core')

const core = createCore()

try {
    core.start()
} catch (error) {
    console.log('[index] Uncaught error!')
    console.log(error)    
}
