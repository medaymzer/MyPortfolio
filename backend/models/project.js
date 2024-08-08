const mongoose = require('mongoose')

const Schema = mongoose.Schema

const project = new Schema({
    title : {
        type : String,
        required : true
    },
    type :{
        type : String,
        required : true
    },
    date : {
        type: String,
        required:true
    },
    description : {
        type : String,
        required : true
    },
    screenshotBase64 : {
        type : [String],
        required : true
    }
    
})
module.exports = mongoose.model('Project',project)