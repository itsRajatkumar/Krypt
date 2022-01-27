const mongoose = require('mongoose');

const url = 'mongodb+srv://krypt:Krypt%4011@cluster0.5yums.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const db = () =>{

    mongoose.connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true 
    })
    .then(()=>{
        console.log('connected')
    })
}


module.exports=db;