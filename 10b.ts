const input = `
28
33
18
42
31
14
46
20
48
47
24
23
49
45
19
38
39
11
1
32
25
35
8
17
7
9
4
2
34
10
3
`;

const numbers = input
  .trim()
  .split('\n')
  .map(Number)
  .sort((a, b) => a - b);

const highest = numbers.reduce((num1, num2) => Math.max(num1, num2), 0) + 3;

function findPath(index = 0, prevNumber = 0, fork: number[] = []) {
  let numForks = 0;

  for (let i = index; i < numbers.length; i++) {
    const num = numbers[i];
    const possiblePath = [...fork, num];

    if (num - prevNumber > 3) {
      break;
    }
    if (highest - num <= 3) {
      numForks++;
    }
    numForks += findPath(i + 1, num, possiblePath);
  }

  return numForks;
}

console.log('Starting');
console.time('Calc');
const paths = findPath();
console.timeEnd('Calc');

console.log(paths);
