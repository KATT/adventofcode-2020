const input = `
.#.#....###..#.#..............#
#......#####..##.##.#.......#.#
.###.....#..#.#..#..#.#......#.
.........##.#.....#.#..........
........##....#.......#.#..#..#
#.#..####...#.....#.#.#...#....
#....#...#.........#.....#..#.#
.#..........#..#.............#.
...##..##..#...####.#.#.#.#....
.#...####............##....#...
..##.....#.#......#......#.#.#.
..##......#..##.....#.#.....#.#
..#...#....#.#.........##......
#..##..##..#..##....#....##.#.#
..###.#....#.#.#...#......#.#.#
....#...#...#.........#.....##.
.#..#.#..........#.##.....#.#..
.#...#...###..#..#..####.#...#.
##..............#..#.#...###..#
.#..#.#.#...#..#...#..#........
..#.#......#.#..##...#.#..#....
...#.#.....#.##..#...#..#......
...#...##....##..#....#..#...#.
#......##.#.......#...#..#.#...
.#..#......####...#............
...#..##.#...#....#.#.#.#......
....##...........##.#.#...##...
#.##.###........#..###.#..##...
....#......#....##...##.#......
#.............#...#.........#..
..##.......#.......#.#...#...#.
...#....####...#...#....#.###..
...##......#...###.#...#....#..
...#.............#...#.......#.
...#..#.##.##.#..#.##.#..#....#
..####.....#..#............#...
##....##..#.#.#.#..#..#.....#..
......##...##......#.#.........
#.#............#.#.#..#......#.
...#.#.#.....#..#..#.#..##.....
.#.#.............###..#....##..
....#.###..#..#.....#..#.##....
..#.#....#.......#.......##..#.
.#.##.#.#..#..##.........##....
...#...###.##....#####.......#.
......#.....##...##...#....#.#.
###.......##..#.....#......#.#.
...#..#..#....#.#.....##..#...#
..#....##.......#....#.........
#....##.........##......#.#..#.
#.....#.#.#..##..#.#.....##....
......#....#...#...#.###....##.
#...####...###.##..#.#.#..##...
......###....###..##......#..##
.#.####.###..#.....#...#..#...#
.###.#.....#..#.#..#.....##..##
...##...#.####....#......###...
...##.......#.#..#......#.#....
......##....#......#.........#.
............#....#............#
..#.#..........#......#..#.....
.#...#.#.#......#..##..#....##.
..##.#.#.#..#...###..#.#.##.#..
..#......#.........#.......#...
...#...##.#.##......#.....#....
..#.....#..##....#..##..#.#.##.
....##....#.#...#..##.##.##....
..#.............#...#......#...
.#.#.#.##..#.#..##...#.........
.##...........#..#.#........#..
.#..##.....#....#...#...#......
#.#.....##.#..#...######....#..
....#..#...##...#.........###..
..##.#...##..#......#.##..#...#
##..##...........#.......#.#...
.......##..##...###.##.......#.
.#.##...#.##...............#...
.......#.............#.......##
......#...........#...#..##....
.#..#..#....#..........#......#
...........#..#.....#....##....
###....#....##..#..##.....##...
#........#........#...#.##.##..
##.#.#........#..#.#..#.......#
.##.#.....#............#.......
.....#........#..##......##....
.#.####.#.##..................#
#...##.......#...#....#.#.##...
#.#.##...#.#......#.....#....#.
.........#....#...#....#.....#.
...#..#..#.#..#.##........##.#.
..#.##.#...#...#....#....##..#.
.#..#...####..........#.......#
....#...#...#...##.#.##......#.
.#....#...#.#..##..##.#.....#..
.....#....#......#.#####...###.
..#...##..#......#.#....#.....#
.##....##..###.#.....##.##.##..
#...#.#.........#....#....#....
...#.........#.##....##.#.#.#..
...#...#.#....#..#.#.......#.#.
#......#..#....##....#.........
...........#......#......###..#
#..#...#..##..#....#.....#.#.#.
#.#.....##..#..........###..#..
#...#.....#.......#..##...#....
...#....##.....#..##..#....#...
#...#.#......#..#...#........#.
.#....#...#...#.........##....#
..##...#.........#.......##..#.
......#.......#.....##....#..#.
.....##..#...#............#.#.#
...#....#.##..#...#.#....#.....
...#...........#.##....#..##.##
##......##....##...........#.#.
..##..##......#...#.##.##..#...
.#..##.#...##...#......###.##.#
###.#....##..#..#.##..##...##..
..#........##.#...#.......#....
.....##....##.#.###.....#....#.
#.##....#....##.....#..#.#.....
#.........#..##...##.......##..
.#....#......#.#...##..........
##..##.....##....###..#...#.#.#
..##.#.#..#......#.#....###..#.
.#.##.....##.......##.#.##..#..
..##...#........#.#.#.##.#..###
........#.......#...##....#.#..
...#..#...#.##..#...#.#.###.##.
..#.#....#..#...#..##.........#
#....#..##..##....#.........#..
.......#.......#....#....#.#...
...#.##...#...#..#....#.###.##.
##.##...#..........#....#......
#.##.#.....#..#............##.#
.##...#.#.#.##...........#..##.
.#...#....#.......##...##...#.#
.#......#..#...#...#....#.#....
...#..#..#...#..##..##.....#..#
.#.##..#.#...#..#.#...#...#...#
#.##..........#.##..#....#.....
##....#.#..........#..#....#...
..#..##.#.......#...#.##......#
....##......#......#.#.#.##....
###......#...##..#..........###
##.#.##.....###.#..#.#......#..
#.#.#........#..........#....#.
...#.#..#.......#......##.#....
......#.....#.#.#....###..#...#
.........#...#..#####..#.#..#..
..........#.#.#####.#..#.....#.
....#.......#.#....#.....##..#.
#...##.#..#.#........#.#..#..##
#......#..#.#.....##......#.##.
.##...#....#.##..#.....###..#..
#....#.#..##....##..#.#####....
.......##..........#......#....
......#.#...#............#.....
.......###.....##.#..#.#....#.#
...#...#..........#....##...##.
.#..#.#.#....#.#.....##..#.#..#
......#.#..#....#..#...#.......
##.#####............#.#.####.#.
#.....###.#.......##...###....#
......#.##..##.........#.#.....
.#.#......#..#.##......#......#
.#.#.#..#.#...##.....#..#.#..#.
.#.#....#......................
#.#..###...#...####.##.#....#.#
.....#............#....#..#.##.
#..#...#.#....#....#..#..#...#.
...#.......#..#.#....#.......#.
.#..#.#...#.#.####..#...#....##
....#..#..............####....#
.....#.#.###....#.#.#.#...#....
..####..#.#.##.##.##....#..#...
.#.#.#.###..#.##..............#
..#.#..#...#.....#.......#.##..
.#.#..#.....##...###.....#..#..
..#..#......#.##..#......##..#.
.....#.#.#..##..###.#..........
.##......#...#.##.......#..#..#
.......#...#.....###.##...##...
..##..#.#.......#..............
#.....#......#.#..#..#..#......
..###.......##...#.##....#.....
.....##...........##.....#...##
.#.#.####....###.#.......#...##
#.#..##.#.#.....#.#....#.......
.........#.#..#...............#
..##.#..#..#####.###.........#.
.#........#...#...#...#.##.#..#
.#.##..........#..##....#.#.#..
.##......#....#.#....##.#.#.#..
.......##.####..#..#.#..#.#...#
...#.....#..##..###.#..##...#..
#.......##..#####....#.......#.
#.#.##.................#...###.
................####...........
.#..#......#...###.............
......#.#.##.##.....#..........
.......#..#.#............##....
#........#..#....#......#.####.
...#.#....##..#..#.............
..#.#......#...#.#..#..........
###...###...........#......#...
#.###..###........###...#..###.
.#.....#...#.#...........##....
....#..##.....#..#......#......
#.###.#........#.#.##..........
#.#.#.#.#..#.#...#...##.#......
..###.......###..#.#.#.#.#.....
...#........#.......#.###..##..
.#........#...#.#........#..##.
#.......###..#....##.###...#..#
.##....###..##...........##...#
#...#..........#.....#..##..#..
#..##..#..##.#.........##......
..#.#..###..###.....#.......#..
#...#...........##.#.#.###.....
...#....#.....#.....#.##.#.##.#
...........##.......####...#..#
#.#...#..##..#.#..#..........#.
..#...#.##........#.#..........
.##.....#.#.#....#.#.......#.#.
.......#.##...#.##....#.#...#..
......#...##...###...#.....###.
##......#.##.####.##...##......
..#....#.#..###.#..##....#..#..
...##..###.....###.....#.......
...#.....#.#........#..#..##.#.
.....................#.....#.#.
.#...#...##.#..#..........#...#
#.....#..#....#..#.......####..
.##.......##......###.#..#...##
.#.##..#...#..........##.......
...##...........##..##......#..
#....##.##...#......##.#.##.##.
..##.##.#.#.#....#........#.#..
....#......#......##..##.#.#...
.............#.##...#..#...#...
.#..#...#.........#...........#
....#.....#..................#.
........##............#...#..##
.###.....##...#...#.##.....##..
...##.#.........##.#.#..#......
#...........##.#..#........#..#
....#....#..##.#..##..#..#..#.#
#..##..#............#...#.#.#..
#......#..##......#...##..#...#
....#.#..##.#.#...####...#.....
.##..#..##....#...#....#...##.#
##.....#.#........#....#.#.#...
......#.#...##....#.###.....#.#
..#..#............###.###.##.#.
#..#.##.##.##..#...#.#.##..#...
....#..#.#...#......#..###.....
.#........#...###.....#...#....
....##.##....#..#...#.#####.#.#
...#..#...#.#.....#....#...###.
..........####...##............
.....#....##...##......#..#...#
..#...#.####......#...#..#..###
.#.....#....#..#...###..#.#....
..#..#......#.#...#.....##....#
.....##....#....#...#.....##...
#............##.#....#.#.#..#..
#......#......#....#.#..##.#...
#.#......##.....#.#..##.#.#....
.#.###..#.#......##...........#
#.#.........##..#.#.##......#..
##....####...##...........#....
....###.#..##.#.#.##...##.....#
..###.......##.......#......#..
..#.###.##.#...................
...#.#...#..#..#..##.###...#.#.
#...#..#...#..#....#..#...#....
....#........#.#.#.##.##.#..#.#
...#....#.#...#..#....#.#.#....
..#...#..##.#....##...###...##.
#......#.....#.....#....####.#.
...##.#..#.#.....#..#..##.#....
.####.#..#...#.#......#......#.
..#.#....#..#..##.#......##....
....#...#.#..#...#...##........
##..#.#....#..#.........#..##..
...#.......#....#..##...###..##
#......##.#..#..#..#..###.#.###
.#..##.#...##...#.............#
###.........#...###.#.#..#....#
.#.....#..#........#.#.......#.
#..#.#.....#.........###..#....
#..##.....#.#....#.###.....#..#
....#..#.......##..#.#..##....#
##.##..#....#..#.#.###.........
..##....#........#..#..#.##.#.#
.#....#...##..#.#.....#..##..#.
#..#.......#......#...#...#.##.
...##.#......#.#..#......#.....
......#...#.##.#....#...#.##.#.
#.....#..#.#.#...##...#........
....#.#..#.#.....#....#.#..#...
....#.#...###............#.....
.#.#...##.......#....#.##...#.#
.....#.##......#.#..#...#....#.
.###....#...#........#.........
..#.....#..#.#.#..##...#..#....
...###..#....#.....#.........##
#....#....###...#.#............
.#..##.....#...........#.#..#..
..#.#.#.......##..#.#..........
.#...#...####.#...#####.....#.#
..#....##.....#..#...#.........
#.#......#.##.........#......##
..#.#...#.##..#....#....#.##...
#....#......##.#..#......#.#.#.
#.#.............##..#.#........
..#.###.......##.....##.#..##.#
.........#........#...#..#....#
.........##.#.#..#..#....#....#
##..#..#.#.....##.........#.#.#
..##.##..#.##..........##.#..#.
...#..#####.......#.........#..
`;

const parsed = input
  .trim()
  .split('\n')
  .map((str) => {
    return str;
  });
const xPosMax = parsed[0].length;

console.log({ parsed, maxIndex: xPosMax });

const STRATEGIES: [number, number][] = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2],
];
const STEP_DOWN = 1;
const STEP_RIGHT = 3;

const result: number[] = [];
for (const [STEP_RIGHT, STEP_DOWN] of STRATEGIES) {
  let posX = 0;
  let posY = 0;

  let numTrees = 0;

  while (posY < parsed.length) {
    if (parsed[posY][posX] === '#') {
      numTrees++;
    }
    posX += STEP_RIGHT;
    posX %= xPosMax;

    posY += STEP_DOWN;
  }
  result.push(numTrees);
}

console.log(result);
console.log(result.reduce((sum, num) => sum * num, 1));
