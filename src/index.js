const express = require("express");
const http = require("http");

// Middlewares 
const bodyParser = require("body-parser");
const morgan = require("morgan");

const app = express();

app.use(morgan("combined"));
app.use(bodyParser.json({ type: "*/*" }));

const port = process.env.PORT || 5050;
const server = http.createServer(app);
server.listen(port);
console.log("\x1b[32mServer is listening on:\x1b[0m", `\x1b[34m${port}\x1b[0m`);
