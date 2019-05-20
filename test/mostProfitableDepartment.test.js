describe('mostProfitableDepartment' , function(){
    it('should determine which of their departments are the most profitable' , function(){
        assert.equal(mostProfitableDepartment(salesData), 'outdoor');
    })
    
    it('should determine which of their departments are the most profitable in that week ' , function(){
        assert.equal(mostProfitableDepartment(salesData), 'outdoor')
    })

});