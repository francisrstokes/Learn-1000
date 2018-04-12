# Learn the most common 1000 words in Dutch!

According to fluentu.com, you can be conversationally proficient in a language when you know between 1000 and 3000 words.
The aim of this application is to make it easier to learn those most common 1000 words in Dutch by having you translate words randomly from
English to Dutch or Dutch to English in a flashcard style.

```
? 📖  How do you want to learn? 📖 1000 Word Challenge
? (1) Score: 0/1000 (0.0%)
[English -> Dutch] as als
✅  Correct!
"as" in Dutch is "als"

? (2) Score: 1/1000 (0.1%)
[Dutch -> English] ik i
✅  Correct!
"ik" in English is "i"

? (3) Score: 2/1000 (0.2%)
[Dutch -> English] zijn be
✅  Correct!
"zijn" in English can be: "his", "are", "be"

? (4) Score: 3/1000 (0.3%)
[Dutch -> English] dat that
✅  Correct!
"dat" in English is "that"

? (5) Score: 4/1000 (0.4%)
[Dutch -> English] hij
...
```

## Modes

### Question Sets - Master groups of words

With question sets, the 1000 words are broken into groups of 50.

### Endless Mode

Endless mode chooses from the word list randomly and keeps track of how many you got correct.

### 1000 Word Challenge

All 1000 words, in order.

## Install and run

```bash
git clone https://github.com/francisrstokes/Learn-1000.git
cd Learn-1000
node src
```

## Dependencies

- \>= Node 7.6


## Adapting for other languages

This project can easily be made to work with other language pairs. In the `data` folder there is a json file with an array of 1000 objects, each with an `english` and a `dutch` key.
The functions that generate questions can take `fromLanguage` and `toLanguage` parameters and can thus use any data structures that conform to this format.
