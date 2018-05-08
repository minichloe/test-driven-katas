const twoSum = (arr, target) => {
    const newArr = [];
    try{
        const nums = new Set(arr.map(x => target - x));
        for (let i = 0; i < arr.length; i++) {
            if (nums.has(arr[i])) {
                // newArr.push(arr[i], target - arr[i]);
                const secondIndex = arr.lastIndexOf(target - arr[i]);
                if (i !== secondIndex) newArr.push(i, secondIndex);
                break;
            }
        }
    } catch(err){
        console.log(err)
    }
    return newArr;
}

module.exports = twoSum;
