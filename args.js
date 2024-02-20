const { argv } = require('node:process');

const exportArgs = () => argv.map( (arg,index) => `<p> ${index}: ${arg} </p>`).join('');

module.exports = {
 exportArgs
}
