// import * as fs from 'node:fs';
import * as fs from 'node:fs/promises';


async function createFolder(foldername) {
    await fs.mkdir(foldername, {recursive: true});
}

async function createFile(filename, content = '') {
    await fs.writeFile(pathname, content);
}

createFolder('./contents/images/logo');
// async function createFile(pathname){
//     try {
//     await fs.writeFile(pathname, 'hello nodejs\n');
//     await fs.appendFile(pathname, 'more shit written but no race condition');
//     console.log('File has been written');
//     } catch (err) {
//         console.log('error', err);
//     }
// }

// createFile('./hello.txt');


// function createFile(pathname) {
//     // fs.writeFileSync(pathname, "yaha kuch toh jhol hai");
//     //Async
//     //Error first callback

//     // fs.writeFile(pathname, 'hello this shi is async af.\n', (err) => {
//     //     if (err){
//     //         console.log('something went wrong');
//     //         return; 
//     //     }
//     //     fs.appendFile(pathname, 'MOre shi has been written BUT this is not in race condition\n', (err) => {
//     //         if (err) {
//     //             console.log('something has gone wrong');
//     //             return;
//     //         }
//     //     })
//     //     console.log('file has been created');
//     // })
//     // console.log("File has been written to");
// }

// createFile('./hello.txt')