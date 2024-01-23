import http from 'http';
import fs from 'fs';


const server = http.createServer((req, res) => {
    
    if(req.url === '/' && req.method === 'GET'){
        const filePath = './files/index.html';
        const readStream = fs.createReadStream(filePath);

        res.statusCode = 200;
        res.setHeader('Content-Type', 'hext/html');
        readStream.pipe(res)
    }
});
server.listen(5000, () => {
    console.log('Server is listening at PORT: 5000')
});