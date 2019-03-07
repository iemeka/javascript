const mathMin = (x, y) => {
    if(x < y){
        return x
    }else{
        return y
    }
};

console.log(mathMin(456,455));

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

console.log(isEven(-71))
