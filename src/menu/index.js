const inquirer = require('inquirer');
const questions = require('../questions');
const {
  ENDLESS,
  QUESTION_SET,
  QUESTIONS_PER_SET,
  NUMBER_SETS,
  BACK,
  TITLE
} = require('./constants');
const prompt = require('./prompt');

const mainMenuChoices = [
  {name: 'Endless mode', value: ENDLESS},
  {name: 'Question set', value: QUESTION_SET}
];

const setChoices = Array(NUMBER_SETS).fill(0).map((_, i) => ({
  name: `Set ${i+1}: Words ${i * QUESTIONS_PER_SET + 1} to ${i * QUESTIONS_PER_SET + QUESTIONS_PER_SET}`,
  value: [i, QUESTIONS_PER_SET]
}));

module.exports = async () => {
  const choice = await prompt(TITLE, mainMenuChoices);
  switch (choice) {
    case ENDLESS: {
      await questions.endless();
      break;
    }
    case QUESTION_SET: {
      const setRange = await prompt(`Choose a question set`, [...setChoices, BACK]);
      if (setRange !== BACK) {
        await questions.set(setRange);
      }
      break;
    }
  }
}