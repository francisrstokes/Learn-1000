const inquirer = require('inquirer');
module.exports = {
  choose: (a) => a[Math.floor(Math.random() * a.length)],
  capitalize: (s) => s.slice(0, 1).toUpperCase() + s.slice(1, s.length),
  prompt: (message, choices) =>
    inquirer.prompt([{
      choices,
      message,
      type: 'list',
      name: 'res'
    }]).then(answers => answers.res),
  input: (message) =>
    inquirer.prompt([{
      type: 'input',
      message: message,
      name: 'res'
    }]).then(answers => answers.res)
};
