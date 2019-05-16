function regCheck(cars, code){
  return cars.startsWith(code) || cars.endsWith(code)
  }

  
var isGP = regCheck('DV 23 NB GP', 'GP');

//should print true
console.log(isGP);

var isMP = regCheck('DV 23 LP GP', 'MP');
//should print false
console.log(isMP);

// should return false
var isBellville = isFrom('CY189-012', 'CY');

//should return false
var isDurban = isFrom('CY189-012', 'ND');