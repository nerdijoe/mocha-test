function simple_calc(a, b, operation) {

  if( typeof a == 'string' || typeof b == 'string')
    return "Please input the correct parameter"
  else {
    switch(operation) {
      case '+': return a+b;
      case '-': return a-b;
      case '/': return a/b;
      case '*': return a*b;
      case '^': return Math.pow(a,b);
      case ':':
        if(a < 0 && b%2 != 1) return NaN; // Not well defined
        return (a < 0 ? -1 : 1) * Math.pow(Math.abs(a), 1/b);

      default: return "Operation is invalid"
    }
  }


}


module.exports = simple_calc;
