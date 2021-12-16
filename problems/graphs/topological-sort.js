"use strict"; // TAGS: Array, Queue, Hash Map, Graph, Vertices, Edges, Directed, DFS (Depth First Search), Difficulty: Medium

/*
A "topological sort" of a directed graph (i.e. graph with unidirectional edges) is a linear ordering of its vertices such that for every directed edge '(U, V)'
(i.e. from vertex 'U' to vertex 'V'), 'U' comes before 'V' in the ordering... Given a directed graph, find the topological ordering of its vertices...

  EX's:
    vertices = 4, edges = [[3, 2], [3, 0], [2, 0], [2, 1]] → topologicalSort(vertices, edges) = [3, 2, 0, 1]
      NOTE: The following is also a valid topological sort: [3, 2, 1, 0]
    
    vertices = 5, edges = [[4, 2], [4, 3], [2, 0], [2, 1], [3, 1]] → topologicalSort(vertices, edges) = [4, 2, 3, 0, 1] 
      NOTE: The following are also valid topological sorts: [4, 3, 2, 0, 1] / [4, 3, 2, 1, 0] / [4, 2, 3, 1, 0] / [4, 2, 0, 3, 1]
*/

/*
v = # of vertices
e = # of edges
+ RUNTIME Complexity: O(v + e) [WST]
+ SPACE Complexity: O(v + e) [WST]
*/

const topologicalSort = (vertices, edges) => {
  const adjacencyList = new Map();
  edges.forEach(edge => {
    const parent = edge[0], child = edge[1];
    const node = adjacencyList.get(parent), nodeChild = adjacencyList.get(child);
    /* add parents */
    if (node) node.children.push(child);
    else adjacencyList.set(parent, { inDegrees: 0, children: [child] });
    /* add children */
    if (nodeChild) nodeChild.inDegrees++;
    else adjacencyList.set(child, { inDegrees: 1, children: [] });
  });

  let sources = [];
  adjacencyList.forEach((data, node) => {
    if (!data.inDegrees) sources.push(node);
  });
  
  let sorted = [];
  while (sources.length) {
    let node = sources.shift(), data = adjacencyList.get(node);
    sorted.push(node);
    data.children.forEach(child => {
      if (adjacencyList.get(child).inDegrees-- === 1) sources.push(child); 
    });
  }

  return sorted.length === vertices ? sorted : [];
};

// TESTING:
console.log(topologicalSort(4, [[3, 2], [3, 0], [2, 0], [2, 1]])); // Expect: [3, 2, 0, 1] 
console.log(topologicalSort(5, [[4, 2], [4, 3], [2, 0], [2, 1], [3, 1]])); // Expect: [4, 2, 3, 0, 1] 
console.log(topologicalSort(7, [[6, 4], [6, 2], [5, 3], [5, 4], [3, 0], [3, 1], [3, 2], [4, 1]])); // Expect: [6, 5, 3, 4, 0, 2, 1]
