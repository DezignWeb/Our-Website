const PORT = process.env.PORT || 3000
const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

const insert = require('./API/Insert');
app.use(express.json());
router.post('/',function(req,res){
    console.log(req)
})

router.get('/about',insert.putitem)
  
router.get('/sitemap',function(req,res){
    res.sendFile(path.join(__dirname+'/Frontend/sitemap.html'));
  });


app.use('/', router);
app.use(express.static((path.join(__dirname, '/Frontend/index.html'))))
app.listen(process.env.PORT || 3000)

console.log('Running at Port 3000');
// app.listen(PORT, () => {
//     console.log('App up at port ${PORT}')
// })