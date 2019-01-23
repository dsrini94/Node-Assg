module.exports = (a,b,callback) => {
    console.log(parseInt(a)*parseInt(b));
    callback(parseInt(a)*parseInt(b));
}
