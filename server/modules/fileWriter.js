const fs = require('fs');

module.exports = function(content,callback){
  fs.writeFile("./demo.txt",content, function(err) {
      if(err) {
          callback(err)
      }
      callback('A File has been created and saved successfully');

  });
}
