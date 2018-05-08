const twoSum = (arr, target) => {
    const nums = new Set(arr.map(x => target - x));
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (nums.has(arr[i])) {
            newArr.push(arr[i], target - arr[i]);
            break;
        }
    }
    return newArr;
}

module.exports = twoSum;
