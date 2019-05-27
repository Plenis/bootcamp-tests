function mostProfitableDepartment(department){
    var sales = [];
    for(var i=0; i<department.length; i++){
       
      if(department[i]){
        sales.push(department[i].sales);
        
      }
    }
    var max = Math.max(...sales);
    //console.log(max)
    var bestDep = [];
    for(var i=0; i<department.length; i++){
      
      if(department[i].sales === max){
        bestDep.push(department[i].department);
      }
    }
    //console.log(bestDep)
    return bestDep
  }

  var salesData = [
    {department: 'hardware', sales: 4500, day: 'Monday'},
    {department: 'outdoor', sales: 1500, day: 'Monday'},
    {department: 'carpentry', sales: 5500, day: 'Monday'},
    {department: 'hardware', sales: 7500, day: 'Tuesday'},
    {department: 'outdoor', sales: 2505, day: 'Tuesday'},
    {department: 'carpentry', sales: 1540, day: 'Tuesday'},
    {department: 'hardware', sales: 1500, day: 'Wednesday'},
    {department: 'outdoor', sales: 8507, day: 'Wednesday'},
    {department: 'carpentry', sales: 8009, day: 'Wednesday'},
    {department: 'hardware', sales: 12000, day: 'Thursday'},
    {department: 'outdoor', sales: 18007, day: 'Thursday'},
    {department: 'carpentry', sales: 6109, day: 'Thursday'},
    {department: 'hardware', sales: 7005, day: 'Friday'},
    {department: 'outdoor', sales: 12006, day: 'Friday'},
    {department: 'carpentry', sales: 16109, day: 'Friday'}
];

var salesData2 = [
  {department: 'hardware', sales: 4900, day: 'Monday'},
  {department: 'outdoor', sales: 2500, day: 'Monday'},
  {department: 'carpentry', sales: 51500, day: 'Monday'},
  {department: 'hardware', sales: 7500, day: 'Tuesday'},
  {department: 'outdoor', sales: 505, day: 'Tuesday'},
  {department: 'carpentry', sales: 5640, day: 'Tuesday'},
  {department: 'hardware', sales: 1500, day: 'Wednesday'},
  {department: 'outdoor', sales: 8597, day: 'Wednesday'},
  {department: 'carpentry', sales: 8009, day: 'Wednesday'},
  {department: 'hardware', sales: 14000, day: 'Thursday'},
  {department: 'outdoor', sales: 11207, day: 'Thursday'},
  {department: 'carpentry', sales: 2109, day: 'Thursday'},
  {department: 'hardware', sales: 7585, day: 'Friday'},
  {department: 'outdoor', sales: 11256, day: 'Friday'},
  {department: 'carpentry', sales: 16109, day: 'Friday'}
];