 

// Constraints:

// 1 <= numCourses <= 2000
// 0 <= prerequisites.length <= numCourses * (numCourses - 1)
// prerequisites[i].length == 2
// 0 <= ai, bi < numCourses
// ai != bi
// All the pairs [ai, bi] are distinct.
function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    const graph = new Map();
    const visited = new Map();
    const result = [];
    for (let i = 0; i < numCourses; i++) {
        graph.set(i, []);
        visited.set(i, 0);
    }
    for (let i = 0; i < prerequisites.length; i++) {
        const [pre, course] = prerequisites[i];
        graph.get(pre).push(course);
    }
    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) return [];
    }
    return result;
    function dfs(course) {
        if (visited.get(course) === 1) return true;
        if (visited.get(course) === 2) return false;
        visited.set(course, 2);
        const pres = graph.get(course);
        for (let i = 0; i < pres.length; i++) {
            if (!dfs(pres[i])) return false;
        }
        visited.set(course, 1);
        result.push(course);
        return true;
    }
};