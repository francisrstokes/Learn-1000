module.exports = {
  choose: (a) => a[Math.floor(Math.random() * a.length)],
  capitalize: (s) => s.slice(0, 1).toUpperCase() + s.slice(1, s.length)
};
