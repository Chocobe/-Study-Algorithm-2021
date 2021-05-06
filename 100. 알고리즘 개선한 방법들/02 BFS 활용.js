/*
 * BFS 사용 시, queue 로 전달할 데이터 정의에 대해서
 *  * 연산할 현재값
 *  * ex) 좌표y, 좌표x
 *  * 현재 상태값
 *  * ex) 현재 진행방향, 현재 비용
 */

const arr = [
  [0,0,0,0,0,0,0,1],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,1,0,0],
  [0,0,0,0,1,0,0,0],
  [0,0,0,1,0,0,0,1],
  [0,0,1,0,0,0,1,0],
  [0,1,0,0,0,1,0,0],
  [1,0,0,0,0,0,0,0]
];

function solution(board) {
  const boardLength = board.length;

  // 비용 목록
  const priceList = {
    straight: 100,
    corner: 500,
  };

  // 이동 방향 목록
  const directionList = [
    // y축 이동: "v"
    { y: 1, x: 0 },
    { y: -1, x: 0 },
    // x축 이동: "h"
    { y: 0, x: 1 },
    { y: 0, x: -1 },
  ];
  const directionListLength = directionList.length;

  // 최소 비용 산정 목록
  const minCostList = Array.from({ length: boardLength }, () => {
    return Array.from({ length: boardLength }, () => Number.MAX_SAFE_INTEGER);
  });

  // Queue
  const queue = [];
  queue.push({
    y: 0,
    x: 0,
    dir: "vh",
    cost: 0,
  });

  while(queue.length) {
    const curStatus = queue.shift();
    const curY = curStatus.y;
    const curX = curStatus.x;
    const curDir = curStatus.dir;
    const curCost = curStatus.cost;

    for(let i = 0; i < directionListLength; i++) {
      const nextY = curY + directionList[i].y;
      const nextX = curX + directionList[i].x;
      const nextDir = i < 2 ? "v" : "h";
      let nextCost = curCost + priceList.straight;

      if(nextY < 0
        || nextY >= boardLength
        || nextX < 0
        || nextX >= boardLength
        || board[nextY][nextX] === 1) continue;
      
      if(curDir.indexOf(nextDir) < 0) {
        nextCost += priceList.corner;
      }

      if(nextCost <= minCostList[nextY][nextX]) {
        minCostList[nextY][nextX] = nextCost;

        const nextStatus = {
          y: nextY,
          x: nextX,
          dir: nextDir,
          cost: nextCost,
        };

        queue.push(nextStatus);
      }
    }
  }

  return minCostList[boardLength - 1][boardLength - 1];
}

console.log("결과: ", solution(arr)); // 3800