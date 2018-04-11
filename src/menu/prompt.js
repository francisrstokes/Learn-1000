const inquirer = require('inquirer');

module.exports = (message, choices) =>
  inquirer.prompt([{
    choices,
    message,
    type: 'list',
    name: 'res'
  }]).then(answers => answers.res);
