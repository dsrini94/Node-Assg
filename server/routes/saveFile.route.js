const saveFile = require('express').Router();
var multer  = require('multer')
var upload = multer({ dest: __dirname +'/uploads/' })

saveFile.post('/saveFile', upload.single('photo'),(req, res)=>{
  try{
    res.send("Success");
  }
  catch(err){
    console.log(err);
  }
})

module.exports = saveFile;
