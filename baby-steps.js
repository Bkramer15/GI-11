// baby-steps.js

// Get command-line arguments excluding 'node' and the script path
const args = process.argv.slice(2);
console.log(args[0],+args[0],typeof args[0], typeof +args[0]);
// Initialize sum
let sum = 0;

// Loop through the arguments, convert them to numbers, and sum them up
for (let i = 0; i < args.length; i++) {
    // Convert argument to number using unary plus (+)
    sum += +args[i];
}

// Print the sum to the console
console.log(sum);
