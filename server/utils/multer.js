const express = require('express')
const multer  = require('multer')
const app = require('../routes')


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + file.originalname)
    }
  })

  const fileFilters = (req, file, cb) =>{
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null, true)
    }
    else{
        cb(null, false)

        
    }
}
 
var upload = multer({storage:storage})



  module.exports = {upload}