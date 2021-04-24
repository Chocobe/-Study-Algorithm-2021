const myArr = ["A", "B", "C"];

/**
 * @returns { void }
 * @param { string[] } arr 
 * @param { number } depth 
 * @param { number } r 
 */
function calcPermutation(sourceArr, destArr, depth, r) {
  if(depth === r) {
    let result = "";

    for(let i = 0; i < r; i++) {
      result += sourceArr[i];
    }

    destArr.push(result);
    return;
  }

  for(let i = depth; i < sourceArr.length; i++) {
    const originDepthData = sourceArr[depth];
    sourceArr[depth] = sourceArr[i];
    sourceArr[i] = originDepthData;

    calcPermutation(sourceArr, destArr, depth + 1, r);

    sourceArr[i] = sourceArr[depth];
    sourceArr[depth] = originDepthData;
  }
}

const resultArr = [];
calcPermutation(myArr, resultArr, 0, 3);
