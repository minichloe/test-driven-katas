// (String, integer) -> String
// const wrap = (str, int) => {
//     let copy = str;
//     if(str.length > int){
//         const arr = [];
//         let counter = 1;
//         let ind = counter * int;
//         let sliced;
//         console.log(ind, str.length);
//         while(ind < str.length) {
//             if(copy[ind] !== ' '){
//                 let tempInd = copy.lastIndexOf(' ', ind)
//                 let variance = ind - tempInd

//             }
//             copy = copy.slice(0, ind) + '\n' + copy.slice(int * counter);
//             counter += 1;
//             ind = (counter * int) - variance;
//             console.log(int * counter, str.length);
//         }
//         //return str.slice(int)
//     }
//     return copy
// }

const wrap = (str, int) => {
    let sliced, index;
    const arr = [];
    if (str.indexOf(' ') > int) int = str.indexOf(' ');
    while (str.length > int) {
        sliced = str.slice(0, int + 1);
        index = sliced.lastIndexOf(' ');
        arr.push(str.slice(0, index));
        str = str.slice(index + 1);
    }
    arr.push(str);
    return arr.join('\n');
}

module.exports = wrap;
