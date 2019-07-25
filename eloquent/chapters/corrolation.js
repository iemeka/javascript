//  A CONCEPT!

// data
let journal = [
    {events:["work", "touched tree", "pizza", "running", "television"],
    squirrel: false},
    {events:["work", "ice cream", "cauliflower", "lasagna", "touched tree","brushed teeth"],
    squirrel: false},
    {events:["weekend", "cycling", "break", "peanuts", "beer"],
    squirrel: true},

];


// calculate the correlation value or an kind of computation or model
function phi(table){
    return(table[3] * table[0] - table[2] * table[1]) / Math.sqrt((table[2] + table[3]) * (table[0] + table[1]) * (table[1] + table[3]) * (table[0] + table[2]));
} 


// data collation

function tableFor(event, journal){
    let table = [0, 0, 0, 0];
    for (let entry of journal){
        let index = 0;

        //position
        if (entry.events.includes(event)) index += 1;
        if (entry.squirrel) index += 2;
        
        // update position
        table[index] += 1;
    }
    return table;
}

// array of independent variables
function journalEvents(journal){
    let events = [];
    for (let entry of journal){
        for (let event of entry.events){
            if (!events.includes(event)){
                events.push(event);
            }
        }
    }
    return events;
}

for (let event of journalEvents(journal)){
    console.log(event + ":", phi(tableFor(event, journal)))
}


// adding a third independent variable based on the strong negative or positive independent variables
for (let entry of journal){
    if (entry.events.includes("peanuts") && !entry.events.includes("brushed teeth")){
        entry.events.push("peanut teeth");
    }
}

console.log(phi(tableFor("peanut teeth", journal)));

// on correlation -  interprete strong negative and strong positive - both counter effects of each other
// 3rd - 11, 2nd - 10, 1st - 01 , 0 - 00; array position
