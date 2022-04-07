/* Step 1: npm install express */
/* Step 2: npm install nodemon as starting the server again and again sucks */

const express = require("express");

//creating a server with express
const port = 8000;
const server = express();

const middleware = (req, res, next) => {
	console.log("I'm a middleware");
	next();
};
const middleware2 = (req, res, next) => {
	console.log("I'm a middleware 2");
	next();
};
server.use(middleware);
server.get("/", (request, response) => {
	response.send("hello worlds");
});
// when we want to execute middleware at some particular route
server.get("/user", middleware2, (req, res) => {
	res.send({ userName: "user646" });
});
server.listen(port, () => {
	console.log("server is running at port:", port);
});

// middlewares ::::
//it is a function which will be executed before any route gets executed or when we want something to execute before routes gets executed
//takes 3 params req, res, next
