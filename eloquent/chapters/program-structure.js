// LOOPING A TRIANGLE
let ash = ""
for(let i=0;i<7;i++){
    ash +="#";
    console.log(ash);
}

// CHESSBOARD
let grid = 8 ,hash = "", space = "";

for(j=1;j < grid; j++){
    if (j == 1) {
        space += " ";
        hash += "#";
    }
    if ( j % 2 == 0){
        space += " ";
        hash += "#";
    }else{
        space += "#";
        hash +=" ";
    }
}

for (j=0;j<grid;j++){
    if (j%2==0){
        console.log(space)
    }else{
        console.log(hash)
    }
}

// FizzBuzz
for(let j=1; j<=100;j++){
    if(j%5==0 && j%3==0){
        console.log("FizzBuzz")
    }else if(j%3==0){
        console.log("Fizz")
    }else if(j%5==0){
        console.log("Buzz")
    }else{
        console.log(j)
    }
    
}
