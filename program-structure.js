// LOOPING A TRIANGLE
let ash = ""
for(let i=0;i<7;i++){
    ash +="#";
    console.log(ash);
}

// CHESSBOARD
let grid = 20 ,boxTwo = "", box = "";

for(j=1;j < grid; j++){
    if (j == 1) box += " ";

    if ( j % 2 == 0){
        box += " "
    }else{
        box += "#"
    }
}

for(j=1;j < grid; j++){
    if (j == 1) boxTwo += "#";

    if ( j % 2 == 0){
        boxTwo += "#"
    }else{
        boxTwo +=" "
    }
}

for (j=0;j<grid;j++){
    if (j%2==0){
        console.log(box)
    }else{
        console.log(boxTwo)
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
