class QItem {
  constructor(y, x, dist) {
      this.y = y;
      this.x = x;
      this.dist = dist;
  }
}

function solution(places) {
  const placeLength = places.length;
  
  let answer = Array.from({ length: placeLength }, () => 1);
  
  const PERSON = "P";
  const WALL = "X";
  const EMPTY = "O";
  const DIST_CONDITION = 2;
  
  const directionList = [
      { y: 1, x: 0 },
      { y: -1, x: 0 },
      { y: 0, x: 1 },
      { y: 0, x: -1 },
  ]
  const directionListLength = directionList.length;
  
  // Queue 비우기를 위한 let 선언
  let queue = [];
  
  for(let placeIdx = 0; placeIdx < placeLength; placeIdx++) {
      const curPlace = places[placeIdx].map(curArr => curArr.split(""));
      
      // 거리두기 실패시, false 변경 예정
      let isValid = true;
      
      for(let row = 0; row < curPlace.length; row++) {
          for(let col = 0; col < curPlace[row].length; col++) {
              const curState = curPlace[row][col];
              
              if(curState === PERSON) {
                  curPlace[row][col] = EMPTY;
                  const qItem = new QItem(row, col, 0);
                  queue.push(qItem);
              }
              
              while(queue.length) {
                  const curItem = queue.shift();
                  const curY = curItem.y;
                  const curX = curItem.x;
                  const curDist = curItem.dist;
                  
                  for(let i = 0; i < directionListLength; i++) {
                      const curDirection = directionList[i];
                      
                      const nextY = curY + curDirection.y;
                      const nextX = curX + curDirection.x;
                      const nextDist = curDist + 1;
                      
                      // 대기실 크기 조건
                      if(nextY >= placeLength
                        || nextX >= placeLength
                        || nextY < 0
                        || nextX < 0
                        || nextDist > DIST_CONDITION) continue;
                                              
                      const nextState = curPlace[nextY][nextX];
                      
                      // 파티션일 경우, 현재 queue 종단점
                      if(nextState === WALL) continue;
                      
                      // 다음 Queue 아이템
                      const nextQ = new QItem(nextY, nextX, nextDist);
                      
                      // 다음공간 === "빈자리" && 기준점과 거리 < 2 이면, BFS 진행
                      if(nextState === EMPTY && nextDist <= DIST_CONDITION) {
                          queue.push(nextQ);
                          continue;
                      }
                      
                      // 다음공간 === "지원자" && 기준점과 거리 < 3 이면, "거리두기 미준수"
                      // 현재 대기실 Queue 종료
                      if(nextState === PERSON && nextDist <= DIST_CONDITION) {
                          queue = [];
                          answer[placeIdx] = 0;
                      }
                  }
              }
          }
      }
  }

  return answer;
}

const arr = [
  ["POOOP",
   "OXXOX",
   "OPXPX",
   "OOXOX",
   "POXXP"],

   ["POOPX",
   "OXPXP",
   "PXXXO",
   "OXXXO",
   "OOOPP"],
   
   ["PXOPX",
   "OXOXP",
   "OXPXX",
   "OXXXP",
   "POOXX"],
   
  ["OOOXX",
   "XOOOX",
   "OOOXX",
   "OXOOX",
   "OOOOO"],

   ["PXPXP",
   "XPXPX",
   "PXPXP",
   "XPXPX",
   "PXPXP"]
];

console.log(solution(arr));