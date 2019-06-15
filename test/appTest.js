// Unit Testing with Mocha and Chai

const assert = require('chai').assert

describe('Field test for killer Robot', () => {

    let num = 88;
    let string = 'ajnjkfhuihgekjfnvkfv'

    it("check that num is a number", () => {
        assert.isNumber(num)
    });
    
    it("check that string is a String", () => {
        assert.isString(string)
    });




})
