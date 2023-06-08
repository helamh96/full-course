const chalk = require("chalk");
const { updateProgressBar } = require("./barFunction");
const { isPrime } = require("./isPrime")

test("displays progress bar and percentage 50%", () => {
    const percent = 0.5;
    const progressBarWidth = 50;
    const expectedBar = chalk.green("=".repeat(25)) + chalk.grey("-".repeat(25));
    const expectedPercentage = chalk.yellow("50.0%");
    const result = updateProgressBar(percent, progressBarWidth);
    expect(result).toBe(`\r${expectedBar} ${expectedPercentage}`);
});

test("displays progress bar and percentage 0%", () => {
    const percent = 0;
    const progressBarWidth = 50;
    const expectedBar = chalk.green("=".repeat(0)) + chalk.grey("-".repeat(50));
    const expectedPercentage = chalk.yellow("0.0%");
    const result = updateProgressBar(percent, progressBarWidth);
    expect(result).toBe(`\r${expectedBar} ${expectedPercentage}`);
});

test("displays progress bar and percentage 100%", () => {
    const percent = 1;
    const progressBarWidth = 50;
    const expectedBar = chalk.green("=".repeat(50));
    const expectedPercentage = chalk.yellow("100.0%");
    const result = updateProgressBar(percent, progressBarWidth);
    expect(result).toBe(`\r${expectedBar} ${expectedPercentage}`);
});

test("returns true for prime numbers", () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(13)).toBe(true);
    expect(isPrime(17)).toBe(true);
});

test("returns false for non-prime numbers", () => {
    expect(isPrime(4)).toBe(false);
    expect(isPrime(10)).toBe(false);
    expect(isPrime(15)).toBe(false);
});

test("returns false for non-integer numbers", () => {
    expect(isPrime(4.5)).toBe(false);
    expect(isPrime(8.2)).toBe(false);
    expect(isPrime(15.9)).toBe(false);
});

test("returns false for 0 and 1", () => {
    expect(isPrime(0)).toBe(false);
    expect(isPrime(1)).toBe(false);
});