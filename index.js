function dijkstra(graph, start, end) {
  const distances = new Map();
  for (const node of graph.keys()) {
    distances.set(node, Infinity);
  }

  // Set the distance of the start node to 0
  distances.set(start, 0);

  const visited = new Set();
  const queue = new PriorityQueue((a, b) => a[1] < b[1]);
  queue.enqueue([start, 0]);
  while (!queue.isEmpty()) {
    // Dequeue the next node
    const [node, distance] = queue.dequeue();
    if (visited.has(node)) {
      continue;
    }

    // Mark the node as visited
    visited.add(node);
    // For each neighbor of the node
    for (const [neighbor, weight] of graph.get(node)) {
      const newDistance = distance + weight;
      if (newDistance < distances.get(neighbor)) {
        distances.set(neighbor, newDistance);
      }

      // Add the neighbor to the queue
      queue.enqueue([neighbor, newDistance]);
    }
  }

  // Return the distance from the start node to the end node
  return distances.get(end);
}
