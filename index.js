const {choose} = require('./util');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const questions = require('./questions')(rl);


(async () => {
  while (true) {
    const qProm = choose(questions);
    await qProm();
  }
})()
