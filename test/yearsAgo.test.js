describe('yearsAgo' , function(){
    it('should return how many years ago that was' , function(){
        assert.equal(yearsAgo('1999'), 20);
    })
    
    it('should return how many years ago it was' , function(){
        assert.equal(yearsAgo('2004'), 15)
    })

});


