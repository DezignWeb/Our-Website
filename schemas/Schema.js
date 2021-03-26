const mongoose = require('mongoose')
var Schema = mongoose.Schema
const reqString = {
  type: String,
  required: true,
}

const userSchema = new mongoose.Schema({
  email: reqString,
  username: reqString,
  password: reqString,
})

const courseSchema = new mongoose.Schema({
  name: reqString,
  duration: reqString
})

var user = mongoose.model('userSchema', userSchema)
var course = mongoose.model('courseSchema', courseSchema)

module.exports={
  userSchema : user,
  courseSchema : course 
  }