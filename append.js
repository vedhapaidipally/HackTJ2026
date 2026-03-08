const fs = require('fs');

// Data to append
const name = "Alice";
const email = "yry@gmail.com";
const age = 39;

// Format as CSV line
const newLine = `\n${name},${email},${age}`;

// Append to file
fs.appendFile('data.csv', newLine, (err) => {
    if (err) {
        console.error('Error appending data:', err);
    } else {
        console.log('Data appended!');
    }
});
