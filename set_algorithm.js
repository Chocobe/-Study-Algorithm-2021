const arr = [1, 3, 4, 5];

function calcCombination(arr, count) {
  const resultArr = [];
  const tempResult = Array.from({length: count}, () => 0);

  recursive(0, 0);
  return resultArr;

  function recursive(curDepth, startIdx) {
    if(curDepth >= count) {
      resultArr.push(tempResult.slice());
      return;
    }

    for(let i = startIdx; i < arr.length; i++) {
      tempResult[curDepth] = arr[i];
      recursive(curDepth + 1, i + 1);
    }
  }
}

const resultArr = calcCombination(arr, 2);
console.log(resultArr);