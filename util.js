function displayMemoryUsage() {
  const mem = process.memoryUsage();
  const used = stringifyMemory(mem.heapUsed);
  const total = stringifyMemory(mem.heapTotal);
  console.log(`Used ${used} - Total ${total}`);
}

function stringifyMemory(value) {
  const mbValue = Math.round((value / 1024 / 1024) * 100) / 100;
  return `${mbValue} MB`;
}

module.exports = {
  displayMemoryUsage,
};
