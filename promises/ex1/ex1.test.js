const runTasks = require("./ex1")

jest.setTimeout(15700);

const taskFactorySample = (delay, resolve, val) => () => {return new Promise((res, rej) => setTimeout(resolve ? res : rej, delay, val))};

const tasks = [
    taskFactorySample(500, true, 1),
    taskFactorySample(1000, true, 2),
    taskFactorySample(5000, false, 'error'),
    taskFactorySample(2000, true, 4),
    taskFactorySample(1000, false, 'error'),
    taskFactorySample(1000, false, 'error')
];

test('Basic test', () => {
    let pool_size = 2;
    return runTasks(tasks, pool_size)
        .then(results => {
            expect(results).toEqual([
                { value: 1 },
                { value: 2 },
                { value: 4 },
                { error: 'error' },
                { error: 'error' },
                { error: 'error' }
            ])
        })
});