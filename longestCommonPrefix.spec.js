const { expect } = require('chai');
const longestCommonPrefix = require('./longestCommonPrefix');

describe('Longest common prefix', () => {
    it('Returns a string', () => {
        expect(longestCommonPrefix(['foobar', 'foo', 'foolish'])).to.be.a('string');
    })
})
