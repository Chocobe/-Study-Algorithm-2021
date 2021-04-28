const money = 3980;
const coinList = [500, 100, 50, 10];

function calcCoin(money) {
  const coinCountMap = new Map();
  
  // coinCountMap 을 0 으로 초기화
  coinList.forEach(curCoin => {
    coinCountMap.set(curCoin, 0);
  });

  // 그리디 알고리즘 적용 (매 순간 최대값으로 계산)
  // 1. 500원 동전으로 환전되는 최대 개수 구하기
  // 2. 100원 동전으로 환전되는 최대 개수 구하기
  // 3. 50원 동전으로 환전되는 최대 개수 구하기
  // 4. 10원 동전으로 환전되는 최대 개수 구하기
  let remainMoney = money;

  coinList.forEach(curCoin => {
    const quotient = Math.floor(remainMoney / curCoin);
    remainMoney = remainMoney % curCoin;

    coinCountMap.set(curCoin, quotient);
  });

  for(let [key, count] of coinCountMap) {
    console.log(`${key}짜리 동전: ${count}개`);
  }
}

calcCoin(money);
