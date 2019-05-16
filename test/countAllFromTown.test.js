describe('countAllFromTown' , function(){
    it('should return the number of registration numbers in the string that is for that specific town' , function(){
        assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CJ'), 1);
    })
    
    it('should return the number of registration numbers in the string that is for Stellenbosch' , function(){
        assert.deepEqual(fromStellies, 3);
    })


});
