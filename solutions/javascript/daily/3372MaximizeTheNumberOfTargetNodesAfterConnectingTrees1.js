/**
 * @param {number[][]} edges1
 * @param {number[][]} edges2
 * @param {number} k
 * @return {number[]}
 */
var maxTargetNodes = function (edges1, edges2, k) {
    const bfs = (start, adjList, k) => {
        if (k === 0) return 1;
        const visited = new Set();
        const q = [start];
        visited.add(start);
        let level = 0;
        let nodesReached = 1;

        while (q.length && level < k) {
            const size = q.length;
            for (let i = 0; i < size; i++) {
                const node = q.shift();
                for (const neighbor of adjList[node]) {
                    if (!visited.has(neighbor)) {
                        visited.add(neighbor);
                        q.push(neighbor);
                        nodesReached++;
                    }
                }
            }
            level++;
        }
        return nodesReached;
    };

    let n = 0, m = 0;
    for (const [u, v] of edges1) {
        n = Math.max(n, u, v);
    }
    for (const [u, v] of edges2) {
        m = Math.max(m, u, v);
    }
    n++; m++;

    const adj1 = Array.from({ length: n }, () => []);
    const adj2 = Array.from({ length: m }, () => []);

    for (const [u, v] of edges1) {
        adj1[u].push(v);
        adj1[v].push(u);
    }
    for (const [u, v] of edges2) {
        adj2[u].push(v);
        adj2[v].push(u);
    }

    const path1 = Array(n).fill(0).map((_, i) => bfs(i, adj1, k));

    let maxFound = 0;
    if (k > 0) {
        for (let i = 0; i < m; i++) {
            maxFound = Math.max(maxFound, bfs(i, adj2, k - 1));
        }
    }

    return path1.map(p => p + maxFound);
};