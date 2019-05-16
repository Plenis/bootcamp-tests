describe('isWeekday' , function(){
    it('should return true if starts with Mon, Tues, Wednes, Thurs, Fri' , function(){
        assert.equal(countRegNumber('weekday'), true);
    });
    it('should return false if starts with Sat, Sun' , function(){
        assert.equal(countRegNumber('not weekday'), 1);
    });
});
