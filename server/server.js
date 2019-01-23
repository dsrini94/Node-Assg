const express = require('express'),
      app = express();

const readFile = require('./routes/readFile.js'),
      product = require('./routes/product.js'),
      writeFile = require('./routes/writeFile.js'),
      charFinder = require('./routes/char-finder.js'),
      scrapper = require('./routes/scrapper.js'),
      saveFile = require('./routes/saveFile.js');

app.use(express.static('./../build'));

app.use('/',(req,res,next)=>{
  next();
},readFile, product, writeFile, charFinder, scrapper, saveFile)

app.listen(3001,()=>{
  console.log('server is listening to port 3001')
})
