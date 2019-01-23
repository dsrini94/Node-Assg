var fs = require('fs');

module.exports = (callback)=>{
  fs.readFile(__dirname+'/test.txt','utf8',(err,data)=>{
      if(!err)
        callback(data);
  })
}
