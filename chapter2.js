// minimum
const mathMin = (x, y) => {
    if(x < y){
        return x
    }else{
        return y
    }
};
console.log(mathMin(456,455));


// recursion
function isEven(num){
    if (num == 1){
        return false;
    }else if (num == 0){
        return true;
    }else if (String(num)[0] == "-"){
        return "i only take positive numbers"
    }else{
        return isEven(num - 2);
    }
}
console.log(isEven(71));


// bean counting
let str = "tryanndsee",char = "n";
const countBs = function(str, char){
    let Bs = 0, position = 0;
    for (position; position < str.length; position++){
        if (str[position] == char){
            Bs++;
        }
    }
    return Bs;
}
console.log(countBs(str, char));

