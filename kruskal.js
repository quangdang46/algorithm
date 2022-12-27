function kruskal(graph) {
  // Sort the edges of the graph by weight in ascending order
  const edges = graph.edges.sort((a, b) => a.weight - b.weight);

  const sets = new DisjointSet(graph.vertices);

  const mst = [];

  for (const edge of edges) {
    const uSet = sets.find(edge.u);
    const vSet = sets.find(edge.v);
    if (uSet !== vSet) {
      sets.union(uSet, vSet);
      mst.push(edge);
    }
  }
  return mst;
}
