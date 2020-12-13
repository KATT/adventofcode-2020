const input = `
1001287
13,x,x,x,x,x,x,37,x,x,x,x,x,461,x,x,x,x,x,x,x,x,x,x,x,x,x,17,x,x,x,x,19,x,x,x,x,x,x,x,x,x,29,x,739,x,x,x,x,x,x,x,x,x,41,x,x,x,x,x,x,x,x,x,x,x,x,23
`;

const parsed = input.trim().split('\n');
const timeNow = Number(parsed[0]);

const buses = parsed[1]
  .split(',')
  .map(Number)
  .filter((num) => !isNaN(num))
  .map((id) => ({ id }));

console.log(timeNow, buses);

function getNextBuses(timestamp: number) {
  return buses.map((bus) => ({
    ...bus,
    next: bus.id - (timestamp % bus.id),
  }));
}

const result = getNextBuses(timeNow);

console.log('next buses', result);

const closest = result.reduce(
  (sum, curr) => (curr.next < sum.next ? curr : sum),
  result[0],
);
console.log('closest', closest);
console.log('multi', closest.id * closest.next);
