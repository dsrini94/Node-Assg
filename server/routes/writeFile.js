const writeFile = require('express').Router()
      fileWriter = require('./../modules/fileWriter.js');

writeFile.post('/writeFile',(req,res)=>{
    fileWriter(req.query.text,(data)=>{
      res.send(data);
    })
})

module.exports = writeFile;
