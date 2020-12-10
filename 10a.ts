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
numbers.push(highest);

function main() {
  const diffs = {
    1: 0,
    2: 0,
    3: 0,
  };
  let prevNumber = 0;
  for (let index = 0; index < numbers.length; index++) {
    const num = numbers[index];
    const diff = num - prevNumber;

    if (diff > 3) {
      throw new Error();
    }
    diffs[diff]++;
    prevNumber = num;
  }
  return {
    diffs,
    multi: diffs[1] * diffs[3],
  };
}

console.log(main());