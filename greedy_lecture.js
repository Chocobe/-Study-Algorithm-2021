const lectureList1 = [[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]];
const lectureList2 = [[3, 3], [1, 3], [2, 3]];


function calcLectureCount(lectureList) {
  let maxCount = 0;

  const sortedLectureList = lectureList.slice();

  // 1. 종료시간 오름차순(ASC) 정렬
  // 2. 종료시간이 같다면, 시작시간 오름차순(ASC) 정렬
  sortedLectureList.sort((lhs, rhs) => {
    if(lhs[1] === rhs[1]) {
      return lhs[0] - rhs[0];
    } else {
      return lhs[1] - rhs[1];
    }
  });

  let beforeEndTime = 0;

  sortedLectureList.forEach(curLecture => {
    if(curLecture[0] >= beforeEndTime) {
      beforeEndTime = curLecture[1];
      maxCount++;
    }
  });

  console.log("강의 최대 배치수: ", maxCount);
}

calcLectureCount(lectureList1);
calcLectureCount(lectureList2);

// function calcLectureCount(lectureList) {
//   let maxCount = 0;

//   const sortedLectureList = lectureList.slice();
//   sortedLectureList.sort((lhs, rhs) => {
//     if(lhs[1] === rhs[1]) {
//       return lhs[0] - rhs[0];
//     } else {
//       return lhs[1] - rhs[1];
//     }
//   });

//   let beforeEndTime = 0;

//   console.log("sortedLectureList: ", sortedLectureList);

//   sortedLectureList.forEach(curLecture => {
//     if(curLecture[0] >= beforeEndTime) {
//       beforeEndTime = curLecture[1];
//       maxCount++;

//       console.log("배치한 강의: ", curLecture);
//     }
//   });

//   console.log("강의 최대 배치수: ", maxCount);
// }

// calcLectureCount(lectureList1);
// calcLectureCount(lectureList2);