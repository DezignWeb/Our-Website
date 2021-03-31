const mongo = require('../dataBaseService/mongo.js')
// const mongoose = require('mongoose')
const MySchema = require('../../schemas/Schema')
const mdbservice = require('../dataBaseService/mdbservice.js')
const path = require('path');

const queryitem = async () =>{
    params = {
        email: "test2@email.com"
    }
    var userSchema = 'userSchema'
    dbname = "LoginDetails"
    console.log("inside queryitem",params)
    result = await mdbservice.queryItemMongoDB(params,userSchema,dbname)
    console.log("end of queryitem",result)
    return result
    
}


exports.queryitem = queryitem