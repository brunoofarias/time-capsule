const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const createRoutes = require('./routes')
const process = require('dotenv').config().parsed

const createWebserver = () => {
    const server = express()
    const port = process.PORT
    const routes = createRoutes(server)

    const start = () => {
        console.log('> [webserver] Starting... ')
        server.use(cors())
        server.use(bodyParser.urlencoded({ extended: true }))
        server.use(bodyParser.json())

        routes.create()

        server.listen(port, () => {
            console.log(`> [webserver] Starting done! Webserver running in port ${port}`)
        })
    }

    return {
        start
    }
}

module.exports = createWebserver
