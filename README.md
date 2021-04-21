##### top
# Algorithm 스터디

Javascript 를 사용한 알고리즘 스터디 저장소 입니다.

<br/>

# 목차

1. [01. Javascript API 정리](#01)

   1. [01-01. ``Number.MAX_SAFE_INTEGER``](#01-01)

   2. [01-02. ``Number.MIN_SAFE_INTEGER``](#01-02)

   3. [01-03. ``Array객체.reduce(callback[, 초기값]): 최종누적값``](#01-03)

   4. [01-04. ``String값.split()``](#01-04)

   5. [01-05. ``String값.slice()``](#01-05)

   6. [01-06. ``String값.substring()``](#01-06)

   7. [01-07. ``RegExp`` 생성자 함수](#01-07)

   8. [01-08. ``String값.match()``](#01-08)

   9. [01-09. ``Array객체.map()``](#01-09)

<br/>

2. [02. 알고리즘 정리](#02)

   1. [02-01. ``브루트포스 (Brute Force)`` - 완전탐색](#02-01)



<br/><br/>



##### 01
# 01. Javascript API 정리

Javascript API 를 정확히 사용할 수 있도록 정리 하였습니다.



<br/><br/>



##### 01-01
## 01-01. ``Number.MAX_SAFE_INTEGER``

``number`` 타입으로 안전하게 사용할 수 있는 ``가장 큰 값`` 입니다.

가장 큰 ``number`` 로 초기화 해야할 경우에 사용하게 되었습니다.

* [예제: 06 홀수.html](https://github.com/Chocobe/-Study-Algorithm-2021/blob/master/01.%20%EA%B8%B0%EB%B3%B8%EB%AC%B8%EC%A0%9C%20%ED%92%80%EC%9D%B4/06%20%ED%99%80%EC%88%98.html)

<br/>

```javascript
const largestNumber = Number.MAX_SAFE_INTEGER;

// 9007199254740991
console.log(largestNumber);
```



<br/><br/>



##### 01-02
## 01-02. ``Number.MIN_SAFE_INTEGER``

``number`` 타입으로 안전하세 사용할 수 있는 ``가장 작은 값`` 입니다.

```javascript
const samllestNumber = Number.MIN_SAFE_INTEGER;

// -9007199254740991
console.log(smallestNumber);
```



<br/><br/>



##### 01-03
## 01-03. ``Array객체.reduce(callback[, 초기값]): 최종누적값``

배열 전체에 대해 누적연산을 위한 기능 입니다.

배열의 모든 요소를 더하거나 뺴는 등, ``배열 전체의 누적결과`` 를 위한 메서드 입니다.

* ``callback(누적값, 현재값, 현재Index, 배열원본)``
  * 배열의 각 요소를 누적시키는 기능을 합니다.
  * callback 의 인자를 사용하여 ``누적값`` 에 결과를 반영 시킵니다.
  * 반영된 ``누적값`` 을 ``return`` 시켜야 합니다.

* ``초기값`` 을 명시할 경우, 시작값으로 사용됩니다.

* [예제 - 05 등수구하기.html](https://github.com/Chocobe/-Study-Algorithm-2021/blob/master/02.%20%EB%B0%B0%EC%97%B4%20%ED%83%90%EC%83%89/05%20%EB%93%B1%EC%88%98%EA%B5%AC%ED%95%98%EA%B8%B0.html)

* [MDN 링크 - Array.prototype.reduce()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

<br/>

```javascript
const arr = [1, 2, 3, 4, 5];

const sumOfOdd = arr.reduce((result, curVal) => {
  return curVal % 2 !== 0 ? result + curVal : result;
}, 0);

// 9
console.log(sumOfOdd);
```





<br/><br/>



##### 01-04
## 01-04. ``String값.split()``

문자열을 ``구분자(인자)로 분리``한 문자열 배열을 반환 합니다.

문자열을 특정 구분자로 분리해야 할 경우 유용합니다.

* ``split(구분자 [, 분리할 요소개수]): string[]``
  * ``구분자`` 로 분리한 문자열 배열을 반환 합니다.
  * ``분리할 요소개수`` 를 전달하면, 반환되는 배열길이가 ``분리할 요소개수`` 까지만 분리됩니다.
  * ``구분자`` 로 분리한 상태에서 ``앞 또는 뒤`` 에 문자열이 없으면, ``빈 문자열``이 됩니다.

* [예제 - 05 등수구하기.html](#)

* [MDN 링크 - String.prototype.split()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split)

<br/>

```javascript
const val = "aa#bb#cc#";

const result_1 = val.split("#");

// ["a", "b", "c", ""]
console.log(result_1);

const result_2 = val.split("#", 3);

// ["a", "b", "c"]
console.log(result_2);
```



<br/><br/>



##### 01-05
## 01-05. ``String값.slice()``

문자열을 인자로 전달한 ``시작 index`` 부터 ``끝 index`` 까지 추출한 문자열을 반환 합니다.

문자열의 일부분을 추출할 때 유용합니다.

* ``끝 index`` 를 전달하지 않으면, 문자열의 끝까지 추출합니다.
* ``끝 index`` 는 반환 문자열에 포함되지 않습니다.
* ``시작 index > 끝 index`` 일 경우, ``빈 문자열`` 을 반환 합니다.
* ``String값.substring()`` 과 거의 동일한 동작을 합니다. (문자열 추출)

```javascript
const val = "ABCDE";

// "BC"
console.log(val.slice(1, 3));

// "" - substring() 과 차이점
console.log(val.slice(3, 1));
```



<br/>

[🔺 Top](#top)

<br><br>



##### 01-06
## 01-06. ``String값.substring()``

문자열을 인자로 전달한 ``시작 index`` 부터 ``끝 index`` 까지 추출한 문자열을 반환 합니다.

문자열의 일부분을 추출할 때 유용합니다.

* ``끝 index`` 를 전달하지 않으면, 문자열의 끝까지 추출합니다.
* ``끝 index`` 는 반환 문자열에 포함되지 않습니다.
* ``시작 index > 끝 index`` 일 경우, 두 index 를 ``반대로 사용``하이 부분 문자열을 추출 합니다.
* * ``String값.slice()`` 와 거의 동일한 동작을 합니다. (문자열 추출)

```javascript
const val = "ABCDE";

// BC
console.log(val.substring(1, 3));

// BC - slice() 와 차이점
console.log(val.substring(3, 1));
```



<br/><br/>



##### 01-07
## 01-07. ``RegExp`` 생성자 함수

문자열을 사용하여 정규식 객체를 생성하는 함수 입니다.

정규식 생성자가 필요한 부분은, 정규식이 로직에 따라 변형되야 하는경우에 유용합니다.

* ``new RegExp(정규식문자열, 플래그)``
  * 정규식 생성자 함수 입니다.
  * ``정규식문자열`` 에는 정규식 시작/끝 문자인 ``/`` 가 없어야 합니다.
  * ``정규식문자열`` 에 ``이스케이프(\)`` 를 사용할 때는, ``\\d`` 와 같이 ``2개씩`` 사용해야 합니다.

* 리터럴 정규식일 경우에는 일반적인 정규식으로 사용하면 됩니다.

* [MDN 링크 - RegExp](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

<br/>

```javascript
const val = "Hello1, World. Hello2, World";
const regExp = new RegExp("Hello\\d", "g");

const result = val.match(regExp);

// ["Hello1", "Hello2"]
console.log(result);
```


<br/><br/>



##### 01-08
## 01-08. ``String값.match()``

문자열이 ``정규식`` 과 일치하는 부분을 배열로 반환 합니다.

* ``match(정규식)``
  * ``정규식`` 인자에는 ``정규식 객체`` 를 받습니다.
  * ``정규식`` 의 ``Flag`` 에 ``g (global)`` 이 없으면, ``exec()`` 와 동일한 동작이 됩니다.
  * 실행 결과는 매치되는 ``문자열 배열`` 을 반환 합니다.

* [MDN 링크 - String.prototype.match()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/match)

<br/>

```javascript
const val = "Hello World@, Hello World#";
const regExp = /World./g;

const result = val.match(regExp);

// ["World@", "World#"]
console.log(result);
```



<br/>

[🔺 Top](#top)

<br/><br/>



##### 01-09
## 01-09. ``Array객체.map()``

배열내의 모든 요소에 대하여, callback 의 반환값으로 구성된 새로운 배열을 반환 합니다.

배열의 각각의 요소를 가공한 결과를 배열로 만들 때 유용합니다.

<br/>

map() 함수의 스펙은 다음과 같습니다.

* ``map(callback(현재값, 인덱스, 대상배열객체), thisArg): Array<any>``
    * ``현재값``: 현재 대상 배열요소 입니다.
    * ``인덱스``: 현재 대상의 인덱스 번호 입니다.
    * ``대상배열객체``: map() 메서드를 호출한 원본 배열객체 입니다.

<br/>

```javascript
const myArr = [1, 2, 3, 4, 5];

function printEvenOdd(arr) {
  const parsedArr = arr.map(curValue => {
    return curValue % 2 === 0 ? "Event" : "Odd";
  });

  // ["Odd", "Event", "Odd", "Event", "Odd"]
  console.log(parsedArr);
}
```



<br/>

[🔺 Top](#top)

<br/><br/>



##### 02
# 2. 알고리즘 정리

문제해결에 접목된 알고리즘을 정리 하였습니다.

<br/>

##### 02-01
## 02-01. ``브루트포스 (Brute Force)`` - 완전탐색

가능한 모든 경우의 수를 탐색하여, 조건에 맞는 결과를 만드는 알고리즘 입니다.

모든 경우의 수를 탐색하기 때문에 ``완전탐색`` 이라고도 합니다.

<br/>

2차원 배열이 있다면, ``2개의 중첩 for문`` 으로 탐색하는 방식이 됩니다.

<br/>

``Brute Force`` 로 문제해결을 하기 위해서는 다음과 같은 과정을 거치도록 해야 합니다.

1. 주어진 문제를 ``선형구조`` 형식의 데이터로 변환 합니다.

2. 변환된 ``선형구조`` 를 시작부터 끝까지 ``모두`` 탐색하여 조건에 맞는 결과를 도출 합니다.

3. 최종 도출된 결과를 정리 합니다. (원하는 형식으로)

<br/>

``Brute Force`` 를 이미지로 표현하면 다음과 같습니다.

<img src="./assets/01_브루트포스_01.png" width="500px"><br/>



<br/>

[🔺 Top](#top)

<br/><br/>



