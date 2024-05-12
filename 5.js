let data = [
  ["#", 0, 0, 0, "#"],
  [0, "#", "#", 0, 0],
  ["#", "#", "#", 0, "#"],
  ["#", 0, 0, "#", "#"],
];

for (let i = 0; i < data.length; i++) {
  for (let j = 0; j < data[i].length; j++) {
    if (data[i][j] === "#") {
      // 상
      if (i !== 0) {
        if (data[i - 1][j] !== "#") data[i - 1][j] += 1;
      }

      // 하
      if (i !== data.length - 1) {
        if (data[i + 1][j] !== "#") data[i + 1][j] += 1;
      }

      // 좌
      if (j !== 0) {
        if (data[i][j - 1] !== "#") data[i][j - 1] += 1;
      }

      // 우
      if (j !== data[i].length - 1) {
        if (data[i][j + 1] !== "#") data[i][j + 1] += 1;
      }

      // 상 그리고 좌
      if (i !== 0 && j !== 0) {
        if (data[i - 1][j - 1] !== "#") data[i - 1][j - 1] += 1;
      }

      // 하 그리고 좌
      if (i !== data.length - 1 && j !== 0) {
        if (data[i + 1][j - 1] !== "#") data[i + 1][j - 1] += 1;
      }

      // 상 그리고 우
      if (i !== 0 && j !== data[i].length - 1) {
        if (data[i - 1][j + 1] !== "#") data[i - 1][j + 1] += 1;
      }

      // 하 그리고 우
      if (i !== data.length - 1 && j !== data[i].length - 1) {
        if (data[i + 1][j + 1] !== "#") data[i + 1][j + 1] += 1;
      }
    }
  }
}

console.log(data);

console.log(
  data.flat().filter((v) => isNaN(v)),
  data.flat().filter((v) => !isNaN(v))
);

console.log(
  data.flat().filter((v) => isNaN(v)).length,
  data
    .flat()
    .filter((v) => !isNaN(v))
    .reduce((a, c) => a + c)
);

return [
  data.flat().filter((v) => isNaN(v)).length,
  data
    .flat()
    .filter((v) => !isNaN(v))
    .reduce((a, c) => a + c),
];

/*
flat()은 차원을 낮춰서 배열을 펼쳐주는 함수.
reduce 끝에 0 안 넣어주면 빈 배열 들어올 경우 에러 남! 꼭 넣어줘야 함.
*/
