describe('greet' , function(){
    it('should greet name inserted' , function(){
        assert.equal(greet('name'), "Hello, name");
    })
    
    it('should greet name inserted' , function(){
        assert.equal(greet('Sino'), "Hello, Sino")
    })

});
