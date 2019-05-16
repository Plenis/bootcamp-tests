describe('countAllFromTown' , function(){
    it('should return the number of registration numbers in the string that is for that town' , function(){
        assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341'), 0);
    })
    
    it('should return the number of registration numbers in the string that is for that town' , function(){
        assert.equal(countAllFromTown('CA 123, CA 456, CY 678'), 0);
    })

});
