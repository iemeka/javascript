// console.log(encodeURIComponent("Yes?"))
// console.log(decodeURIComponent("Yes%3f"))

// focus
// document.querySelector("input").focus();
// console.log(document.activeElement.tagName);
// document.querySelector("input").blur();
// console.log(document.activeElement.tagName);


// form as a whole
// let form = document.querySelector("form");
// console.log(form.elements[1].type);
// console.log(form.elements.password.type);
// console.log(form.elements.name.form == form);

//  prevent defaul behaviour
// let form = document.querySelector("form");
// form.addEventListener("submit", event => {
//     console.log("Saving value", form.elements.value.value);
//     event.preventDefault();
// });



// text fields
// replace selection
// let textarea = document.querySelector("textarea");
// textarea.addEventListener("keydown", event => {
//     if (event.keyCode == 113){ //code for F2
//         replaceSelection(textarea, "Khasekhemwy");
//         event.preventDefault();
//     }
// });

// function replaceSelection(field, word){
//     let from = field.selectionStart, to = field.selectionEnd; 
//     // display (unselected) from 0 to start of selection excluding the first selected letter (slice(start,end) idea ), add the word, then add the last part of the unselected text (the index value of the text after last selected text or after the cursor)
//     field.value = field.value.slice(0, from) + word + field.value.slice(to);
//     // where to place the cursor - same value selects nothing an places the cursor in a particular place. - differnt value selects from 'start' to 'end'
//     field.selectionStart = 4; // cursor is after the fourth element
//     field.selectionEnd = 4;
// }

// text field - input event 
// let text = document.querySelector("input");
// let output = document.querySelector("#length");
// text.addEventListener("input", () => {
//     output.textContent = text.value.length;
// })

// checkbox
// let checkbox = document.querySelector("#purple");
// checkbox.addEventListener("change", () => {
//     document.body.style.background = checkbox.checked ? "pink" : "";
// });

// radio button
// let buttons = document.querySelectorAll("[name=color]");
// for (let button of Array.from(buttons)){
//     button.addEventListener("change", () => {
//         document.body.style.background = button.value;
//     })
// }

// select fields
// let select = document.querySelector("select");
// let output = document.querySelector("#output");
// select.addEventListener("change", () => {
//     let number = 0;
//     for (let option of Array.from(select.options)){
//         if (option.selected){
//             number += Number(option.value);
//         }
//     }
//     output.textContent = number;
// });


// file fields
// 1
// let input = document.querySelector("input");
// input.addEventListener("change", () => {
//     if (input.files.length > 0){
//         let file = input.files[0];
//         console.log("You chose", file.name);
//         if (file.type) console.log("it has type", file.type);
//     }
// });

// read a file content
// let input = document.querySelector("input");
// input.addEventListener("change", () => {
//     for (let file of Array.from(input.files)){
//         let reader = new FileReader();
//         reader.addEventListener("load", () => {
//             console.log("file", file.name, "starts with", reader.result.slice(0,20));
//         });
//         reader.readAsText(file);
//     }
// });

// file error event - when reading file fails
// function readFileText(file){
//     return new Promise((resolve, reject) => {
//         let reader = new FileReader();
//         reader.addEventListener(
//             "load", () => resolve(reader.result));
//         reader.addEventListener(
//             "error", () => reject(reader.error));
//         reader.readAsText(file);
//     })
// }


// storing data client-side
// localStorage.setItem("username","marijn");
// console.log(localStorage.getItem("username"));
// localStorage.removeItem("username")

// not understood----
// let list = document.querySelector("select");
// let note = document.querySelector("textarea");

// let state;
// function setState(newState){
//     list.textContent = "";
//     for (let name of Object.keys(newState.notes)){
//         let option = document.createElement("option");
//         option.textContent = name;
//         if (newState.selected == name) option.selected = true;
//         list.appendChild(option);
//     }
//     note.value = newState.notes[newState.selected];

//     localStorage.setItem("Notes", JSON.stringify(newState));
//     state = newState;
// }

// setState(JSON.parse(localStorage.getItem("Notes")) || {
//     notes: {"shopping list": "carrots\nRaisins"},
//     selected: "shopping list"
// });

// list.addEventListener("change", () => {
//     setState({notes: state.notes, selected:list.value });
// });

// note.addEventListener("change", () => {
//     setState({
//         notes: Object.assign({}, state.notes, {[state.selected]: note.value}), selected:state.selected
//     });
// });

// document.querySelector("button").addEventListener("click", () => {
//     let name = prompt("Note name");
//     if (name) setState({
//         notes: Object.assign({}, state.notes, {[name]: ""}),
//         selected: name
//     });
// });
