import {createServer} from 'node:http';
import * as fs from 'node:fs'

const server = createServer(async (req, res) => {
    console.log('req', req);
    if (req.url === '/') {
        res.writeHead(200, {'content-type': 'text/html'});
        // const data = await fs.readFile('./index.html');
        const datastream = fs.createReadStream('./index.html');
        datastream.pipe(res)
        res.end(data);

    } else if (req.url === '/about') {
        res.writeHead(200, {'content-type': 'text/html'});
        res.end('<h1>Hello this is your about page</h1>');
    } else if (req.url === '/expenses') {
        if (req.method === 'POST') {
            //read data from req, store it in json database
            let buff = '';
            req.on('data', (chunk) => {
                console.log(chunk);
                buff = buff + data.toString();

            });
        } else if (req.method === 'GET') {
            //return data to client 
        }
    }

});

server.listen(3000, () => {
    console.log('server is running port 3000');
});