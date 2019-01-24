const express = require('express'),
      app = express();

const readFile = require('./routes/readFile.route.js'),
      product = require('./routes/getProduct.route.js'),
      charFinder = require('./routes/nonRepeatingCharFinder.route.js'),
      scrapper = require('./routes/scrapper.route.js'),
      saveFile = require('./routes/saveFile.route.js');

app.use(express.static('./../build'));

app.use('/',(req,res,next)=>{
  next();
},readFile, product, charFinder, scrapper, saveFile)

app.listen(3001,()=>{
  console.log('server is listening to port 3001')
})
