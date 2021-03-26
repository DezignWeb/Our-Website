  
const mongoose = require('mongoose')
// var mongoPath = `mongodb+srv://Arindam:G4ZcoWs1EJQThH30@cluster0.005ll.mongodb.net/LoginData?retryWrites=true&w=majority`

module.exports = async (mongoPath) => {
  await mongoose.connect(mongoPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  
  return mongoose
}