// my-first-io.js

// Import the 'fs' module
const fs = require('fs');

// Read the file synchronously and store its contents in a buffer
const buffer = fs.readFileSync(process.argv[2]);

// Convert the buffer to a string
const content = buffer.toString();

// Split the content by newline character and count the number of lines
const numberOfLines = content.split('\n').length - 1;

// Print the number of newlines to the console
console.log(numberOfLines);
