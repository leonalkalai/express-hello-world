const os = require('os');

const serverMachine = () => os.machine();
const osVersion = () => os.version();
const osUptime = () => os.uptime();
const userName = () => os.userInfo().username;
const osType = () => os.type();
const osPlatform = () => os.platform();
const serverCpus = () => os.cpus().map( ( cpu,index) => cpu );

module.exports = {
 serverMachine,
 osVersion,
 osUptime,
 userName,
 osType,
 osPlatform,
 serverCpus
};
