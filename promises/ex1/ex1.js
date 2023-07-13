const runTasks = async (tasks, poolSize) => {
  const results = [];
  const runningTasks = [];

  for (const task of tasks) {
    const runTask = async () => {
      try {
        const result = await task();
        results.push({ value: result });
      } catch (error) {
        results.push({ error });
      }
    };

    runningTasks.push(runTask());

    if (runningTasks.length >= poolSize) {
      await Promise.race(runningTasks);
      runningTasks.splice(runningTasks.indexOf(runTask), 1);
    }
  }

  await Promise.all(runningTasks);
  return results;
};

module.exports = runTasks;