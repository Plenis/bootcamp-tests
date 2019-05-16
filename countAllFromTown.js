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

   var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
   var fromCapeTown = countAllFromTown('CA 123, CA 456, CY 678');

//fromStellies should contain
assert.deepEqual(fromStellies, 3)

//fromCapeTown should contain
assert.deepEqual(fromCapeTown, 2)