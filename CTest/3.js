function solution(n, k, cmd) {
    let answer = "";
    
    const cmdLength = cmd.length;
    const status = Array.from({ length: n }, () => true);
    let remainCount = status.length;
    
    const deletedRepo = [];
    
    const CMD_IDX = 0;
    const VAL_IDX = 2;
    
    let curIdx = k;
    
    // console.log("D 22"[CMD_IDX]);
    // console.log("D 22".substring(VAL_IDX));
    
    const queue = [];
    
    for(let i = 0; i < cmdLength; i++) {
        const curOriginCmd = cmd[i];
        
        queue.push(curOriginCmd);
        
        while(queue.length) {
            const curQ = queue.shift();
            const curCmd = curQ[CMD_IDX];
            const curVal = curQ.substring(VAL_IDX);
        
            switch(curCmd) {
                // 위로 이동
                case "U": {
                    let upCount = Number(curVal);
                    let tempPos = curIdx;

                    while(upCount > 0) {
                        tempPos--;

                        if(status[tempPos]) {
                            upCount--;
                        }

                        if(tempPos < 0) {
                            upCount = 0;

                            for(let i = 0; i < n; i++) {
                              if(status[i]) {
                                tempPos = i;
                                break;
                              }
                            }
                        }

                        curIdx = tempPos;
                    }

                    console.log("업 결과 curIdx: ", curIdx);
                    break;
                }

                // 아래로 이동
                case "D": {
                    let downCount = Number(curVal);
                    let tempPos = curIdx;

                    while(downCount > 0) {
                        tempPos++;
                        if(status[tempPos]) {
                            downCount--;
                        }

                        if(tempPos >= n) {
                            downCount = 0;
                            
                            for(let i = n - 1; i >= 0; i--) {
                                if(status[i]) {
                                    tempPos = i;
                                    break;
                                }
                            }
                        }

                        curIdx = tempPos;
                    }

                    break;
                }

                // 삭제
                case "C": {
                    status[curIdx] = false;
                    deletedRepo.push(curIdx);
                    remainCount--;
                    
                    queue.unshift("U 1");

                    break;
                }

                // 복구
                case "Z": {
                    const rollbackIdx = deletedRepo.pop();
                    status[rollbackIdx] = true;
                    remainCount++;
                    break;
                }
            }
        }
    }
    
    console.log("status: ", status);
    
    answer = status.reduce((total, val) => {
        const curState = val === true ? "O": "X";
        return total.concat(curState);
    }, "");
    
    return answer;
}

const arr = ["D 2","C","U 3","C","D 4","C","U 2","Z","Z"];
const arr2 = ["D 2","C","U 3", "C"];
const n = 8;
const k = 2;

console.log(solution(n, k, arr2));