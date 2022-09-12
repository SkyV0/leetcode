// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.

 

// Example 1:

// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take. 
// To take course 1 you should have finished course 0. So it is possible.
// Example 2:

// Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
// Output: false
// Explanation: There are a total of 2 courses to take. 
// To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
 

// Constraints:

// 1 <= numCourses <= 2000
// 0 <= prerequisites.length <= 5000
// prerequisites[i].length == 2
// 0 <= ai, bi < numCourses
// All the pairs prerequisites[i] are unique.
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const graph: number[][] = new Array(numCourses).fill(0).map(() => []);
    const visited: number[] = new Array(numCourses).fill(0);
    for (const [a, b] of prerequisites) {
        graph[b].push(a);
    }
    const dfs = (i: number) => {
        if (visited[i] === 1) {
            return true;
        }
        if (visited[i] === -1) {
            return false;
        }
        visited[i] = -1;
        for (const j of graph[i]) {
            if (!dfs(j)) {
                return false;
            }
        }
        visited[i] = 1;
        return true;
    }
    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) {
            return false;
        }
    }
    return true;
};