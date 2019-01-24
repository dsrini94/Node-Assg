module.exports = (a,b) => {
    if(a !=undefined && b != undefined && a != null && b != null)
      return (parseInt(a)*parseInt(b));
    else
       return 'Operands are not of type Integer';
}
