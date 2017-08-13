const io = require("socket.io-client");
const socket = io.connect("http://35.184.116.31:41838");
const name = "echotest"

socket.on("connect",function() {
    socket.emit("declare", {name});
});

socket.on("ready",function() {
    console.log("I was accepted!");
});

socket.on("not_allowed", function() {
    console.log("I was not allowed");
});

socket.on("message", function(words) {
    console.log(words);
    socket.emit("message", words.join(" "));
});