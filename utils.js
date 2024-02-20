//define memory calculations

const os = require('os');

const totalMem = () => os.totalmem();
const bytesToMegabytes = () => os.totalmem() / (1000 ** 2);
const bytesToGigabytes = () => os.totalmem() / (1000 ** 3);

module.exports = {
  totalMem,
  bytesToMegabytes,
  bytesToGigabytes
};
