const removeAccents = require('remove-accents');
const words = require('./dutch-english').map(pair => pair.map(removeAccents));
const {choose} = require('./util');

module.exports = rl => {
  const questionPromise = (q) =>
    new Promise(resolve => rl.question(q, resolve))

  const englishToDutch = async () => {
    const [aWord, qWord] = choose(words);
    const question = `[English -> Dutch] ${qWord}\n`;
    const res = await questionPromise(question);

    if (res.trim() === aWord) {
      console.log(`Correct! ✅`);
      return true;
    } else {
      console.log(`Incorrect! ❌ ${qWord} in Dutch is ${aWord}`);
      return false;
    }
  };

  const dutchToEnglish = async () => {
    const [qWord, aWord] = choose(words);
    const question = `[Dutch -> English] ${qWord}\n`;
    const res = await questionPromise(question);

    if (res.trim() === aWord) {
      console.log(`Correct! ✅`);
      return true;
    } else {
      console.log(`Incorrect! ❌ ${qWord} in English is ${aWord}`);
      return false;
    }
  };

  return [
    englishToDutch,
    dutchToEnglish
  ];
};
