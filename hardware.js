const os = require('os');

const serverMachine = () => os.machine();
const osVersion = () => os.version();
const osUptime = () => os.uptime();
const userInfo = () => os.userInfo().username;
const osType = () => os.type();
const osPlatform = () => os.platform();
const serverCpus = () => os.cpus();

module.exports = {
 serverMachine,
 osVersion,
 osUptime,
 userInfo,
 osType,
 osPlatform,
 serverCpus
};
