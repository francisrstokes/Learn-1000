const inquirer = require('inquirer');
const questions = require('../questions');
const {
  ENDLESS,
  QUESTION_SET,
  CHALLENGE_1000,
  QUESTIONS_PER_SET,
  NUMBER_SETS,
  BACK,
  TITLE
} = require('./constants');
const {prompt} = require('../util');

const mainMenuChoices = [
  {name: 'Question Sets', value: QUESTION_SET},
  {name: 'Endless Mode', value: ENDLESS},
  {name: '1000 Word Challenge', value: CHALLENGE_1000}
];

const setChoices = Array(NUMBER_SETS).fill(0).map((_, i) => {
  const qIndex = i * QUESTIONS_PER_SET;
  const qEndIndex = qIndex + QUESTIONS_PER_SET;
  return {
    name: `Set ${i+1}: Words ${qIndex+ 1} to ${qEndIndex}`,
    value: [qIndex, qEndIndex]
  };
});

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
    case CHALLENGE_1000: {
      await questions.set([0, 1000]);
      break;
    }
  }
};
