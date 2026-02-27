#!/usr/bin/env node

import * as readline from 'node:readline/promises';
import {stdin, stdout} from 'node:process';
import chalk from 'chalk';

import { createFolder,createFile,writeToFile, deleteFile, deleteFolder, listItems } from './file.js';


const rl = readline.createInterface({
    input: stdin,
    output: stdout,
});



async function menu() {
    console.log(chalk.blue.bold('\nFile Manager'));
    const options = [
        'Create Folder',
        'Create File',
        'Write to file',
        'Delete file',
        'delete folder',
        'list items',
        'Exit'
    ];
    options.forEach((opt, i) => console.log(chalk.yellow(`${i + 1}. `) + chalk.white(`${options[i]}`)));

    const answer = await rl.question(chalk.cyan('\Select Input'));
    switch(answer) {
        case '1':
            const FolderPath = await rl.question(chalk.cyan('\nFolder Path: '));
            await createFolder(FolderPath);
            console.log(chalk.green('Folder created'));
            break;
        case '2':
            const filepath = await rl.question(chalk.cyan('\nFile Path: '));
            const content = await rl.question(chalk.cyan('Give content lala: '));
            await createFile(filepath, content);
            console.log(chalk.green('File has been created!'));
            break;
        case '3':
            const appfilepath = await rl.question(chalk.cyan('\nFile Path: '));
            const appcontent = await rl.question(chalk.cyan('Give content lala: '));
            await writeToFile(appfilepath, appcontent);
            console.log(chalk.green('File has been updated!'));
            break;
        case '4':
            const deletefilepath = await rl.question(chalk.cyan('\nGive path to file that needs to be deleted: '));
            await deleteFile(deletefilepath);
            console.log(chalk.red('File has been deleted'));
            break;
        case '5':
            const folderpath = await rl.question(chalk.cyan('\nGive path to folder to be deleted: '));
            await deleteFolder(folderpath);
            console.log(chalk.red('Folder has been deleted'));
            break;
        case '6':
            const listpath = await rl.question(chalk.cyan('\nFolder path : '));
            const items = await listItems(listpath);
             
            console.log(chalk.blue('\nContents: '));
            items.forEach(item => {
                console.log(`${chalk.yellow(item.name)}`);
            });
            break;
        case '7':
            rl.close();
            return;
        default:
            console.log('invalid option');

    }

    await rl.question(chalk.gray('\n Press ENTER to continue'));
    menu();
}
menu();
