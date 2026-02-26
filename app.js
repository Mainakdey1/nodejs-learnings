import os from 'node:os';


const factor = 1024 * 1024
console.log('CPUS', os.cpus().length);
console.log('cpu mem', os.totalmem() / factor, os.freemem() / factor);  
