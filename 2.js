function solution(data) {
  let result = 0;
  data = data.match(/([rev])(10|[0-9])/g);
  for (let d of data) {
    result += parseInt(d.slice(1));
  }
  result = result.toString();

  return `${result[0]}월 ${result[1]}일`;
}

console.log(solution("10b9r10ce33uab8wc918v2cv11v9"));

// // 이렇게 정규표현식 변수 선언해서 하는 방법도 많이 사용된다고.하지만 match 사용하면 이렇게 앞의 것 뒤의 것이 분리되지는 않음. 분리하려면 exec 사용해야 함. exec는 글로벌로 선언되었어도 3개씩만 보여주는데, 다 보이면 끝에 null이 나옴. 그래서 while문에서 자주 사용됨.
// let data = "a10b9r10ce33uab8wc918v2cv11v9";
// let result = data.replace(/(?<one>[rev])(?<two>10|[0-9])/g, "[$<one>]($<two>)");
// console.log(result);

/*
그루핑에서 10이 뒤로 가면 r10을 잡아내지 못함.
 */
