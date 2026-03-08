const fs = require('fs');

// Data to append
const name = "Alice";
const email = "yry@gmail.com";
const cavity = 39;
const gum = 10;
const plaque = 10;
const braces = "yes";
const note = "I hate this."; 


// Format as CSV line
const newLine = `\n${name},${email},${cavity},${gum},${plaque},${braces},${note}`;

// Append to file
fs.appendFile('Dentist.csv', newLine, (err) => {
    if (err) {
        console.error('Error appending data:', err);
    } else {
        console.log('Data appended!');
    }
});