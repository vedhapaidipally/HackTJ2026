const http = require('http');
const fs = require('fs');

const PORT = 3000;

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/submit') {
        let body = '';

        req.on('data', chunk => { body += chunk; });
        req.on('end', () => {
            const data = JSON.parse(body);
            const newLine = `\n${data.name},${data.email},${data.age},${data.height},${data.weight},${data.ssn},${data.sex},${data.gender},${data.ethnicity}`;

            fs.appendFile('data.csv', newLine, (err) => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error saving data');
                    console.error(err);
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.end('Data saved successfully!');
                }
            });
        });
    } else {
        // Serve the HTML file
        fs.readFile('Testing.html', (err, content) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error loading page');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content);
            }
        });
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
