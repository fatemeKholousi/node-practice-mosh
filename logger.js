const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(msg) {
    const see = { see: "no", name: "t-ara" };

    console.log(msg);

    this.emit("messageLogged", see);
  }
}
module.exports = Logger;
