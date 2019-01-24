var fs = require('fs');

module.exports = ()=>{
  try{
    var data = fs.readFileSync(__dirname+'/test.txt');
    return data;
  }
  catch(err)  {
    console.log(err);
  }
}
