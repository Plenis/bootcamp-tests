function findItemsOver(product, threshold){
    
    var overThreshold = [];
    
    for(var i=0; i<product.length; i++){
      //var l = product[i].qty;
    
    if(product[i].qty > threshold){
      overThreshold.push(product[i])
     
    }
    }
   return overThreshold
   }

   var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];

var threshold = 25;
   var results = findItemsOver(itemList, 25)
   console.log(results)

// var re = findItemsOver(itemList,threshold);