
const mongo = require('../mongo.js')
// const mongoose = require('mongoose')
const MySchema = require('../schemas/Schema.js')
var mongoPath = "mongodb+srv://Arindam:G4ZcoWs1EJQThH30@cluster0.005ll.mongodb.net/"

exports.putItemMongoDB = async (params,schemaname,dbname) =>{
    //mongo.mongoPath = 'mongodb+srv://Arindam:G4ZcoWs1EJQThH30@cluster0.005ll.mongodb.net/1LoginData?retryWrites=true&w=majority'
    mongoPath =  mongoPath + dbname +"?retryWrites=true&w=majority"
  await mongo(mongoPath).then(async (mongoose) => {
    try {
        console.log('Connected to mongodb!')
        console.log(schemaname)
        var puttheitem = 'MySchema.'+schemaname+'(params).save()'
        console.log(puttheitem)
        
        
        await eval(puttheitem)
    }finally {
        mongoose.connection.close()
    }
  })
}

exports.queryItemMongoDB = async (params,schemaname,dbname) =>{
  var result =[]
    //mongo.mongoPath = 'mongodb+srv://Arindam:G4ZcoWs1EJQThH30@cluster0.005ll.mongodb.net/1LoginData?retryWrites=true&w=majority'
    mongoPath =  mongoPath + dbname +"?retryWrites=true&w=majority"
  await mongo(mongoPath).then(async (mongoose) => {
    try {
        console.log('Connected to mongodb!')
        console.log(params)
        var queryitem = 'MySchema.'+schemaname+'.findOne(params)'
        console.log(queryitem)
        
        result = await eval(queryitem)
        console.log(result)
    }finally {
        mongoose.connection.close()
    }
  })
  return result
}
