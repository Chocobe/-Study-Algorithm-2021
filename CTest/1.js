function solution(s) {
  let answer = s;
  
  // 숫자 목록
  const digitList = [
      "zero",
      "one",
      "two",
      "three",
      "four",
    
      "five",
      "six",
      "seven",
      "eight",
      "nine",
  ];

  for(let i = 0; i < digitList.length; i++) {
      // i 대응 문자열
      const curStr = digitList[i];
      const curRegExp = new RegExp(curStr, "g");
      
      // 대응 문자열 전체 변경
      answer = answer.replace(curRegExp, i);
  }
  
  return Number(answer);
}