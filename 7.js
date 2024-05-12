let data = [[4, 9, 11, 2], 6];
let result;

data[0].forEach((v, i) => {
  for (let j = i + 1; j < data[0].length; j++) {
    if (v + data[0][j] === data[1]) {
      result = [i, j];
    }
  }
});
return result;

/*
아래 링크에 보충설명 있음
https://github.com/weniv/jsalgo_solution
*/
