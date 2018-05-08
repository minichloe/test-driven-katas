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
        expect(wrap("Hello friends, welcome to fullstack. I hope you are having a good day", 20)).to.equal("Hello friends, \nwelcome to fullstack. I \nhope you are having \na good day");
    })
})
