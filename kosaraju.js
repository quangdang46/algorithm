function kosaraju(graph) {
  const stack = [];

  const visited = new Set();

  function dfs(vertex) {
    // Mark the vertex as visited
    visited.add(vertex);

    // Visit each neighbor of the vertex
    for (const neighbor of graph.neighbors(vertex)) {
      if (!visited.has(neighbor)) {
        dfs(neighbor);
      }
    }

    // Push the vertex onto the stack
    stack.push(vertex);
  }

  for (const vertex of graph.vertices()) {
    if (!visited.has(vertex)) {
      dfs(vertex);
    }
  }

  const reversed = graph.reverse();

  visited.clear();
  const sccs = [];

  function dfs2(vertex) {
    // Mark the vertex as visited
    visited.add(vertex);

    sccs[sccs.length - 1].add(vertex);

    for (const neighbor of reversed.neighbors(vertex)) {
      if (!visited.has(neighbor)) {
        dfs2(neighbor);
      }
    }
  }

  while (stack.length > 0) {
    const vertex = stack.pop();
    if (!visited.has(vertex)) {
      sccs.push(new Set());
      dfs2(vertex);
    }
  }

  // Return the list of SCCs
  return sccs;
}
