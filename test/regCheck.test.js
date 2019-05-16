describe('regCheck' , function(){
    it('should return true for GP if car registration ends with GP' , function(){
        assert.equal(regCheck('DV 23 NB GP'),false);
    });
    it('should return false if car registration number starts with CY' , function(){
        assert.equal(regCheck('CY 123'),false);
    });
});