describe('countAllFromTown' , function(){
    it('should return the number of registration numbers in the string that is for that specific town (Cape Town)' , function(){
        assert.deepEqual(countAllFromTown('CA 123, CA 456, CY 678','CA', fromCapeTown), 2);
    })
    
    it('should return the number of registration numbers in the string that is for Stellenbosch' , function(){
        assert.deepEqual(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL', fromStellies), 3);
    })


});
