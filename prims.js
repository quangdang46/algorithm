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


const graph = [
  [0, 2, 0, 6, 0],
  [2, 0, 3, 8, 5],
  [0, 3, 0, 0, 7],
  [6, 8, 0, 0, 9],
  [0, 5, 7, 9, 0]
];

// Define the starting vertex
const start = 0;

// Call the prim function and capture the return value
const result = prim(graph, start);

// Print the result to the console
console.log(result);
