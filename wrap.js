// (String, integer) -> String
const wrap = (str, int) => {
    let copy = str;
    if(str.length > int){
        const arr = [];
        let counter = 1;
        let ind = counter * int;
        let sliced;
        console.log(ind, str.length);
        while(ind < str.length) {
            if(copy[ind] !== ' '){
                let tempInd = copy.lastIndexOf(' ', ind)
                let variance = ind - tempInd

            }
            copy = copy.slice(0, ind) + '\n' + copy.slice(int * counter);
            counter += 1;
            ind = (counter * int) - variance;
            console.log(int * counter, str.length);
        }
        //return str.slice(int)
    }
    return copy
}

module.exports = wrap;
