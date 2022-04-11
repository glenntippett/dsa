const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');
const routes = [
  ['PHX', 'LAX'],
  ['PHX', 'JFK'],
  ['JFK', 'OKC'],
  ['JFK', 'HEL'],
  ['JFK', 'LOS'],
  ['MEX', 'LAX'],
  ['MEX', 'BKK'],
  ['MEX', 'LIM'],
  ['MEX', 'EZE'],
  ['LIM', 'BKK']
];

// Adjacency List

// Graph
const adjacenyList = new Map();

const addNode = (airport) => {
  adjacenyList.set(airport, []);
};

const addEdge = (origin, destination) => {
  adjacenyList.get(origin).push(destination);
  adjacenyList.get(destination).push(origin);
};

airports.forEach(addNode);
routes.forEach(route => addEdge(...route));

console.log(adjacenyList);

// BFS - Breadth First Search
const bfs = (start, finish) => {
  const visited = new Set();
  const queue = [start];
  while (queue.length > 0) {
    const airport = queue.shift();
    const destinations = adjacenyList.get(airport);
    for (const destination of destinations) {
      if (destination === finish) {
        console.log('found');
      }
      if (!visited.has(destination)) {
        visited.add(destination);
        queue.push(destination);
        console.log(destination);
      }
    }
  }
};

// DFS - Depth First Search
const dfs = (start, finish, visited = new Set()) => {
  visited.add(start);
  const destinations = adjacenyList.get(start);
  for (const destination of destinations) {
    console.log(destination);
    if (destination === finish) {
      console.log('found');
      return;
    }
    if (!visited.has(destination)) {
      dfs(destination, finish, visited);
    }
  }
};

dfs('PHX', 'BKK');
