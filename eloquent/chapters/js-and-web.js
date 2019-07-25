// FINDING ELEMENTS

// let one = document.body.getElementsByTagName("p")[0];
// let two = document.body.getElementsByTagName("button")[0]
// document.body.insertBefore(one,two)


// CHANGING THE DOCUMENT

// function replaceImages(){
//     let images = document.body.getElementsByTagName("img");
//     for (let i = images.length - 1; i >=0; i--){
//         let image = images[i];
//         if (image.alt){
//             let text = document.createTextNode(image.alt);
//             image.parentNode.replaceChild(text, image);
//         }
//     }
// }


// CREATING NODES

// function elt(type, ...children){

    // node is first always 'footer' until a new function call, control jumps out and our nodes changes to the 'type' of the new fuction's call argument. its 'children' is evaluated as a string and appended to the node then the node is returned. control jumps out and back to the original function where node is 'footer' but then child has been evaluated to not be a string  (as is it the returned node from the last function call) but an element with a child appended already then appended to 'footer'. other child of children which is not a function call in the first function call arguement will just be appended to footer after text node have been created
//     let node = document.createElement(type); 
//     for (let child of children){
//         if (typeof child != "string") node.appendChild(child);
//         else node.appendChild(document.createTextNode(child));
//     }
//     return node;
// }

// document.getElementById("quote").appendChild(
//     elt("footer", "-", elt("strong", "Karl popper"), ", preface to the second edition of ", elt("em", "the open society and its Enemies"), ", 1950")
// );

// recursive functions should be sweet and very deep


// ATTRIBUTES
// let paras = document.body.getElementsByTagName('p');
// for (let para of Array.from(paras)){
//     if (para.getAttribute("data-classified") == "secret"){
//         para.remove()
//     }
// }


// LAYOUT
// let para = document.body.getElementsByTagName("p")[0];
// console.log("clientHeight:", para.clientHeight)
// console.log("offsetHeight:", para.offsetHeight)


// positioning

let cat = document.querySelector("img");
let angle = Math.PI / 2;
function animate(time, lastTime){
    if (lastTime != null){
        angle += (time - lastTime) * 0.001;
    }
    cat.style.top = (Math.sin(angle) * 20) + "px";
    cat.style.left = (Math.cos(angle) * 200) + "px";
    requestAnimationFrame(newTime => animate(newTime, time));
} 

requestAnimationFrame(animate);