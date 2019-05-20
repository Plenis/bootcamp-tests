describe('totalPhoneBill' , function(){
    it('should calculate the total bill for smss' , function(){
        assert.equal(totalPhoneBill('sms, sms, sms'), 'R1.95');
    })
    
    it('should calculate the total bill for calls' , function(){
        assert.equal(totalPhoneBill('call, call, call, call'), 'R11.00')
    })

    it('should calculate the total bill for both calls and smss' , function(){
        assert.equal(totalPhoneBill('call, call, call, sms, sms, call sms'), 'R9.55')
    })


});
