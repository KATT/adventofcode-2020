const input = `
1001287
13,x,x,x,x,x,x,37,x,x,x,x,x,461,x,x,x,x,x,x,x,x,x,x,x,x,x,17,x,x,x,x,19,x,x,x,x,x,x,x,x,x,29,x,739,x,x,x,x,x,x,x,x,x,41,x,x,x,x,x,x,x,x,x,x,x,x,23
`;

const parsed = input.trim().split('\n');

const buses = parsed[1]
  .split(',')
  .map(Number)
  .map((id, index) => ({
    id,
    index,
  }))
  .filter((bus) => !isNaN(bus.id));

const nums = buses.reduce((arr, bus) => {
  arr.push(bus.id);
  return arr;
}, [] as number[]);

const gcd = (a: number, b: number) => (a ? gcd(b % a, a) : b);
const lcm = (a: number, b: number) => (a * b) / gcd(a, b);

function calc() {
  let ts = 0;
  let step = buses[0].id;
  while (true) {
    let match = true;
    for (const bus of buses) {
      if ((ts + bus.index) % bus.id === 0) {
        step = lcm(step, bus.id);
      } else {
        match = false;
      }
    }

    if (match) {
      return ts;
    }
    ts += step;
  }
}

console.time('calc');
console.log(calc());
console.timeEnd('calc');
