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
const maxIndex = parsed[0].length;

console.log({ parsed, maxIndex });
const STEP_DOWN = 1;
const STEP_RIGHT = 3;

let numTrees = 0;
let posX = 0;
for (const index in parsed) {
  const posY = Number(index);
  const char = parsed[posY][posX];

  if (!char) {
    throw new Error('Something wrong');
  }
  if (char === '#') {
    numTrees++;
  }

  if (posY < 2) {
    console.log({ posX, posY, char });
  }

  posX = posX + STEP_RIGHT;
  posX %= maxIndex;
}

console.log(numTrees);
