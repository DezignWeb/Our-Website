const mongo = require('../mongo.js')
// const mongoose = require('mongoose')
const MySchema = require('../schemas/Schema.js')
const mdbservice = require('../dataBaseService/mdbservice.js')


const putitem = async () =>{
    params = {
        email: 'test2@email.com',
        username: 'abhi',
        password: 'abhishek',
          
    }
    
    
    var userSchema = 'userSchema'
    dbname = "hi"
    console.log("inside putitem",params)
    await mdbservice.putItemMongoDB(params,userSchema,dbname)
    callback(null,"ji")

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