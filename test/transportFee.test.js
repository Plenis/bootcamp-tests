describe('transportFee' , function(){
    it('should return the right price based on the shift you working' , function(){
        assert.equal(transportFee('morning'), 'R20');
    })

    it('should return the right price based on the shift you working' , function(){
        assert.equal(transportFee('afternoon'), 'R10')
    })

   
    it('should return the right price based on the shift you working' , function(){
        assert.equal(transportFee('night'), 'You pay nothing!')
    })


});