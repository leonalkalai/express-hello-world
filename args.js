const { argv } = require('node:process');

const exportArgs = () => argv.map( (val, index) => `${index}: ${val}` );

module.exports = {
 exportArgs
}
