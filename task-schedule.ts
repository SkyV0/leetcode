// 1 <= task.length <= 104
// tasks[i] is upper-case English letter.
// The integer n is in the range [0, 100].
function leastInterval(tasks: string[], n: number): number {
    const taskMap = new Map();
    let max = 0;
    let maxCount = 0;
    for (let task of tasks) {
        const count = taskMap.get(task) || 0;
        taskMap.set(task, count + 1);
        if (count + 1 > max) {
        max = count + 1;
        maxCount = 1;
        } else if (count + 1 === max) {
        maxCount++;
        }
    }
    return Math.max(tasks.length, (max - 1) * (n + 1) + maxCount);
};