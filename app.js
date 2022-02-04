// const EventEmmitter = require("events");
// // const fs = require("fs");
// const emmitter = new EventEmmitter();
// emmitter.on("a", (arg) => {
//   console.log(arg);
// });
// emmitter.emit("a", { id: 2233, url: "blog.com" });

const EventEmmitter = require("events");
const eventEmmitter = new EventEmmitter();
eventEmmitter.on("logging", (data) => console.log(data.message));

eventEmmitter.emit("logging", { message: "logging" });
// logging(data:message)
// raise handle
