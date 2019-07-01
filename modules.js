// on modules
const weekDay = function(){
    const names = ["sunday", "monday","tuesday","wednessday","thursday"];
    return{
        // function expresstion - returns an element associated with that index
        name(number){ return names[number];},
        // returns an index
        number(name){ return names.indexOf(name);} 
    };
}();

console.log(weekDay.name(weekDay.number("monday")))

// interpreting data as code
const x = 1;
function evalAndReturnX(code){
    eval(code); // disconnect x from it global binding
    return x;
}

console.log(evalAndReturnX("var x = 2"));
console.log(x)

// wrapping a module's code in a function and use that functions's scope as a module scope

let plusOne = Function("n", "return n + 1;");  // better way
console.log(plusOne(4));