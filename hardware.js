const os = require('os');

const serverMachine = () => os.machine();
const osVersion = () => os.version();
const osUptime = () => os.uptime();
const userName = () => os.userInfo().username;
const osType = () => os.type();
const osPlatform = () => os.platform();

const serverCpus = () => os.cpus().map((cpu, index) => ({
    index: index,
    model: cpu.model,
    speed: cpu.speed,
    times: {
        user: cpu.times.user,
        nice: cpu.times.nice,
        sys: cpu.times.sys,
        idle: cpu.times.idle,
        irq: cpu.times.irq
    }
}));

module.exports = {
 serverMachine,
 osVersion,
 osUptime,
 userName,
 osType,
 osPlatform,
 serverCpus
};
