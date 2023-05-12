import chalk from "chalk";
// Get N from command-line arguments
const N = parseInt(process.argv[2]);

// Define function to check if a number is prime
function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// Initialize variables for progress bar
const progressBarWidth = 50;
let progress = 0;

// Define function to update progress bar
function updateProgressBar(percent) {
  const completed = Math.floor(percent * progressBarWidth);
  const remaining = progressBarWidth - completed;
  const bar = chalk.green('='.repeat(completed)) + chalk.grey('-'.repeat(remaining));
  const percentage = chalk.yellow(`${(percent * 100).toFixed(1)}%`);
  process.stdout.write(`\r${bar} ${percentage}`);
}

// Initialize variables for prime number calculation
const primes = [];
let count = 0;

// Calculate primes and update progress bar
for (let i = 2; count < N; i++) {
  if (isPrime(i)) {
    primes.push(i);
    count++;
  }
  progress = count / N;
  updateProgressBar(progress);
}

// Print results
console.log(`\n\nThe first ${N} prime numbers are: ${primes.join(', ')}`);
