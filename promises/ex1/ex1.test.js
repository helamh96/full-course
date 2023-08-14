const runTasks = require('./ex1');
const { performance } = require('perf_hooks');

jest.setTimeout(15700);

const taskFactorySample = (delay, resolve, val) => () =>
    new Promise((res, rej) => setTimeout(resolve ? res : rej, delay, val));

const tasks = [
    taskFactorySample(500, true, 1),
    taskFactorySample(1000, true, 2),
    taskFactorySample(5000, false, 'error'),
    taskFactorySample(2000, true, 4),
    taskFactorySample(1000, false, 'error'),
    taskFactorySample(1000, false, 'error'),
];

describe('runTasks', () => {
    test.skip('runs tasks with a pool size of 2', async () => {
        const poolSize = 2;

        const results = await runTasks(tasks, poolSize);

        expect(results).toEqual([
            { value: 1 },
            { value: 2 },
            { error: 'error' },
            { value: 4 },
            { error: 'error' },
            { error: 'error' },
        ]);
    });

    test.skip('Execution time of runBatches function', async () => {
        const tasks = [
            taskFactorySample(500, true, 1),
            taskFactorySample(1000, true, 2),
            taskFactorySample(1500, true, 3),
            taskFactorySample(2000, true, 4),
        ];
        const poolSize = 2;

        const startTime = performance.now();
        await runTasks(tasks, poolSize);
        const endTime = performance.now();

        const executionTime = endTime - startTime;

        console.log(`Execution time: ${executionTime} milliseconds`);

        const maxExpectedTime = 3500; // Maximum expected execution time in milliseconds
        expect(executionTime).toBeLessThan(maxExpectedTime);
    });
});
