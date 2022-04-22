const bcrypt = require('bcrypt')

//1234 =>abcd
//hash each time is different to not to hacked
async function run() {
  const salt = await bcrypt.genSalt(55)
  console.log(salt)
}

run()
