// requiring importent modules
var mongoose = require('mongoose');
const bcrypt = require("bcrypt");
var Schema = mongoose.Schema;



// creating databse schema for saving details in database
var SomeModelSchema = new Schema({
  firstname: {
    type: String,
    required: true 
  },

  lastname: {
    type: String,
    required: true 

  },

  email: {
    type: String,
    required: true,
    unique: true

  },

  address: {
    type: String,
    required: false 

  },

  dob:{
    type: Date,
    required: false 

  },
  // storing hashed password
  password:{
    type: String,
    required: true 

  },
  
  // storing image details
  // first is img base64 string
  // second is image content type
  image:{
    data:Buffer,
    contentType: String,
    required: false
  },

  contentType:{
    type:String
  }


});


// SomeModelSchema.pre('save', async function(next){
//   if(this.isModified('password')){
//     let salt = bcrypt.genSalt(saltRounds)
//     this.password = bcrypt.hash(password, salt)
//     }
//     next();  
// })
  
// exporing module for use to upload details
module.exports = mongoose.model('User', SomeModelSchema );

