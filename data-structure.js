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

