const MONGOOSE = require('mongoose')
const SCHEMA = MONGOOSE.Schema;
const ACCOUNT = new SCHEMA({
    userName: {
        type: String,
        required: true
    },
    pass: {
        type: String,
        required: true
    },
    role: {
        type: Array,
        default: [],
        required: false
    }
})
module.exports = MONGOOSE.model('Account', ACCOUNT);