const words = require('./dutch-english');
const {choose} = require('./util');

module.exports = rl => {
  const questionPromise = (q) =>
    new Promise(resolve => rl.question(q, resolve))

  const englishToDutch = async () => {
    const pair = choose(words);
    const qWord = pair.english;
    const aWord = pair.dutch;

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
    const pair = choose(words);
    const qWord = pair.dutch;
    const aWord = pair.english;

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
