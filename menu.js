const inquirer = require('inquirer');
const questions = require('./questions');

const ENDLESS = 'endless';
const QUESTION_SET = 'questionSet';
const QUESTIONS_PER_SET = 50;
const NUMBER_SETS = 1000 / QUESTIONS_PER_SET;
const BACK = '[BACK]';

const choices = [
  {name: 'Endless mode', value: ENDLESS},
  {name: 'Question set', value: QUESTION_SET}
];

const setChoices = Array(NUMBER_SETS).fill(0).map((_, i) => ({
  name: `Set ${i+1}: Words ${i * QUESTIONS_PER_SET + 1} to ${i * QUESTIONS_PER_SET + QUESTIONS_PER_SET}`,
  value: [i, QUESTIONS_PER_SET]
}));

const TITLE = `📖  How do you want to learn? 📖`;

module.exports = async () => {
  const choice = await inquirer.prompt([{
    choices,
    type: 'list',
    message: TITLE,
    name: 'res'
  }]).then(answers => answers.res);

  if (choice === ENDLESS) {
    await questions.endless();
  } else if (choice === QUESTION_SET) {
    const setRange = await inquirer.prompt([{
      choices: [...setChoices, BACK],
      type: 'list',
      message: `Choose a question set`,
      name: 'res'
    }]).then(answers => answers.res).catch(console.log);

    if (setRange !== BACK) {
      await questions.set(setRange);
    }
  }
}