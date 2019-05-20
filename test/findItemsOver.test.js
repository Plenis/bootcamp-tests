describe('findItemsOver' , function(){
    it('should return products that have quantity higher than the threshold' , function(){
        assert.deepEqual(findItemsOver(itemList, threshold), results);
    })
    
    it('should return products that have a quantity less than the treshold as an empty array' , function(){
    assert.deepEqual(findItemsOver(itemList, threshold), results)
    })

});
