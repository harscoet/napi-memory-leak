const { test } = require('./index');
const { displayMemoryUsage } = require('./util');

let i = 0;

test(() => {
  if (i % 100000 === 0) {
    displayMemoryUsage();
  }
  i++;
});
