// my-first-async-io.js

// Import the 'fs' module
const fs = require('fs');

// Get the file path from command line arguments
const filePath = process.argv[2];

// Read the file asynchronously
fs.readFile(filePath, 'utf-8', (err, data) => {
    // Handle any errors
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    // Split the content by newline character and count the number of lines
    const numberOfLines = data.split('\n').length - 1;

    // Print the number of newlines to the console
    console.log(numberOfLines);
});
