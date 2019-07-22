let human = {gender:'male', look}

// human.see = function look(something){
//     return this.gender + something
// }

function look(something){
    return this.gender + something
}

// console.log("i need two "+` ${human.look("big eyes")}`)
console.log("i need two "+` ${look.call(human, "big eyes")}`)

console.log(human)

let i = Symbol("nothing")

function me(){
    
}