// TODO: Improve the code below to show the memory in MBs or GBs

const os = require('os');

os.totalmem();
os.freemem(); 

const totalmem = () => return `Total Memory: ${os.totalmem()}`;
// Google for how to convert bytes into MBs or GBs

module.exports = {
  totalmem
}
