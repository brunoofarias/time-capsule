const mongoose = require('mongoose')

const User = mongoose.model('user', new mongoose.Schema({ 
    name: String,
    email: String,
    password: String,
    phone: String
}))

module.exports = User
