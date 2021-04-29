const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const count = 3;


function calcParametricAlgorithm(arr, count) {
  let min = Math.min(...arr);
  let max = arr.reduce((total, curValue) => total + curValue);

  let resultSize = max;

  while(min <= max) {
    let mid = Math.floor((max + min) / 2);

    let curCount = 1;
    let curSize = 0;

    for(let i = 0; i < arr.length; i++) {
      if(curSize + arr[i] <= mid) {
        curSize += arr[i];
      } else {
        curCount++;
        curSize = arr[i];
      }

      if(curCount > count) {
        break;
      }
    }

    if(curCount > count) {
      min = mid + 1;
    } else {
      resultSize = mid;
      max = mid - 1;
    }
  }

  console.log("결과: ", resultSize);
}

calcParametricAlgorithm(arr, count);

// function calcParametricAlgorithm(count, arr) {
//   let min = Math.min(...arr);
//   let max = arr.reduce((total, curValue) => total + curValue);

//   let resultSize = max;
  
//   while(min <= max) {
//     let mid = Math.floor((max + min) / 2);

//     let curCount = 1;
//     let curSize = 0;

//     for(let i = 0; i < arr.length; i++) {
//       if(curSize + arr[i] <= mid) {
//         curSize += arr[i];
//       } else {
//         curSize = arr[i];
//         curCount++;
//       }

//       if(curCount > count) {
//         break;
//       }
//     }

//     if(curCount > count) {
//       min = mid + 1;
//     } else {
//       max = mid - 1;
//       resultSize = mid;
//     }
//   }

//   console.log("결과: ", resultSize);
// }

// calcParametricAlgorithm(count, arr);