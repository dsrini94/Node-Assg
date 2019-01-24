const readFile = require('express').Router()
      fileReader = require('./../modules/fileReader.module.js');

readFile.get('/readFile',(req,res)=>{
    try{
      var fetchDataFromFile = new Promise((resolve,reject)=>{
        var data = fileReader().toString();
        if(data != undefined && data != null)
          resolve(data);
      }).then((data) => {
       res.send(data);
     })
    }
    catch(err){
      console.log(err);
    }
})

module.exports = readFile;
