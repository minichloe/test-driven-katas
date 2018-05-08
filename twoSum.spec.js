const { expect } = require('chai');
const twoSum = require('./twoSum');

describe('twoSum', () => {
    it('Returns an empty array if target cannot be reached', () => {
        expect(twoSum([3, 4], 2)).to.deep.equal([]);
    })

    it('Returns an array with two numbers if target is reached', () => {
        expect(twoSum([1, 3, 5], 4)).to.have.lengthOf(2);
    })

    it('Returns an array with two numbers that equal target', () => {
        expect(twoSum([7, 4, 1, 6, 9], 8)).to.deep.equal([0, 2]);
    })
})
