const saveFile = require('express').Router();
var multer  = require('multer')
var upload = multer({ dest: __dirname +'/uploads/' })

// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     console.log("inside destination");
//     cb(null, __dirname +'/uploads/')
//   },
//   filename: function (req, file, cb) {
//     console.log("inside filename");
//     cb(null, file.fieldname + '-' + Date.now())
//   }
// })
//
// var upload = multer({ storage: storage })


saveFile.post('/saveFile', upload.single('photo'),(req, res)=>{
  res.send("Success");
})

module.exports = saveFile;
