const { expect } = require('chai');
const wrap = require('./wrap');

describe("wrap", () => {
    it('Returns a string if empty string was provided', () => {
        expect(wrap("", 10)).to.equal("");
    })
    it('Returns the string if the string is less than the column length input', () => {
        expect(wrap("hello friends", 15)).to.equal("hello friends");
    })
    it('Returns the string formatted with line breaks if longer than column length', () => {
        expect(wrap("Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.", 20)).to.equal("Lorem ipsum dolor\nsit eu amet, elit na\nmagna sem amet nulla\nvel purus ac ligula.");
    })
    it('Sets column int to default to first space if input number is too low', () => {
        expect(wrap('hello world', 1)).to.equal('hello\nworld');
    })
})
