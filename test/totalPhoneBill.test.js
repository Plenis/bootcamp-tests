describe('totalPhoneBill' , function(){
    it('should calculate the total bill for the data provided' , function(){
        assert.equal(totalPhoneBill('call, sms, call, sms, sms'), 'R7.45');
    })
    
    it('should calculate the total bill for the data provided' , function(){
        assert.equal(totalPhoneBill('call, call, sms'), 'R6.15')
    })

});
