const Logger = require("./logger");
const EventEmitter = require("events");

const logger = new Logger();
logger.on("messageLogged", (arg) => {
  console.log("arg" + arg);
});

logger.log("payam");
