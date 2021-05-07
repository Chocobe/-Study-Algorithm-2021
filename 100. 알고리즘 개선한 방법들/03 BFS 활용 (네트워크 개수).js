/*
 * 연결선 리스트로 주어지는 컴퓨터들에 대한 네트워크 개수 구하기
 *  (arr[1][2] === 1 이란, 1번 컴퓨터와 2번 컴퓨터가 같은 네트워크인 경우)
*/

const arr1 = [
  [1, 0, 0, 1],
  [0, 1, 0, 1],
  [0, 0, 1, 0],
  [1, 1, 0, 1],
];

const arr2 = [
  [1, 0, 0, 0, 1],
  [0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0],
  [1, 0, 0, 0, 1],
];

function solution(arr) {
  let answer = 1;
  
  const queue = [];
  
  for(let i = 0; i < arr.length; i++) {
    const curComputer = arr[i];

    if(curComputer.includes(1)) {
      answer++;
      queue.push(i);
    }

    while(queue.length) {
      const curNum = queue.shift();
      const curNetwork = arr[curNum];

      for(let j = 0; j < curNetwork.length; j++) {
        if(curNetwork[j] === 1) {
          curNetwork[j] = answer;

          if(j !== curNum) {
            queue.push(j);
          }
        }
      }
    }
  }

  return answer - 1;
}

console.log(solution(arr1));
console.log(solution(arr2));