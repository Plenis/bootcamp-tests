function countAllFromTown(registration, location){
    var countReg = [];
     var code = registration.split(',');
       //console.log(code)
   
     for (var i=0;i<code.length;i++){
        var car = code[i].trim();
      console.log(car)
       
       if (car.startsWith(location)){
         countReg.push(car)
       }
     }//  console.log(countReg.length)
     return countReg.length
   }