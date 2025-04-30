/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
    const visited = new Array(rooms.length).fill(false);

    function dfs(room) {
        if (visited[room]) return
        visited[room] = true;
        for (let key of rooms[room]) {
            dfs(key);
        }
    }
    dfs(0);

    return visited.every(hasKey => hasKey);
};
