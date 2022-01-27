const express = require('express');
const app = express()
const {registerUser, loginUser, updatepassword} = require('./routes/SignupLogin')   //Auth functions
const {uploadProfile, getProfie, removeProfile, updateProfile} = require('./routes/uploadImage')    //profile img functions
const {upload} = require('./utils/multer')    //multer for uploading image


// serving files
app.get('/', (req, res)=>{
  res.sendFile(__dirname + '/htmlf/home.html')
})
app.get('/login', (req, res)=>{
  res.sendFile(__dirname + '/htmlf/login.html')
})
app.get('/register', (req, res)=>{
  res.sendFile(__dirname + '/htmlf/register.html')
})
app.get('/uploadProfile', (req, res)=>{
  res.sendFile(__dirname + '/htmlf/uploadprofile.html')
})
app.get('/updatepassword', (req, res)=>{
  res.sendFile(__dirname + '/htmlf/pass.html')
})



// User Authentication request handling

// user register request 
app.post('/register',(req, res)=>{
  registerUser(req,res)
  
})

// user Login request 
app.post('/login', (req, res)=>{
  loginUser(req, res)
  
})

// user Update password request 
app.post('/updatepassword', (req, res)=>{
  updatepassword(req, res)
})



// Profile Images CURD

// Profile Images upload to databse
app.post('/uploadProfile', upload.single('myImage'), (req, res)=>{
  uploadProfile(req,res)
})


// Profile Images retrive from database
app.post('/getProfie', (req, res)=>{
  getProfie(req,res)
})

// Profile Images remove from database
app.post('/removeProfile', (req, res)=>{
  removeProfile(req,res)
})

// Profile Images update from database
app.post('/updateProfile', (req, res)=>{
  updateProfile(req, res)
})

module.exports = app;
