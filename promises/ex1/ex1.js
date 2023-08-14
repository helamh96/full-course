const runTasks = async (tasks, poolSize) => {
    if (poolSize <= 0) {
        throw new Error('Invalid pool size. Please provide a positive value.');
    }

    const queue = [...tasks];
    const activeTasks = {};
    const results = [];

    while (queue.length || Object.keys(activeTasks).length > 0) {
        while (queue.length && Object.keys(activeTasks).length < poolSize) {
            const task = queue.shift();
            const taskIndex = tasks.length - queue.length - 1;

            const modifiedTask = task()
                .then((value) => [taskIndex, { value }])
                .catch((error) => [taskIndex, { error }]);

            activeTasks[taskIndex] = modifiedTask;
        }

        if (Object.keys(activeTasks).length > 0) {
            const [index, value] = await Promise.race(
                Object.values(activeTasks)
            );

            delete activeTasks[index];
            results[index] = value;
        }
    }

    const remainingTasks = await Promise.allSettled(Object.values(activeTasks));

    remainingTasks.forEach((element) => {
        results[element.value[0]] = element.value[1];
    });

    return results;
};

module.exports = runTasks;
