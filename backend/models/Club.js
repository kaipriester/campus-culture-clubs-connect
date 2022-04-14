const mongoose = require('mongoose')

const ClubSchema = new mongoose.Schema( {
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
})

const ClubModel = mongoose.model('clubs', ClubSchema)
module.exports = ClubModel;