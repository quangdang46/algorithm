function shortestPath(graph, start, end) {
  const queue = [[start]];
  const visited = new Set();
  while (queue.length > 0) {
    // Dequeue the next vertex
    const path = queue.shift();
    const vertex = path[path.length - 1];
    if (!visited.has(vertex)) {
      // Mark it as visited
      visited.add(vertex);

      // If the vertex is the end vertex, return the path
      if (vertex === end) {
        return path;
      }

      for (const neighbor of graph.neighbors(vertex)) {
        queue.push(path.concat(neighbor));
      }
    }
  }

  return null;
}
