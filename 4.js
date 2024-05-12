// let data = [
//   "빙키는 10만큼 A를 훈련했다. 빙키는 날씨가 안 좋은데도 불구하고 20만큼 B를 했다. 빙키는 비가 내리는 가운데서도 10만큼 B를 훈련했다.",
//   "빙키는 A를 30만큼 고민했다. 40만큼 B를 고민했다. 빙키는 A를 70만큼 참 오랜 시간 고민했다. 빙키는 놀랍게도 C를 10만큼 고민했다.",
// ];

// console.log(data[0].match(/[a-zA-Z]/g));

// console.log(data[0].match(/\d+/g));

// const zip = (a, b) => a.map((v, i) => [v, b[i]]);

// console.log(zip(data[0].match(/[a-zA-Z]/g), data[0].match(/\d+/g)));

/*
/[a-zA-Z]/
/[0-9]/
/\d/ 숫자

object는 key 등에 접근하려면 Object를 써야만 한다는 단점이 있음 . for of도 사용할 수 없음.-> 그래서 Map()을 씀.
Map에서는 has, set, get등 활용 가능.
*/

function solution(data) {
  let 훈련수치 = new Map();
  let 고민수치 = new Map();
  let result = "";
  let 원래미래 = 0;
  let 바뀐미래 = 0;

  // 훈련수치
  for (let d of data[0].split(".").slice(0, -1)) {
    key = d.match(/[a-zA-Z]/g)[0];
    value = d.match(/\d+/g)[0];

    if (훈련수치.has(key)) {
      훈련수치.set(key, 훈련수치.get(key) + parseInt(value));
    } else {
      훈련수치.set(key, parseInt(value));
    }
  }

  // 고민수치
  for (let d of data[1].split(".").slice(0, -1)) {
    key = d.match(/[a-zA-Z]/g)[0];
    value = d.match(/\d+/g)[0];

    if (고민수치.has(key)) {
      고민수치.set(key, 고민수치.get(key) + parseInt(value));
    } else {
      고민수치.set(key, parseInt(value));
    }
  }

  // 원래 미래
  for (let i of 훈련수치.keys()) {
    if (고민수치.has(i)) {
      원래미래 += 훈련수치.get(i) * 고민수치.get(i);
    }
  }

  if (원래미래 === 0) {
    return "미래가 보이지 않습니다.";
  }

  let 훈련수치중가장큰값 = Math.max(...훈련수치.values());
  let 고민수치중가장큰값 = Math.max(...고민수치.values());

  for (let i of 훈련수치) {
    // i가 key value 임.
    if (i[1] === 훈련수치중가장큰값) {
      훈련수치.set(i[0], i[1] + 100);
    }
  }

  for (let i of 고민수치) {
    if (i[1] === 고민수치중가장큰값) {
      고민수치.set(i[0], i[1] + 100);
    }
  }
  //   console.log(훈련수치, 고민수치);

  // 바뀐 미래
  for (let i of 훈련수치.keys()) {
    if (고민수치.has(i)) {
      바뀐미래 += 훈련수치.get(i) * 고민수치.get(i);
    }
  }

  result = `최종 꿈의 설계는 원래 미래 ${원래미래}, 바뀐 미래 ${바뀐미래}입니다. 이 수치대로 Vision을 만듭니다.`;
  console.log(result);
}

solution([
  "100만큼 A를 훈련. 201 B. 120보다 이십만큼 더 B를 훈련했다.",
  "30만큼 A를 고민했다. 40만큼 B를 고민. 빙키는 A를 70만큼. C 10. D 10. A 10. z 10.",
]);
