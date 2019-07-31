// modules
// const {reverse} = require("./reverse");
// let argument = process.argv[2];

// console.log(reverse(argument))

// a simple server
// const {createServer} = require("http");
// let server = createServer((request, response) => {
//     response.writeHead(200, {"Content-Type": "text/html"});
//     response.write(`
//     <h1>Hello!</h1>
//     <p>You asked for <code> ${request.url}</p>`);
//     response.end();
// });
// server.listen(8000);
// console.log("Listening! (port 8000)");


// couldnt get these to work

// server that reads requests bodies and streams them back to the client as all-uppercase text
// const {createServer} = require("http");
// createServer((request, response) => {
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.on("data", chunk => response.write(chunk.toString().toUpperCase()));
//     response.on("end", () => response.end());
// }).listen(8000);

// const {request} =require("http");
// request({
//     hostname: "localhost",
//     port: 8000,
//     method: "POST"
// }, response => {
//     response.on("data", chunk => ProcessingInstruction.stdout.write(chunk.toString()));
// }).end("Hello server");

