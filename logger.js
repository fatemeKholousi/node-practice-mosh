const url = "http:/mylogger.io/log";

function log(msg) {
  console.log(msg);
}

module.exports.log = log;
console.log(module);
