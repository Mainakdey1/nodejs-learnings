// import * as fs from 'node:fs';
import * as fs from 'node:fs/promises';
import path from 'node:path';
async function readFile(pathname) {
    const data = await fs.readFile(pathname, 'utf-8');
    console.log('data', data);
}

export async function listItems(listpath = './') {
    const items = await fs.readdir(listpath, { withFileTypes: true});
    return items.map(item => {
        return {
            name: item.name,
            type: item.isDirectory()? 'folder' : 'file',
            path: path.join(import.meta.dirname, item.name),
        }
    })
}
listItems();
export async function deleteFolder(folderpath) {
    await fs.rm(folderpath, {recursive: true});
}
export async function deleteFile(pathname) {
    await fs.unlink(pathname);
}
export async function createFolder(foldername) {
    await fs.mkdir(foldername, {recursive: true});
}

export async function writeToFile(pathname, content = '') {
    await fs.appendFile(pathname, content);
}
export async function createFile(pathname, content = '') {
    await fs.writeFile(pathname, content);
}
async function getFileInfo(pathname) {
    const stats = await fs.stat(pathname);
    return {
        size: `${(stats.size / 1024).toFixed(2)} KB`,
        created: stats.birthtime.toLocaleString(),
        modified: stats.mtime.toLocaleString(),
    };
}
// readFile('./hello.txt');
// deleteFile('./hello.txt');
// createFile('./hello.txt', 'Nodejs is fun asfffffff.\n');
// getFileInfo('./hello.txt').then((data) => {
//     console.log('data', data);
// });

// createFolder('./contents/images/logo');
// deleteFolder('./contents/images/logo');
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