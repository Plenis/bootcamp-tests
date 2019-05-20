describe('findItemsOver20' , function(){
    it('should return all the products that have a quantity higher than 20' , function(){
        assert.deepEqual(findItemsOver20(item), results);
    })
    
    it('should return all the products that have a quantity higher than 20' , function(){
        assert.deepEqual(findItemsOver20(plus20), results)
    })

});
