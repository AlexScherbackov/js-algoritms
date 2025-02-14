const breadthFirstSearch = (graph, target, startNode, fn) => {
  const selected = new Set();
  const queue = [];

  selected.add(startNode);
  queue.push(startNode);

  while (queue.length > 0) {
    const node = queue.shift();
    const neighbors = graph.get(node);
    for (const neighbor of neighbors) {
      if (!selected.has(neighbor)) {
        queue.push(neighbor);
        selected.add(neighbor);
        if (fn(neighbor, target)) {
          return neighbor;
        }
      }
    }
  }
  return 'no match';
};

export default breadthFirstSearch;
