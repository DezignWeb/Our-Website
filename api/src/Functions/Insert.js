const mongo = require('../dataBaseService/mongo.js')
// const mongoose = require('mongoose')
const MySchema = require('../../schemas/Schema')
const mdbservice = require('../dataBaseService/mdbservice.js')
const path = require('path');

const putitem = async () =>{
    params = {
        email: 'test2@email.com',
        username: 'abhiaaaS',
        password: 'abhishek',
          
    }
    
    
    var userSchema = 'userSchema'
    dbname = "LoginDetails"
    console.log("inside putitem",params)
    await mdbservice.putItemMongoDB(params,userSchema,dbname)
    kk = {
    "a":"s"
    }
    return kk
    
}


// exports.putitem = putitem
