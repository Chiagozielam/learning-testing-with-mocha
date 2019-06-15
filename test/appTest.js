// Unit Testing with Mocha and Chai

const assert = require('chai').assert
const App = require('../app')

describe('robot tests are successful', () => {

    let num = 88;
    let string = 'ajnjkfhuihgekjfnvkfv'
    let robot = App 

    it("check that num is a number", () => {
        assert.isNumber(num)
    });

    it("check that string is a String", () => {
        assert.isString(string)
    });
    it("check that Robot talks strings", () => {
        assert.isString(robot.talk(), 'string')
    })




})
