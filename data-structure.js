// increasing and decreasing range function
const range = (start, end,step) => {
    let rangeArray = [];
    if (String(step)[0] != "-"){
        for (start; start <= end; start+=step){
            rangeArray.push(start);
        }
        return rangeArray;
    }else{
        for (start; start >= end; start+=step){
            rangeArray.push(start);
        }
        return rangeArray;
    }  
}

let rangeArray = range(10,1,-2);
const sum = function(rangeArray){
    let sumOfRangeArray = 0;
    for (let elem of rangeArray){
        sumOfRangeArray =  sumOfRangeArray + elem;
    }
    return sumOfRangeArray;
}

console.log(sum(rangeArray));
console.log(rangeArray);

// REVERSING AN ARRAY
let data = [5,10,15], reversedData = [],index = data.length - 1, inversedData = [];

function reverseArrayInPlace(data){
    let reduceBy = -1;
    for (index; 0 <= index ; index+=reduceBy){
        reversedData.push(data[index]);
    }
    return reversedData;
}
// INSERSE OF AN ARRAY
function reverseArray(data){
    for (let elem of data){
        inversedData.push(1/elem)
    }
    return inversedData
}

console.log(reverseArrayInPlace(data))
console.log(reverseArray(data))

//  A LIST