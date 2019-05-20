describe('findItemsOver20' , function(){
    it('should return all the products that have a quantity higher than 20' , function(){
        assert.deepEqual(findItemsOver20(item), results);
    })
    
    it('should return an empty string if it doesnt have a quantity higher than 20' , function(){
        assert.deepEqual(findItemsOver20(item), results)
    })

});
