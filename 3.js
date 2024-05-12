let data = [
  ["A", 25, 25, 25, 25],
  ["B", 10, 12, 13, 11],
  ["C", 24, 22, 23, 21],
  ["D", 13, 22, 16, 14],
  ["E", 10, 12, 13, 11],
  ["F", 24, 22, 23, 21],
  ["G", 13, 22, 16, 14],
];

let 길이 = data.length;
let 선발해야하는인원수 = parseInt(길이 * 0.3);
// let 현재선발인원 = 0;
let 점수모음 = {};
let 최종선발인원 = [];
let 미선발인원 = [];

if (선발해야하는인원수 === 0) {
  console.log([]);
  return [];
}

data.sort(
  (a, b) =>
    b.slice(1).reduce((a, c) => a + c) - a.slice(1).reduce((a, c) => a + c)
);

for (let d of data) {
  let 합 = d.slice(1).reduce((a, c) => a + c);
  if (합 in 점수모음) {
    점수모음[합].push(d[0]);
  } else {
    점수모음[합] = [d[0]];
  }
}

점수모음 = Object.entries(점수모음);
점수모음.sort((a, b) => b[0] - a[0]);

for (let d of 점수모음) {
  //   console.log(선발해야하는인원수, d[1].length);
  if (
    선발해야하는인원수 > 최종선발인원.length &&
    d[1].length <= 선발해야하는인원수 - 최종선발인원.length
  ) {
    최종선발인원.push(...d[1]); // 선발 인원
    // console.log(`1. ${d[1]}`);
  } else {
    미선발인원.push(...d[1]); // 미선발 인원
  }
}
console.log(선발해야하는인원수);
console.log(최종선발인원.sort().reverse());
console.log(미선발인원);

/*
  스토리 다 읽지 말고, 중요한 수치가 있는지 빠르게 독해하는 것이 중요!
  */
