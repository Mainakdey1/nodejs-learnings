import os from "node:os";
import chalk from "chalk";


const factor = 1024 * 1024;
function monitor() {
    const oldCpus = os.cpus();

    setTimeout(() => {
        const newCpus = os.cpus();
        const usage = newCpus.map((cpu, i) => {
            return {
                core:i, 
                usage: calculateCPU(oldCpus[i], newCpus[i]) + "%",
            };
        });
    console.clear();
    console.log(chalk.bgMagenta(`=======System Stats=======`));
    console.table(usage);
    console.log(
        `Memory used: ${((os.totalmem - os.freemem) / factor).toFixed(0)} / ${((os.totalmem) / factor).toFixed(0)} `
    );
    }, 1000)

}

function calculateCPU(oldCpus, newCpus) {
    const oldTotal = Object.values(oldCpus.times).reduce((a, b) => a + b);
    const newTotal = Object.values(newCpus.times).reduce((a, b) => a + b);
    
    const idle = newCpus.times.idle - oldCpus.times.idle;
    const total = newTotal - oldTotal;
    const used = total - idle;
    
    return ((100 * used) / total).toFixed(1);

}

setInterval(monitor, 1000)