const mongo = require('../mongo.js')
// const mongoose = require('mongoose')
const MySchema = require('../schemas/Schema.js')
const mdbservice = require('../dataBaseService/mdbservice.js')
const path = require('path');

const putitem = async () =>{
    params = {
        email: 'test2@email.com',
        username: 'abhi',
        password: 'abhishek',
          
    }
    
    
    var userSchema = 'userSchema'
    dbname = "hi2"
    console.log("inside putitem",params)
    await mdbservice.putItemMongoDB(params,userSchema,dbname)
    // res.redirect(path.join(__dirname+'/Frontend/index.html'))
}

const queryitem = async () =>{
    params = {
        email: "test@email.com",
    }
    var userSchema = 'userSchema'
    dbname = "hi"
    console.log("inside queryitem",params)
    await mdbservice.queryItemMongoDB(params,userSchema,dbname)
    console.log(result)
}


exports.putitem = putitem