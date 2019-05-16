describe('findItemsOver' , function(){
    it('should return products that have quantity higher than the threshold' , function(){
        assert.deepEqual(findItemsOver(itemList, threshold), results);
    })
    
    // it('should return products that have quantity higher than the threshold' , function(){
    //     // assert.deepEqual(findItemsOver('item'), [])
    // })

});
