// TODO: Improve the code below to show the memory in MBs or GBs

/*
1 gigabyte = 1000000000 bytes (1000^3)

math method of 3 
1000^3 bytes  ->  1 gigabyte
os.totalmem() ->  X;

X *  1000 ** 3 bytes = os.totalmem()  *  1gigabyte
X = os.totalmem()  *  (1  / 1000 ** 3 )
X = os.totalmem()  *  (1000 ** 3 );

*/

const os = require('os');

//os.freemem(); 

const { displayTotalMemory } = require('./app.js');

const totalMem = () => os.totalmem();
const bytesToMegabytes = () => os.totalmem() / (1000 ** 2);
// Google for how to convert bytes into MBs or GBs
const bytesToGigabytes = () => os.totalmem() / (1000 ** 3);

const displayMemoryBytes = displayTotalMemory(totalMem);
const displayMemoryMegaBytes = displayTotalMemory(bytesToMegabytes);
const displayMemoryGigaBytes = displayTotalMemory(bytesToGigabytes);
  
module.exports = {
  displayMemoryBytes,
  displayMemoryMegaBytes,
  displayMemoryGigaBytes
}
