const expression = "100-200*300-500+20"; // 60420

function solution(expression) {
  let answer = 0;

  const regExp = /[*+-]/g;

  const operatorList = expression.match(regExp);
  const operatorSet = new Set(operatorList);
  const priorityList = execPermutation(Array.from(operatorSet));

  console.log("priorityList: ", priorityList);

  const numList = expression.split(regExp).map(value => {
    return Number(value);
  });

  for(let i = 0; i < priorityList.length; i++) {
    const curPriorityList = priorityList[i];
    const clonedNumList = numList.slice();
    const clonedOperatorList = operatorList.slice();

    while(curPriorityList.length) {
      const curOperator = curPriorityList.shift();
      
      for(let j = 0; j < clonedOperatorList.length; j++) {
        if(curOperator !== clonedOperatorList[j]) continue;

        const lhs = clonedNumList[j];
        const rhs = clonedNumList[j + 1];
        let curResult = 0;
        
        switch(curOperator) {
          case "*": {
            curResult = lhs * rhs;
            break;
          }

          case "+": {
            curResult = lhs + rhs;
            break;
          }

          case "-": {
            curResult = lhs - rhs;
            break;
          }
        }

        clonedNumList.splice(j, 2, curResult);
        clonedOperatorList.splice(j, 1);
        j = -1;
      }
    }

    console.log("중간결과: ", clonedNumList);
    answer = Math.max(answer, Math.abs(clonedNumList[0]));
  }

  return answer;
}

function execPermutation(operatorList) {
  const result = [];
  const queue = [];
  queue.push([]);

  while(queue.length) {
    const q = queue.shift();

    for(let i = 0; i < operatorList.length; i++) {
      const clonedPriorityList = q.slice();
      const curOperator = operatorList[i];

      if(clonedPriorityList.includes(curOperator)) continue;

      clonedPriorityList.push(curOperator);

      if(clonedPriorityList.length === operatorList.length) {
        result.push(clonedPriorityList);
        continue;
      }

      queue.push(clonedPriorityList);
    }
  }
  
  return result;
}

console.log(solution(expression));