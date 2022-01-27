const userModel = require("../schemas/Schema");
const bcrypt = require('bcrypt')
const saltRounds = 10; 
var jwt = require('jsonwebtoken');

// User Authentication Functions

// New user registration
function registerUser(req,res){
    try {

        const {password, email, firstname, lastname, address, dob} = req.body
        
        // validating input details for signup
        if(!email || typeof email !== 'string'){
            return res.json({status:'error',error:'Invalid Email'})
        }
        if(!firstname || typeof firstname !== 'string'){
            return res.json({status:'error',error:'Invalid Firstname'})
        }
        if(!lastname || typeof lastname !== 'string'){
            return res.json({status:'error',error:'Invalid Lastname'})
        }
        if(!address || typeof address !== 'string'){
            return res.json({status:'error',error:'Invalid Address'})
        }
        if(!dob || typeof dob !== 'string'){
            return res.json({status:'error',error:'Invalid DOB'})
        }
        if(!password || typeof password !== 'string'){
            return res.json({status:'error',error:'Invalid Password'})
        }
        if(password.length < 6){
            return res.json({status:'error',error:'Password to small'})
        }
        
        // creating record in databse with recived input
        const user = new userModel(password, email, firstname, lastname, address, dob);

        // generating incrypted password
        bcrypt.genSalt(saltRounds, async function (err, salt) {
            bcrypt.hash(password, salt, async function (err, hash) {

                // updating hashed password to the database
                user.password = hash
                const newUser = await user.save().then((data)=>{
                    console.log(data)

                    // geerating jwt token for client
                    var privateKey = 'tushar';
                    var token = jwt.sign({email}, privateKey, (err, token)=>{
                        console.log(token)
                    });
                }).catch((e)=>{
                    console.log('User Already Registered')
                });  // res.send(newUser); 
            });
        })





    } catch (error) {
      console.log(error)
        // if(erro.code === 11000){
        //     return res.json({status:'error',error:'Email Allready Exists'})
        // }
        // throw error
        
    }

}

// function for logging in user
function loginUser(req, res){
    // login
    const {email, password} = req.body

    // validating input details 
    if(!email || typeof email !== 'string'){
        return res.json({status:'error',error:'Invalid Email'})
    }
    if(!password || typeof password !== 'string'){
        return res.json({status:'error',error:'Invalid Password'})
    }
    if(password.length < 6){
        return res.json({status:'error',error:'Password to small'})
    }

    // finding user details in database
    userModel.findOne({
    email
    },(err, posts)=>{

        // comparing user password with hashed password
        bcrypt.compare(password, posts.password, (err, ress)=>{ 
            console.log(ress)

            // if password matched then we generate JWT token
           if(ress){
               var privateKey = 'tushar';
               var token = jwt.sign({email}, privateKey, (err, token)=>{
                   console.log(token)
                   
               });
               res.send(token)
           }
           else{
               res.send('Email Or Password Incorrect')
           }
        })
    })
}

// function for updating password
function updatepassword(req, res){

    // validating input details 
    const {email, oldpassword, newpassword} = req.body
    if(!email || typeof email !== 'string'){
        return res.json({status:'error',error:'Invalid Email'})
    }
    if(!oldpassword || typeof oldpassword !== 'string'){
        return res.json({status:'error',error:'Invalid old Password'})
    }
    if(oldpassword.length < 6){
        return res.json({status:'error',error:'old Password to small'})
    }
    if(!newpassword || typeof newpassword !== 'string'){
        return res.json({status:'error',error:'Invalid new Password'})
    }
    if(newpassword.length < 6){
        return res.json({status:'error',error:'new Password to small'})
    }

    // finding user details in database
    userModel.findOne({ email },(err, posts)=>{
        console.log(posts)
    // comparing user oldpassword with hashed password
        bcrypt.compare(oldpassword, posts.password, (err, ress)=>{
                if(ress){

                    // if password matched then we generating new hashed password and saving to database
                   bcrypt.genSalt(saltRounds, (err, salt)=>{
                    bcrypt.hash(newpassword, salt, function(err, hash) {
                        console.log(hash)
                        userModel.updateOne({"email":email},{$set: {"password":hash}}, (err, res)=>{
                            userModel.findOne({email}, (err, res)=>{
                                console.log(res)
                            })
                        })
                    })
                   })
                }
                else{
                    res.send('Incorrect Password')  
                }
            })
        })
    }




module.exports = {registerUser, loginUser, updatepassword}


