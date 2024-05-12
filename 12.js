function solution(data) {
  function combinations(arr, num) {
    const results = [];

    if (num === 1) return arr.map((v) => [v]);

    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1);

      const combinationsArr = combinations(rest, num - 1);

      const attached = combinationsArr.map((v) => [fixed, ...v]);
      results.push(...attached);
    });
    return results;
  }

  function 인접한값삭제(arr, n) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < n - 1; j++) {
        if (arr[i][j] + 1 === arr[i][j + 1]) {
          arr[i] = [];
          break;
        }
      }
    }
  }

  const 인덱스 = [0, 1, 2, 3, 4, 5, 6, 7];
  let 조합4 = combinations(인덱스, 4);
  let 조합3 = combinations(인덱스, 3);

  인접한값삭제(조합3, 3);
  인접한값삭제(조합4, 4);

  조합3 = 조합3.filter((v) => v.toString() !== "");
  조합4 = 조합4.filter((v) => v.toString() !== "");

  let 조합 = 조합3.concat(조합4);
  조합 = 조합.map((v) => v.reduce((a, c) => a + data[c]), 0);
  console.log(조합);
  return Math.max(...조합);
}

let data = [2, 4, 1, 3, 5, 8, 8, 6];
console.log(solution(data));

// console.log(combinations([2, 4, 1, 3, 5, 8, 8, 6], 4));

/*
사실 7번의 두 수의 합 찾기 방식으로 풀 수도 있음.
구글링이 불가능하다면 투 포인터로 푸는 방법이 더 좋을수도 있음.
하지만 여기에서는 조합으로 풀 것임.

조합 2와 1을 하지 않는 이유는, 3과4에서 다 포함되기 때문임.
  조합 = 조합.map((v) => v.reduce((a, c) => a + data[c]), 0); -> 이렇게 써서 제대로 작동 안했음..
*/
