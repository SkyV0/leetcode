// 1 <= routes.length <= 500.
// 1 <= routes[i].length <= 105
// All the values of routes[i] are unique.
// sum(routes[i].length) <= 105
// 0 <= routes[i][j] < 106
// 0 <= source, target < 106
function numBusesToDestination(routes: number[][], source: number, target: number): number {
    if (source === target) {
        return 0;
    }
    const map = new Map();
    for (let i = 0; i < routes.length; i++) {
        for (const stop of routes[i]) {
            if (!map.has(stop)) {
                map.set(stop, []);
            }
            map.get(stop).push(i);
        }
    }
    const queue = [];
    const visited = new Set();
    for (const bus of map.get(source)) {
        queue.push([bus, 1]);
        visited.add(bus);
    }
    while (queue.length) {
        const [bus, count] = queue.shift();
        for (const stop of routes[bus]) {
            if (stop === target) {
                return count;
            }
            for (const nextBus of map.get(stop)) {
                if (!visited.has(nextBus)) {
                    queue.push([nextBus, count + 1]);
                    visited.add(nextBus);
                }
            }
        }
    }
    return -1;
};