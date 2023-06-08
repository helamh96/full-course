const chalk = require("chalk");

function updateProgressBar(percent, progressBarWidth) {
    const completed = Math.floor(percent * progressBarWidth);
    const remaining = progressBarWidth - completed;
    const bar = chalk.green('='.repeat(completed)) + chalk.grey('-'.repeat(remaining));
    const percentage = chalk.yellow(`${(percent * 100).toFixed(1)}%`);
    return `\r${bar} ${percentage}`
}

module.exports = {updateProgressBar}