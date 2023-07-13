const runTasks = require("./ex1")

jest.setTimeout(15700);

const taskFactorySample = (delay, resolve, val) => () =>
  new Promise((res, rej) => setTimeout(resolve ? res : rej, delay, val));

describe('runTasks', () => {
  test.skip('runs tasks with a pool size of 2', async () => {
    const tasks = [
      taskFactorySample(500, true, 1),
      taskFactorySample(1000, true, 2),
      taskFactorySample(5000, false, 'error'),
      taskFactorySample(2000, true, 4),
      taskFactorySample(1000, false, 'error'),
      taskFactorySample(1000, false, 'error'),
    ];
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

});
