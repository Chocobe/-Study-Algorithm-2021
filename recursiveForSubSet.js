// 1 ~ lastNum 까지 자연수의 부분집합
const lastNum = 3;
const totalSubSetList = getSubSet(3);

console.log("모든 부분집합: ", totalSubSetList);

function getSubSet(n) {
  const result = [];

  // 각 요소별 상태값을 나타내는 배열
  // 0번 index는 사용하지 않고, 1 ~ n까지 사용
  const status = Array.from({length: n + 1}, () => false);
  recursive(1);

  return result;

  // getSubSet() 의 내부 함수 (재귀함수)
  function recursive(curNum) {
    // 재귀의 종료 시점을 먼저 정의하고, 로직은 차후 작성하는게 생각의 흐름에 좀 더 자연스럽습니다.
    if(curNum > n) {
      // 재귀종료 시점
      // 이 시점에서 각 요소의 상태값에 따른 부분집합 1개가 도출 됩니다.

      let curResult = "";
      
      for(let i = 1; i < status.length; i++) {
        // i === 0 은 사용하지 않는 상태값 입니다.
        
        if(status[i]) {
          curResult += `${i} `;
        }
      }

      if(curResult) {
        result.push(curResult.trim());
      }
    } else {
      // 현재 요소가 ``true`` 일 때,
      status[curNum] = true;
      recursive(curNum + 1);

      // 현재 요소가 ``false`` 일 때,
      status[curNum] = false;
      recursive(curNum + 1);
    }
    // 
  }
}