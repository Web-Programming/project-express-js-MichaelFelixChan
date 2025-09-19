// app.js
const http = require('http');
// ini untuk membuat server
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("Hello, Felix!\n");
});
// ini untuk membuka portal server
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
// cara menjalankan yaitu : node app.js
// jangan matikan perintah runningnya selama web masih berjalan
// cara matikan perintah yaitu dengan cara ctrl+c saja