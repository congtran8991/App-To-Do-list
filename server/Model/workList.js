const MONGOOSE = require('mongoose')
const SCHEMA = MONGOOSE.Schema;
const WORKLIST = new SCHEMA({
    nameWork: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    }
})
module.exports = MONGOOSE.model('WorkList', WORKLIST);