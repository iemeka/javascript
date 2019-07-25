// attaching a handler to the whole window
// window.addEventListener("click", () => {
//     console.log("you knocked?");
// })

// attaching a handler to a button node
// let button = document.querySelector("button");
// button.addEventListener("click", () => {
//     console.log("Button clicked.");
// });

// removing a handler
// let button = document.querySelector("button");
// function once(){
//     console.log("Done.");
//     button.removeEventListener("click", once);
// }
// button.addEventListener("click", once);

// event object - which mouse key was pressed
// let button = document.querySelector("button");
// button.addEventListener("mousedown", even => {
//     if (event.button == 0){
//         console.log("left button");
//     } else if (event.button == 1){
//         console.log("Middle button");
//     } else if (event.button == 2){
//         console.log("Right button");
//     }
// });


// propergation
// let para = document.querySelector("p");
// let button = document.querySelector("button");
// para.addEventListener("mousedown", () => {
//     console.log("Handler for paragraph.");
// });

// button.addEventListener("mousedown", event => {
//     console.log("Handler for button.");
//     if (event.button == 2) event.stopPropagation();
// });


// propergation - target
// document.body.addEventListener("click", event => {
//     if (event.target.nodeName == "BUTTON"){
//         console.log("clicked", event.target.textContent, event.target.nodeName)
//     }
// })


// key events
// window.addEventListener("keydown", event => {
//     if (event.key == "v"){
//         document.body.style.background = "blue";
//     }
// });

// window.addEventListener("keyup", event => {
//     if (event.key == "v") {
//         document.body.style.background = "yellow";
//     }
// });

// // press crt-space to continue
// window.addEventListener("keydown", event => {
//     if (event.key == " " && event.ctrlKey){
//         console.log("Continuing!")
//     }
// })


// mouse clicks
// window.addEventListener("click", event => {
//     let dot = document.createElement("div")
//     dot.className = "dot";
//     dot.style.left = (event.pageX - 4) + "px";
//     dot.style.top = (event.pageY - 4) + "px";
//     document.body.appendChild(dot)
// })


// mouse motion
// let lastX;
// let bar = document.querySelector("div");
// bar.addEventListener("mousedown", event => {
//     if (event.button == 0){
//         lastX = event.clientX;
//         window.addEventListener("mousemove", moved);
//         event.preventDefault();  // prevent the normal defautl actions - since mouse down and draging is selecting
//     }
// });

// function moved(event){
//     if (event.buttons == 0){
//         window.removeEventListener("mousemove", moved);
//     } else {
//         // this part runs everytime you drag the mouse after mousedown
//         // variable updates every time the mouse move
//         let dist = event.clientX - lastX; // positive dist increase with while negative decrease width
//         let newWidth = Math.max(10, bar.offsetWidth + dist);
//         bar.style.width = newWidth + "px";
//         lastX = event.clientX;
//     }
// }


// Touch Events
// function update(event){
//     for ( let dot; dot = document.querySelector("dot");){
//         dot.remove();
//     }
//     for (let i=0; i < event.touches.length; i++){
//         let {pageX, pageY} = event.touches[i]; //deconstruction -  so pageX and pageY can be defind with its value from the object touches and used as normal variables
//         let dot = document.createElement("dot");
//         // top and left is event coordinate (precisely where the click event occured minus 50  - to center mouse arrow in 'circle') in pixel in relation to the document
//         dot.style.left = (pageX - 50) + "px";
//         dot.style.top = (pageY - 50) + "px";
//         document.body.appendChild(dot);
//     }
// }
// window.addEventListener("touchstart", update);
// window.addEventListener("touchmove", update);
// window.addEventListener("touchend", update);


// scroll event  
// document.body.appendChild(document.createTextNode("supercalifragilisticexpialidocious ".repeat(500)));

// let bar = document.querySelector("#progress");
// window.addEventListener("scroll", () => {
//     // here max is the excess height (ie how much you need to scroll to get to the end of the document), what is making you scroll. without that extra height you dont have to scroll
//     let max = document.body.scrollHeight - innerHeight;
//     console.log(document.body.scrollHeight, innerHeight, max, pageXOffset, bar.style.width)
//     bar.style.width = `${(pageYOffset / max) * 100}%`; //real change happens here as a result of the percentage hence width of progress bar is relative to page width.
//     //  pageYOffset / max - tells us how much you have scrolled - a fraction - how much you just scrolled divided by 'total scroll or maximum scroll' gives the probabilty of scrolling to that point hence our width. 

// });


// focus events
// let help = document.querySelector("#help");
// let fields = document.querySelectorAll("input");
// for (let field of Array.from(fields)){
//     field.addEventListener("focus", event => {
//         let text = event.target.getAttribute("data-help");
//         help.textContent = text;
//     });
    
    
//     field.addEventListener("blur", event => {
//         help.textContent = "";
//     });
// }


// worker  - check #notes
// let squareWorker = new Worker("../exercise/squareworker.js");
// squareWorker.addEventListener("message", event => {
//     console.log("The worker responded:", event.data);
// });
// squareWorker.postMessage(10);
// squareWorker.postMessage(24);



// timeers
// let bombTimer = setTimeout(() => {
//     console.log("BOOM!");
// }, 500);

// if (Math.random() < 0.5) { // nice idea - 50% chance :)
//     console.log("Defused.");
//     clearTimeout(bombTimer)
// }

// let ticks = 0  //main tick
// let clock = setInterval(() => {
//     console.log("tick", ticks++);
//     if (ticks == 10){
//         clearInterval(clock);
//         console.log("stop.");
//     }
// },200);


// debouncing
// if an action is paused for upto 500ms run a function if waiting time after the action is not upto 500ms before the actions continues again or action is still going on - not paused,  the function should not run 
// let textarea = document.querySelector("textarea");
// let timeout;
// textarea.addEventListener("input", () => {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => console.log("Typed!"), 500);
// });


let scheduled = null;
window.addEventListener("mousemove", event => {
    if (!scheduled){
        setTimeout(() => {
            document.body.textContent = `Mouse at ${scheduled.pageX}, ${scheduled.pageY}`;
            scheduled = null;
        }, 250);
    }
    scheduled = event;
});