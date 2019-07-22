// MINIMUM
const mathMin = (x, y) => {
    if(x < y){
        return x
    }else{
        return y
    }
};
console.log(mathMin(456,455));


// RECURSION
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
console.log(isEven(73));


// BEAN COUNTING
let str = "i have many spaces in me",char = " ";
const countBs = function(str, char){
    let Bs = 0, position = 0;
    for (position; position < str.length; position++){
        if (str[position] == char){
            Bs++;
        }
    }
    return Bs;
}
console.log(countBs(str, char))