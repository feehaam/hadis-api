const mongoose = require('mongoose')
const Schema = mongoose.Schema

const HadisSchema = new Schema({
    "hadismap":{
        type:Object
    }
})

const Hadismap = mongoose.model('Hadismap', HadisSchema)

module.exports = Hadismap