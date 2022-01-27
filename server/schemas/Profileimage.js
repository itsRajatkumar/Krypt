// requiring importent modules

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

// creating databse schema for saving details in database
const imageSchema = new Schema({
    
    email: {
        type: String,
        required: true,
        unique: true
    },
    filename :{
        type : String,
        unique: true,
        required: true
    },
    contentType:{
        type: String,
        required:true
    },
    imageBase64:{
        type:String,
        required:true
    }
})


module.exports = mongoose.model('Images', imageSchema)