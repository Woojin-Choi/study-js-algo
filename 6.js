let data = [1, 1, 1, 2, 3, 4, 1, 2, 3, 4, 1];
let sandwich = [1, 2, 3, 4, 1];

let result = 0;
let stack = [];

for (let i of data) {
  //   console.log(i);
  stack.push(i);
  if (JSON.stringify(stack.slice(-5)) === JSON.stringify(sandwich)) {
    result++;
    [...new Array(5)].forEach((v) => stack.pop());
  }
}

console.log(result);

/*
배열에서 for문 돌면서 slice() 하는 방식을 슬라이딩 윈도우라고 함.
slice(-5)는 -5 지점부터 끝까지임. 시작부터 끝까지가 아님!! 
*/
