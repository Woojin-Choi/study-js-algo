function combinations(arr, num) {
  const result = [];
  if (num === 1) return arr.map((v) => [v]);
  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinationsArr = combinations(rest, num - 1);
    const attached = combinationsArr.map((v) => [fixed, ...v]);
    result.push(...attached);
  });
  return result;
}

function solution(data) {
  if (data[0].reduce((a, c) => a + c, 0) < data[1]) {
    return -1;
  }
  let count = 0;
  let copydata = data[0].slice();
  for (let i of copydata) {
    if (i >= data[1]) {
      count += 1;
      data[0].splice(data[0].indexOf(i), 1);
    }
  }
  console.log(data[0]);

  while (data[0].length !== 0) {
    if (data[0].length === 1) {
      return count;
    }
    let 조합 = [];
    for (let i = 2; i < data[0].length + 1; i++) {
      for (const comb of combinations(data[0], i)) {
        let sum = comb.reduce((a, c) => a + c, 0);
        if (sum >= data[1]) {
          조합.push([sum, comb]);
        }
      }
    }
    if (조합.toString() == "") {
      return count;
    }
    조합.sort((a, b) => a[0] - b[0]);
    count += 1;
    for (let i of 조합[0][1]) {
      data[0].splice(data[0].indexOf(i), 1);
    }
  }
  return count;
}

console.log(solution([[46, 26, 37, 32, 10], 30]));

/*
그리디 알고리즘: 욕심쟁이 알고리즘. 최선의 선택을 하는 것.
30보다 큰 것들 먼저 선택하고, 이후에는 내림차순으로 정렬한 후에 클 것 같은 것부터 더해감.
그리디 알고리즘하면 가장 많이 나오는게 잔돈 문제임. 잔돈을 5000원, 1000원 으로 나눠서 주는 것.
즉 선택지 중에서 가장 좋은 것을 선택하는 것이 그리디 알고리즘임. 

얕은 복사=같은 주소값으로 비교시 같다고 나옴, 깊은 복사=다른 주소값으로 비교시 다르다고 나옴.
*/
