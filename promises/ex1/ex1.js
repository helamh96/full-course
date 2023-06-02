const runTasks = (tasks, pool_size) => {
  return new Promise((resolve) => {
    const results = [];
    let runningTasks = 0;
    let currentIndex = 0;

    const runNextTask = () => {
      if (currentIndex === tasks.length) {
        return;
      }

      const currentTask = tasks[currentIndex];
      currentIndex++;

      runningTasks++;

      const taskPromise = currentTask();

      taskPromise
        .then((value) => {
          results.push({ value });
        })
        .catch((error) => {
          results.push({ error });
        })
        .finally(() => {
          runningTasks--;

          if (runningTasks === 0 && currentIndex === tasks.length) {
            resolve(results);
          } else {
            runNextTask();
          }
        });
    };

    for (let i = 0; i < pool_size; i++) {
      runNextTask();
    }
  });
};

module.exports = runTasks;