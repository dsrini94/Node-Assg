const readFile = require('express').Router()
      fileReader = require('./../modules/fileReader.js');

readFile.get('/readFile',(req,res)=>{
    fileReader((data)=>{
      res.send(data);
    })
})

module.exports = readFile;
