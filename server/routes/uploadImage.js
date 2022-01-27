const userModel = require("../schemas/Schema");
const jwt = require('jsonwebtoken')
const fs = require('fs')


// function for uploding image to the server 
const uploadProfile = (req, res) =>{
// console.log(req)
const token = req.headers.authorization
const extracted_token = token.substring(7)
const extract_data =  jwt.decode(extracted_token)
// console.log(extract_data)
const loggedin_email = extract_data.email

const files = req.file
// console.log(files)

// reading file for getting buffer data
let img = fs.readFileSync(files.path)
// console.log(img)

// converting buffer to base64 string
var encode_img = img.toString('base64');
// console.log(encode_img)



// let newUpload = new imageModel(final_img)
// newUpload.save()
// .then(()=>{
//   return { msg:`${files.originalname} Uploaded Successfully`}
// })
// .catch(error =>{
//   if(error){
//     if(error.name === 'MongoError' && error.code === 11000){
//       return Promise.reject({error:`Duplicate ${files.originalname}. File Allready exists`})
//     }
//     return Promise.reject({error:error.message || `Cannot upload ${files.originalname}. Something went wrong`})
//   }
// })


// updating image base64 string and content type data to database
  userModel.updateOne({email:loggedin_email}, {image: encode_img}, (err, res)=>{
      console.log(res)
  })

  userModel.updateOne({email:loggedin_email}, {contentType: files.mimetype}, (err, res)=>{
    console.log(res)
})




  if(req.file === undefined){
      res.status(400).send('Only Jpeg And Png Images can be used')
    }
    else{
      res.status(200).send('successfully stored')
      console.log('successfully stored')
    }


}

const getProfie = (req, res) =>{

}

const removeProfile = (req, res) =>{

}


const updateProfile = (req, res) =>{

}


module.exports = {uploadProfile, getProfie, removeProfile, updateProfile}