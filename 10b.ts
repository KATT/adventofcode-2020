const input = `
79
142
139
33
56
133
138
61
125
88
158
123
65
69
105
6
81
31
60
70
159
114
71
15
13
72
118
14
9
93
162
140
165
1
80
148
32
53
102
5
68
101
111
85
45
25
16
59
131
23
91
92
115
103
166
22
145
161
108
155
135
55
86
34
37
78
28
75
7
104
121
24
153
167
95
87
94
134
154
84
151
124
62
49
38
39
54
109
128
19
2
98
122
132
141
168
8
160
50
42
46
110
12
152
`;

const numbers = input
  .trim()
  .split('\n')
  .map(Number)
  .sort((a, b) => a - b);

const highest = numbers.reduce((num1, num2) => Math.max(num1, num2), 0) + 3;

const cache: Record<number, number | undefined> = {};
function findPath(index = 0, prevNumber = 0, fork: number[] = []) {
  let numForks = 0;
  if (cache[index]) {
    return cache[index];
  }

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
  cache[index] = numForks;

  return numForks;
}

console.log('Starting');
console.time('Calc');
const paths = findPath();
console.timeEnd('Calc');

console.log(paths);
