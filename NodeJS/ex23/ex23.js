import chalk from "chalk";
const N = parseInt(process.argv[2]);

function updateProgressBar(percent, progressBarWidth) {
  const completed = Math.floor(percent * progressBarWidth);
  const remaining = progressBarWidth - completed;
  const bar = chalk.green('='.repeat(completed)) + chalk.grey('-'.repeat(remaining));
  const percentage = chalk.yellow(`${(percent * 100).toFixed(1)}%`);
  process.stdout.write(`\r${bar} ${percentage}`);
}

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

const progressBarWidth = 50;
let progress = 0;

const primes = [];
let count = 0;

for (let i = 2; count < N; i++) {
  if (isPrime(i)) {
    primes.push(i);
    count++;
  }
  progress = count / N;
  updateProgressBar(progress, progressBarWidth);
}

console.log(`\n\nThe first ${N} prime numbers are: ${primes.join(', ')}`);