const fs = require('fs');

// Data to append
const name = "Alice";
const email = "yry@gmail.com";
const age = 39;
const height = 310;
const weight = 93;
const ssn = 1234;
const sex = "Male"; 
const gender = "he/him";
const ethnicity = "Huh";

// Format as CSV line
const newLine = `\n${name},${email},${age},${height},${weight},${ssn},${sex},${gender},${ethnicity}`;

// Append to file
fs.appendFile('data.csv', newLine, (err) => {
    if (err) {
        console.error('Error appending data:', err);
    } else {
        console.log('Data appended!');
    }
});
