function countAllPaarl(registration){
    // console.log(registration)
    var countReg = [];
     //console.log(countReg)
     //console.log(registration)
     var code = registration.split(', ');
    //console.log(code)
     for (var i=0;i<code.length;i++){
        var car = code[i];
       console.log(car)
       if (car.startsWith('CJ')){
         countReg.push(car)
       }
     }
     return countReg.length
   }