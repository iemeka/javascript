function promptDirection(question){
    let result = prompt(question);
    if (result.toLowerCase() == "left") return "L";
    if (result.toLowerCase() == "right") return "R";
    throw new Error("Invalid direction: " + result);
}

function look(){
    if (promptDirection("which way?") == "L"){
        return "a house";
    }else{
        return "two angry bears"
       }
}

// try{
//     console.log("You see", look())
// } catch (error){
//     console.log("Something went wrong: " + error)
// }

const accounts = {
    a:100,
    b:0,
    c:20
};

// money disappears if this function returns an invalid account name
//couse its subtract money before confirming where its adding it too
function getAccount(){
    let accountName = prompt("Enter an account name");
    if (!accounts.hasOwnProperty(accountName)){
        throw new Error(`No such account: ${accountName}`);
    }
    return accountName;
}

function transfer(from, amount){
    if (accounts[from] < amount) return;
    accounts[from] -= amount;
    accounts[getAccount()] += amount;

}


// a better code
function transfer(from, amount){
    if (accounts[from] < amount) return;
    let progress = 0;
    try {
        accounts[from] -= amount;
        progress = 1;
        accounts[getAccount()] += amount;
        progress = 2;
    } finally{
        if (progress == 1){
            accounts[from] += amount;
        }
    }
}

// 
for (;;){
    try {
        let dir = promptDirection("where?");
        console.log
    }
}

