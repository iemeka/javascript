const roads = [
    "Alice's House-Bob's House", "Alice's House-Cabin",
    "Alice's House-Post Office", "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop", "Marketplace-Farm",
    "Marketplace-Post Office", "Marketplace-Shop",
    "Marketplace-Town Hall", "Shop-Town Hall"
];

const mailRoute = [
    "Alice's House", "Cabin", "Alice's House", "Bob's House",
    "Town Hall", "Daria's House", "Ernie's House",
    "Grete's House", "Shop", "Grete's House", "Farm",
    "Marketplace", "Post Office"
]

function buildGraph(edges){  //creats a fuction with a parameter 'roads'
    let graph = Object.create(null); // creates and object with no prototype to avoid conflicts of keys
    function addEdge(from,to){ // a function taking the parameters from a two elements array
        if (graph[from] == null){ // if searching for a value using a key == null in the empty object created above
            graph[from] = [to]; // add the key and set value to an array which first value is 'to' (if to is with [] the value will just be a string which have not method push as in the 'else' body )
        } else { // if the key returns a value (which should be an array with at least one element - say a previous 'to')
            graph[from].push(to); // add a new element to the value (which is an array)
        }
    }
    for (let [from,to] of edges.map(r => r.split("-"))){ // created a two element array by spliting each  element (which is a funtion of map) in the 'roads' array
        addEdge(from, to); // passing these two elements as arguement to 'addEdge' to be added as keys (from) and values(to) the empty object
        addEdge(to, from);
    }
    return graph; // returns the created object
}
const roadGraph = buildGraph(roads); // calls the function which returns the graph object then stores the object in a variable

class VillageState {
    constructor(place, parcels){
        this.place = place;
        this.parcels = parcels;
    }

    move(destination){
        if (!roadGraph[this.place].includes(destination)){
            return this;
        } else{
            let parcels = this.parcels.map(p =>{
                if (p.place != this.place) return p;
                return {place: destination, address: p.address};
            }).filter(p => p.place != p.address);
            return new VillageState(destination, parcels);
        }
    }
}


// let first = new VillageState(
//     "Post Office",
//     [{place: "Post Office", address: "Alice's House"}]
// );

// let next = first.move("Alice's House");
// console.log(next.place);
// console.log(next.parcels);
// console.log(first.place);

let object = Object.freeze({value:4});
object.value = 18;
console.log(object.value);

function runRobot(state, robot, memory){
    for (let turn = 0;; turn++){
        if (state.parcels.length == 0){
            console.log(`Done in ${turn} turns`);
            break;
        }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
        console.log(`Moved to ${action.direction}`);
    }
}

function randomPick(array){
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
}

function randomRobot(state){
    return {direction: randomPick(roadGraph[state.place])};
}

VillageState.random = function(parcelCount = 5){
    let parcels = [];
    for (let i = 0; i < parcelCount; i++){
        let address = randomPick(Object.keys(roadGraph));
        let place;
        do {
            place = randomPick(Object.keys(roadGraph));
        } while (place == address);
        parcels.push({place, address});
    }
    return new VillageState("Post Office", parcels);
};

function routeRobot(state, memory){
    if (memory.length == 0) {
        memory = mailRoute;
    }
    return {direction: memory[0], memory: memory.slice(1)};
}

runRobot(VillageState.random(), randomRobot);

