describe('regCheck' , function(){
    it('should return true for GP if car registration ends with GP' , function(){
        assert.deepEqual(regCheck('DV 23 NB GP','GP'),true);
    });
    it('should return true if car registration number starts with CY' , function(){
        assert.deepEqual(regCheck('CY 123 ', 'CY'),true);
    });
});