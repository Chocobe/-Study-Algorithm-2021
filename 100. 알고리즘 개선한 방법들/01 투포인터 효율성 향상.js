/*
 * gems 목록에서 순서를 지키며 모든 요소를 선택할 때, 가장 적은 개수가 되는 [시작idx, 끝idx] 구하기
 * 효율성 핵심
 *    * 투포인터 알고리즘 사용
 *    * 1번 포인터: 조건 충족 시,
 *    * 2번 포인터: 조건 충족X 시,
 *    * 각 항목의 개수는 Map 사용
 *    * 포인터 이동 시, 개수 반영
 */

const gems1 = ["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"]; // [3, 7]
const gems2 = ["AA", "AB", "AC", "AA", "AC"]; // [1, 3]
const gems3 = ["XYZ", "XYZ", "XYZ"];  // [1, 1]
const gems4 = ["ZZZ", "YYY", "NNNN", "YYY", "BBB"]; // [1, 5]

function solution(gems) {
  let answer = [];
  let answerCount = Number.MAX_SAFE_INTEGER;

  const originArrLength = gems.length;
  const originSet = new Set(gems);
  const originSetSize = originSet.size;

  const curMap = new Map();
  curMap.set(gems[0], 1);

  let start = 0;
  let end = 0;

  while(start < originArrLength && end < originArrLength) {
      const curMapSize = curMap.size;

      if(curMapSize !== originSetSize) {
          end++;
          
          const endGem = gems[end];

          if(curMap.has(endGem)) {
              curMap.set(endGem, curMap.get(endGem) + 1);
          } else {
              curMap.set(endGem, 1);
          }
      } else {
          let selectedCount = 0;
          let isMin = true;

          // for(let curCount of curMap.values()) {
          //     selectedCount += curCount;
              
          //     if(curCount !== 1) {
          //         isMin = false;
          //     }
          // }

          for(let [gemName, count] of curMap) {
            selectedCount += count;

            if(count !== 1) {
              isMin = false;
            }
          }

          if(selectedCount < answerCount) {
              answer[0] = start + 1;
              answer[1] = end + 1;
              answerCount = end - start + 1;
              
              if(isMin) {
                  break;
              }
          }
          const startGem = gems[start];

          if(curMap.get(startGem) > 1) {
              curMap.set(startGem, curMap.get(startGem) - 1);
          } else {
              curMap.delete(startGem);
          }

          start++;
      }
  }

  return answer;
}

// console.log(solution(gems1));
// console.log("");
// console.log(solution(gems2));
// console.log("");
// console.log(solution(gems3));
// console.log("");
// console.log(solution(gems4));
// console.log("");

function solution2(gems) {
  let answer = [];
  
  const gemsArrLength = gems.length;
  let answerCount = gemsArrLength;
  
  const gemsSet = new Set(gems);
  const gemsSetLength = gemsSet.size;
  const curMap = new Map();
  
  let lhs = 0;
  let rhs = -1;
  
  while(rhs < gemsArrLength && (rhs >= lhs || rhs === -1)) {
      const curMapLength = curMap.size;
      
      if(curMap.size < gemsSetLength) {
          rhs++;
          
          const rhsGem = gems[rhs];
          
          if(curMap.has(rhsGem)) {
              curMap.set(rhsGem, curMap.get(rhsGem) + 1);
          } else {
              curMap.set(rhsGem, 1);
          }
      } else if(curMapLength === gemsSetLength) {
          if(curMapLength < answerCount) {
              answerCount = curMapLength;
              answer = [lhs, rhs];
          }
          
          const lhsGem = gems[lhs];
          
          if(curMap.get(lhsGem) === 1) {
              curMap.delete(lhsGem);
          } else {
              curMap.set(lhsGem, curMap.get(lhsGem) - 1);
          }
          
          lhs++;
      }
  }
  
  return [answer[0] + 1, answer[1] + 1];
}

console.log(solution2(gems1));
console.log(solution2(gems2));
console.log(solution2(gems3));
console.log(solution2(gems4));