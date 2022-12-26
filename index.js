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

    visited.add(node);
    for (const [neighbor, weight] of graph.get(node)) {
      const newDistance = distance + weight;
      if (newDistance < distances.get(neighbor)) {
        distances.set(neighbor, newDistance);
      }

      queue.enqueue([neighbor, newDistance]);
    }
  }

  return distances.get(end);
}

function radixSort(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  let maxDigits = 0;
  for (let i = 0; i < arr.length; i++) {
    maxDigits = Math.max(maxDigits, getNumDigits(arr[i]));
  }

  for (let k = 0; k < maxDigits; k++) {
    let buckets = Array.from({length: 10}, () => []);

    for (let i = 0; i < arr.length; i++) {
      let digit = getDigit(arr[i], k);
      buckets[digit].push(arr[i]);
    }

    arr = [].concat(...buckets);
  }

  return arr;
}

function getNumDigits(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));

