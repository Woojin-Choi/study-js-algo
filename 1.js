function solution(data) {
  let result = "";

  for (let d of data) {
    result += String.fromCharCode(
      parseInt(
        d.replaceAll("+", "1").replaceAll("-", "0").replaceAll(" ", ""),
        2
      )
    );
  }
  return result;
}

console.log(
  solution([
    " + + + - - + + ",
    " + + + - + - - ",
    "++----+",
    "+++ --+ -",
    "+++-+ - -",
  ])
);

/*
정규표현식 사용하는 방법도 있음.
.replace(/ /g, '').replace(/\+/, '1').replace(/-/, '0')

+앞에 \ 붙이는 것은 +를 문자 그 자체로 사용하겠다는 뜻임.
*/
