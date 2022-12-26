function prim(graph, start) {
  const V = graph.length;
  const mst = new Array(V).fill(null).map(() => []);
  const key = new Array(V).fill(Infinity);
  const parent = new Array(V).fill(-1);
  const visited = new Array(V).fill(false);

  key[start] = 0;

  for (let i = 0; i < V - 1; i++) {
    const u = minKey(key, visited, V);
    visited[u] = true;

    for (let v = 0; v < V; v++) {
      if (graph[u][v] && !visited[v] && graph[u][v] < key[v]) {
        parent[v] = u;
        key[v] = graph[u][v];
      }
    }
  }

  for (let i = 1; i < V; i++) {
    mst[i] = [parent[i], i, graph[i][parent[i]]];
  }

  return mst;
}

function minKey(key, visited, V) {
  let min = Infinity;
  let minIndex = -1;

  for (let v = 0; v < V; v++) {
    if (!visited[v] && key[v] < min) {
      min = key[v];
      minIndex = v;
    }
  }

  return minIndex;
}
