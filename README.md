##### top
# Algorithm 스터디

Javascript 를 사용한 알고리즘 스터디 저장소 입니다.



<br/>

# 목차

01. [Javascript API 정리](#01)

    * [01-01. ``Number.MAX_SAFE_INTEGER``](#01-01)
    * [01-02. ``Number.MIN_SAFE_INTEGER``](#01-02)
    * [01-03. ``Array객체.reduce(callback[, 초기값]): 최종누적값``](#01-03)
    * [01-04. ``String값.split()``](#01-04)
    * [01-05. ``String값.slice()``](#01-05)
    * [01-06. ``String값.substring()``](#01-06)
    * [01-07. ``RegExp`` 생성자 함수](#01-07)
    * [01-08. ``String값.match()``](#01-08)
    * [01-09. ``Array객체.map()``](#01-09)
    * [01-10. ``Set``](#01-10)
    * [01-11. ``Map``](#01-11)
    * [01-12. ``배열의 구조분해``](#01-12)
    * [01-13. 배열의 구조분해 ``초기값`` 설정](#01-13)
    * [01-14. 배열의 구조분해 중 ``일부값 무시하기``](#01-14)
    * [01-15. ``객체의 구조분해``](#01-15)

<br/>

2.  [알고리즘 정리](#02)

    * [02-01. ``브루트포스 (Brute Force)`` - 완전탐색](#02-01)
    * [02-02. ``투 포인터 (Two Pointer)``](#02-02)
    * [02-03. ``슬라이딩 윈도우 (Sliding Window)``](#02-03)
    * [02-04. ``선택정렬 (Selection Sort)``](#02-04)
    * [02-05. ``버블정렬 (Bubble Sort)``](#02-05)

<br/>

03. [수학개념 정리](#03)

    * [03-01. ``경우의 수 용어정리``](#03-01)
    * [03-02. ``합의 법칙``](#03-02)
    * [03-03. ``곱의 법칙``](#03-03)
    * [03-04. ``순열``](#03-04)



<br/><br/>

<hr/>


##### 01
# 01. Javascript API 정리

Javascript API 를 정확히 사용할 수 있도록 정리 하였습니다.



<br/><br/><hr/>



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



<br/>

[🔺 Top](#top)

<br><br><hr/>



##### 01-02
## 01-02. ``Number.MIN_SAFE_INTEGER``

``number`` 타입으로 안전하세 사용할 수 있는 ``가장 작은 값`` 입니다.

```javascript
const samllestNumber = Number.MIN_SAFE_INTEGER;

// -9007199254740991
console.log(smallestNumber);
```



<br/>

[🔺 Top](#top)

<br><br><hr/>



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



<br/>

[🔺 Top](#top)

<br><br><hr/>



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



<br/>

[🔺 Top](#top)

<br><br><hr/>



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

<br><br><hr/>



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



<br/>

[🔺 Top](#top)

<br><br><hr/>



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


<br/>

[🔺 Top](#top)

<br><br><hr/>



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

<br><br><hr/>



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

<br><br><hr/>



##### 01-10
## 01-10. ``Set``

``Set`` 은 서로 다른 타입의 데이터를 묶을 수 있는 객체 입니다.

``Array`` 와 차이점은 다음과 같습니다.
  * 중복된 값을 저장할 경우, 반영되지 않습니다.
  * 다양한 타입을 복합으로 가질 수 있습니다.


<br/>

``Set 객체`` 는 다음 속성과 메서드를 사용할 수 있습니다.

1. ``size`` : ``Set 객체`` 에 들어있는 데이터 개수 입니다.

2. ``add(값)`` : ``Set 객체`` 에 데이터를 추가 합니다. (이미 존재하는 값은 적용되지 않습니다)

3. ``clear()`` : ``Set 객체`` 의 데이터를 모두 삭제 합니다.

4. ``delete(값)`` : ``값`` 을 삭제 합니다.

5. ``has(값)`` : ``값`` 이 존재할 경우, ``true`` 를 반환 합니다.

6. ``values()`` : ``Set 객체`` 의 모든 값을 ``Iterable 객체`` 로 반환 합니다.

<br/>

다음은 ``Set`` 을 사용하는 예제 입니다.

```javascript
const mySet = new Set();
mySet.add(1);
mySet.add("Hello");
mySet.add(true);

const myIterable = mySet.values();

while(true) {
  const curSet = myIterable.next();

  if(curSet.done) {
    break;
  }

  console.log(curSet.value);
}

// 1, "Hello", true
```

```javascript
const mySet = new Set();
mySet.add(1);
mySet.add("Hello");
mySet.add(false);

const myArr = Array.from(mySet);

for(let value of myArr) {
  console.log(value);
}

// 1, "Hello", false
```


<br/>

[🔺 Top](#top)

<br><br><hr/>



##### 01-11
## 01-11. ``Map``

``key`` 와 ``value`` 의 쌍을 저장하는 ``Collection`` 입니다.

``key`` 를 사용해서 ``value`` 를 가져오는 형식은 ``객체`` 와 유사하지만, ``Map`` 은 ``객체`` 와 차이점이 있습니다.

||Map|객체|
|---:|:---|:---|
|키 자료형|함수, 객체 등, ``모든값`` 사용가능|``String`` 또는 ``Symbol`` 사용가능|
|키 순서|입력 순 유지|ECMAScript 201 이후 버전만 순서 유지|
|항목 수|size 속성|Object.keys(객체) 로 구해야 함|
|성능|키-값 ``추가`` / ``삭제`` 에서 ``더 좋은 성능``을 가짐|키-값 ``추가`` / ``삭제`` 에 대한 ``최적화 미지원``|

<br/>

``Map`` 의 인스턴스 메서드는 다음과 같습니다.

1. ``has("키")`` : ``키`` 에 대한 ``키/값`` 이 존재하면 ``true`` 를 반환 합니다.
2. ``get("키")`` : ``키`` 에 해당하는 ``값`` 을 반환하며, ``키`` 가 없으면, ``undefined`` 를 반환 합니다.
3. ``set("키", "값")`` : ``키/값`` 쌍을 저장 합니다. (이미 존재하면, ``덮어씁니다``)
4. ``delete("키")`` : ``키`` 해당하는 ``키/값`` 쌍을 삭제 하고, 대상 ``키`` 가 없었다면 ``false`` 를 반환 합니다.
5. ``clear()`` : ``Map`` 을 완전히 비웁니다. (모든 ``키/값`` 을 삭제 합니다)

<br/>

``Map`` 을 사용한 예시는 다음과 같습니다.

```javascript
const myMap = new Map();
myMap.set("foo", 123);
myMap.set("bar", "Hello, Map");

// foo 출력
if(myMap.has("foo")) {
  console.log(myMap.get("foo"));
}
```

<br/>

``Map`` 을 ``for ~ of`` 문을 사용하면, ``key/value`` 쌍을 ``[key, value]`` 의 1차원 배열로 접근할 수 있습니다.

```javascript
const myMap = new Map();
myMap.set("foo", 123);
myMap.set("bar", "Hello, Map");

for(let keyValue of myMap) {
  console.log(keyValue);
  // ["foo", 123]
  // ["bar", "Hello, Map"]
  // 출력
}
```

<br/>

``Map`` 의 ``for ~ of`` 문의 ``key/value`` 는 다음과 같이 접근할 수도 있습니다.

```javascript
const myMap = new Map();
myMap.set("foo", 123);
myMap.set("bar", "Hello, Map");

for(let [key, value] of myMap) {
  console.log("key: ", key);
  console.log("value: ", value);
}
```



<br/>

[🔺 Top](#top)

<br><br><hr/>



##### 01-12
## 01-12. 배열의 구조분해

구조분해 표현식(문법)은 ``ES2015`` 버전에 추가된 기능 입니다.

배열 또는 객체가 가진 속성들을 바로 추출할 수 있는 기능 입니다.

다음과 같은 배열이 있다면, 각 요소에 하나씩 접근해야 했습니다.

```javascript
const foo = [1, 2, 3];
const a = foo[0];
const b = foo[1];
const c = foo[2];
```

<br/>

위의 ``foo`` 배열에 ``배열의 구조분해`` 를 사용하면, 다음과 같이 코드를 축약 시킬 수 있습니다.

```javascript
const foo = [1, 2, 3];
const [a, b, c] = foo;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
```

<br/>

``배열의 구조분해`` 를 활용하면, 두 변수의 ``값 교환`` 도 간편하게 처리할 수 있습니다.

``ES5`` 이하에서 두 변수의 값 교환은 다음과 같이 작성 하였습니다.

```javascript
let a = "Hello";
let b = "Javascript";

// 값 교환
const temp = a;
a = b;
b = temp;

console.log(a) // "Hello"
console.log(b) // "Javascript";
```

<br/>

``배열의 구조분해`` 를 활용한 ``값 교환`` 은 다음과 같이 간편하게 처리할 수 있습니다.

```javascript
let a = "Hello";
let b = "World";

// 값 교환
[a, b] = [b, a];

console.log(a); // "World"
console.log(b); // "Hello"
```

<br/>

위 코드의 flow 는 다음과 같습니다.

1. 새로운 배열 ``[b, a]`` 를 생성 합니다.
2. 새로운 배열을 ``구조분해`` 하여, ``동일한 index`` 위치 변수에 대입 합니다.

결과적으로 변수 2개를 ``배열 구조분해`` 로 ``값 교환`` 을 하게 됩니다.



<br/>

[🔺 Top](#top)

<br><br><hr/>



##### 01-13
## 01-13. 배열의 구조분해 ``초기값`` 설정

배열의 구조분해 시, 대입하려는 변수의 개수가 구조분해할 배열의 요소개수 보다 클 경우, ``undefined`` 값이 들어가게 됩니다.

아래 코드는 ``c`` 변수가 ``undefined`` 가 됩니다.

```javascript
const foo = [1, 2];

let [a, b, c] = foo;

console.log(a); // 1
console.log(b); // 2
console.log(c); // undefined
```

<br/>

위와같은 경우, ``undefined`` 일 때 사용할 ``default 값`` 을 지정할 수 있습니다.

다음 코드는 ``c`` 변수가 ``undefined`` 가 되야 하지만, ``default 값`` 설정으로 ``undefined`` 대신 ``333`` 이 대입된 코드 입니다.

```javascript
const foo = [1, 2];

let [a = 111, b = 222, c = 333] = foo;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 333
```



<br/>

[🔺 Top](#top)

<br><br><hr/>



##### 01-14
## 01-14. 배열의 구조분해 중 ``일부값 무시하기``

배열의 구조분해 시, 해당 배열의 요소를 차례대로 분해하게 됩니다.

분해된 요소 중, 특정 부분을 무시(건너뛰기) 하려면, 대입할 변수를 ``비워두면`` 됩니다.

다음 코드는 배열의 구조분해 일부값 무시하기 예제 입니다.

```javascript
const foo = [1, 2, 3];

let [a, , b] = foo;

console.log(a); // 1
console.log(b); // 3
```

<br/>

위 코드에서 확인한 결과, ``foo`` 배열의 두번째 요소를 대입할 변수를 ``비워둔 상태`` 로 다음 변수를 지정 하였습니다.

> ``let [a, , b]``



<br/>

[🔺 Top](#top)

<br><br><hr/>



##### 01-15
## 01-15. ``객체의 구조분해``

구조분해 표현식(문법)은 ``객체`` 에도 사용할 수 있습니다.

배열의 구조분해와 표현식(문법) 이 약간 다른 부분은 두가지 입니다.

1. 대괄호 ``[]`` 대신, ``중괄호 {}`` 를 사용 합니다.
2. 구조분해하여 가져올 요소는 ``원본 배열의 속성명`` 으로 명시해야 합니다.

<br/>

다음 코드는 객체의 구조분해 예시 입니다.

```javascript
const bar = {
  a: 1,
  b: 2,
};

const {a, c, b, d} = bar;

console.log(a); // 1
console.log(b); // 2
console.log(c): // undefined
console.log(d); // undefined
```

<br/>

즉, 구조분해할 객체의 ``속성명과 동일한`` 변수에 값을 담게 됩니다.

<br/>

만약, ``객체의 구조분해`` 값들을 ``새로운 변수`` 또는 ``기존 변수`` 에 담으려면, 다음과 같이 작성할 수 있습니다.

```javascript
const bar = {
  a: 1,
  b: 2,
}

const {a: x, b: y} = bar;

console.log(x); // 1
console.log(y); // 2

console.log(a); // throw Error
```

<br/>

또한 구조분해한 요소들 중 ``존재하지 않는 요소`` 일 경우, ``default 값`` 을 지정할 수 있습니다.

```javascript
const bar = {
  a: 1,
  b: 2,
};

const {a: x = 111, b: y: 222, c: z = 333};

console.log(x); // 1
console.log(y); // 2
console.log(z); // 333
```



<br/>

[🔺 Top](#top)

<br><br><hr/>



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

<br><br><hr/>



##### 02-02
## 02-02. ``투 포인터 (Two Pointer)``

1차원 배열에 접근할 때, ``두개의 포인터`` 를 사용하여 결과를 얻는 알고리즘 입니다.

두개의 포인터는 ``시작 포인터`` 와 ``끝 포인터`` 를 두고 사용 합니다.

```javascript
let start = 0;
let end = 0;
```

<br/>

조건에 따라 ``start`` 또는 ``end`` 를 증가 시켜서 ``시간복잡도`` 를 줄이는데 효과 적입니다.

(``Brute Force`` 로 구현한 로직을 ``Two Pointer`` 로 작성하면 시간복잡도를 줄이게 됩니다)

<br/>

``Two Pointer`` 알고리즘을 이미지로 표현하면 다음과 같습니다.

<img src="./assets/02_브루트포스_01.png"><br/>



<br/>

[🔺 Top](#top)

<br><br><hr/>



##### 02-03
## 02-03. ``슬라이딩 윈도우 (Sliding Window)``

``슬라이딩 윈도우 (Sliding Window)`` 알고리즘은 ``배열`` 또는 ``리스트`` 에서 ``일정범위의 연산값`` 을 비교할 때 유용합니다.

비교할 연산은 ``일정한 범위`` 를 가지므로, 연산 범위를 이동시키는 방식의 알고리즘 입니다.

```javascript
const arr = [1, 2, 3, 4];
const range = 3;

let maxSum = 0;
let curSum = 0;

// 1. 일정범위 (range) 의 합을 먼저 구합니다.
// (첫번째 범위의 연산값)
for(let i = 0; i < range; i++) {
  curSum += arr[i];
}

maxSum = curSum;

// 2. start 값이 (arr.length - range) 이하까지 반복합니다.
// 시작 index값을 증가 시키며, 시작 index를 기준으로 ``range`` 만큼 ``연산`` 하게 됩니다.
// ``end`` 를 기준으로 Sliding Window 알고리즘이 진행 됩니다.
for(let end = range; end < arr.length; end++) {
  curSum += arr[end];
  curSum -= arr[end - range];

  if(curSum > maxSum) {
    maxSum = curSum
  }
}

console.log("maxSum: ", maxSum);
```

<br/>

<img src="./assets/03_슬라이딩%20윈도우_01.png"><br/>



<br/>

[🔺 Top](#top)

<br><br><hr/>



##### 02-04
## 02-04. ``선택정렬 (Selection Sort)``

선택정렬은 ``교환 기준을 고정`` 한 상태로 정렬하는 방법 입니다.

선택정렬을 흐름은 다음과 같습니다.

<img src="./assets/04_선택정렬_01.png"><br/>

원리는 다음과 같습니다.

1. ``첫번쨰`` 요소를 ``기준`` 으로 정합니다.
2. ``두번쨰`` 요소부터 ``마지막`` 요소까지 크기를 비교합니다.
3. ``정렬방식 (ASC | DES)`` 에 따라, 두 요소를 교환 합니다.
4. ``기준`` 요소가 ``마지막`` 요소가 될 때까지 반복하여 교환 합니다.

<br/>

위 원리는 코드로 작성하면 다음과 같습니다.

```javascript
const arr = [3, 1, 2, 8, 7];

function sortBySelection(arr) {
  for(let i = 0; i < arr.length - 1; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
}

sortBySelection(arr);
console.log(arr) // [1, 2, 3, 7, 8]
```

<br/>

구현은 간단하지만, 시간복잡도가 ``n^2`` 이라는 단점이 있습니다.



<br/>

[🔺 Top](#top)

<br><br><hr/>



##### 02-05
## 02-05. ``버블정렬 (Bubble Sort)``

버블정렬은 ``인접한 두 값`` 을 비교하여 정렬하는 방법 입니다.

버블정렬의 흐름은 다음과 같습니다.

<img src="./assets/05_버블정렬_01.png"><br/>

원리는 다음과 같습니다.

1. ``첫번째`` 요소와 ``그다음`` 요소를 비교 합니다.
2. ``두번째`` 요소와 ``그다음`` 요소를 비교 합니다.
3. 위 작업을 반복하여 ``마지막 전`` 요소와 ``마지막`` 요소를 비교 합니다.
   * 오름차순(ASC) 이라면 마지막에 위치하게 되는 값이 ``최대값``이 됩니다.
4. 위 작업을 반복하되, ``마지막 전전`` 요소와 ``마지막 전`` 요소의 비교까지만 반복 합니다.
   * 오름차순(ASC) 이라면, 마지막 전에 위치하게 되는 값이 ``두번째 큰 값`` 이 됩니다.
5. 위 과정을 반복하여, ``마지막 요소가`` 배열의 ``두번째`` 요소가 될 때까지 반복하면, 정렬이 완료 됩니다.

<br/>

위 원리는 코드로 작성하면 다음과 같습니다.

```javascript
const arr = [3, 1, 2, 8, 7];

function sortByBubble(arr) {
  for(let i = arr.length - 1; i > 0; i--) {
    for(let j = 0; j < i; j++) {
      if(arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

sortByBubble(arr);
console.log(arr); // [1, 2, 3, 7, 8]
```

<br/>

버블정렬 역시, 시간복잡도는 ``n^2`` 입니다.



<br/>

[🔺 Top](#top)

<br><br><hr/>



##### 03
## 03. [수학개념 정리](#03)

알고리즘을 위한 수학개념 정리 입니다.

<br/>

##### 03-01
## 03-01. ``경우의 수`` 용어정리

경우의 수는 어떤 사건이 발생할 수 있는 모든 경우의 개수를 말합니다.

<br/>

경우의 수 관련 용어는 다음과 같습니다.

* ``시행`` : 어떤 결과가 ``우연에 지배되는`` 실험 또는 관찰 을 말합니다.
* ``표본공간`` : 시행으로 발생할 수 있는 ``모든 결과`` 의 ``집합`` 을 말합니다.
* ``사건`` : 시행의 결과 중, ``특정 조건`` 을 말합니다.
    * ``사건`` 은 ``시행 내`` 에서의 ``조건`` 이므로, ``표본공간의 부분집합`` 이 됩니다.
* ``경우의 수`` : ``사건의 개수`` 를 말합니다.

<br/>

위 용어에 대한 예를 들면 다음과 같습니다.

``주사위를 던져서 나오는 수가 3이하가 나오는 경우의 수는 얼마인가?``

* ``시행`` : 주사위를 던진다.
* ``표본공간`` : 주사위 값의 집합 => { 1, 2, 3, 4, 5, 6 }
* ``사건`` : ``3이하일 경우`` => { 1, 2, 3 }
* ``경우의 수`` : ``사건`` 의 수 => 3가지



<br/>

[🔺 Top](#top)

<br><br><hr/>



##### 03-02
## 03-02. ``합의 법칙``

사건 A, B 가 있을 때, 두 사건이 ``동시에 일어나지 않는 경우``, 이때의 경우의 수를 구하는데 적용되는 법칙을 ``합의 법칙`` 이라고 합니다.

즉, 사건 A가 발생할 경우에는 사건 B는 발생하지 않습니다.

또한 사건 B가 발생할 경우, 사건 A는 발생하지 않습니다.

이러한 경우는 ``각각의 사건에 대한 경우의 수`` 의 ``합`` 이 ``경우의 수`` 가 됩니다.

* n(A): 사건 A의 경우의 수
* n(B): 사건 B의 경우의 수

<br/>

위 설명의 예를 들면 다음과 같습니다.

> 주사위 두개를 던저서, 눈의 합이 5 또는 10이 되는 경우의 수는?

1. 사건 A: 눈의 합이 5인 경우 => n(A): 4가지
2. 사건 B: 눈의 합이 10인 경우 => n(B): 3가지
3. 사건 A 또는 사건 B가 발생할 경우의 수: n(A) + n(B) => 4 + 3 => 7가지

<br/>

위 예제에서 처럼 두 사건의 ``교집합이 없는`` 집합들의 합집합은 ``교집합이 공집합`` 이므로, 각 사건의 ``경우의 수 합`` 이 결과 경우의 수가 됩니다.
    
* 눈의 합이 5 이면서 10인 경우 === ``공집합``

<br/>

``합의 법칙`` 이 적용되는 상황에서의 ``경우의 수`` 는 **각 사건의 경우의 수의 합** 이 경우의 수가 됩니다.



<br/>

[🔺 Top](#top)

<br><br><hr/>



##### 03-03
## 03-03. ``곱의 법칙``

두 사건 A, B 가 있을 때, 두 사건이 ``연이어 (잇달아)`` 발생하는 경우에 적용되는 법칙을 ``곱의 법칙`` 이라고 합니다.

즉, 사건 A의 경우 하나당, 사건 B가 모두 일어날 수 있는 상황에 적용 됩니다.

<br/>

위 설명에 대한 예제는 다음과 같습니다.

> P 에서 Q까지 갈 수 있는 방법은 2가지이고, Q 에서 R 까지 갈 수 있는 방법은 4가지 일 때, P 에서 R 까지 갈 수 있는 경우의 수는?

* 사건A: P 에서 Q 까지 갈 수 있는 경우: n(A) => 2가지
* 사건B: Q 에서 R 까지 갈 수 있는 경우: n(B) => 4가지
* n(A) * n(B) 의 경우의 수: 2 * 4 => 8가지

<br/>

> 96의 양의 약수의 개수는?

먼저 96을 소인수 분해하여, 약수를 만들 수 있는 집합으로 변환 합니다. ``2^5 * 3^1``

* 사건A: { 2^0, 2^1, 2^2, 2^3, 2^4, 2^5 }
* 사건B: { 3^0, 3^1 }

어떤 수의 약수가 된다는 것은 사건A와 사건B의 ``곱의 법칙`` 에 의해 구할 수 있습니다.

* n(A) * n(B): 6 * 2 => 12가지



<br/>

[🔺 Top](#top)

<br><br><hr/>



##### 03-04
## 03-04. ``순열``

순열이란, ``순서를 고려하여, 특정 개수를 선택하고, 나열하는 방법의 수`` 를 구하는 방법을 말합니다.

집합 A가 { 1, 2 } 일 때, 2개를 선택하는 순열을 구하면 2가 됩니다.

순서를 고려하기 때문에 (1, 2) 와 (2, 1) 은 다른 경우가 되고, 순열은 2가 됩니다.

<br/>

순열을 구하기 위한 정보는 다음과 같습니다.

* 선택할 수 있는 총 개수: n
* 1회에 선택할 개수: r

<br/>

위 정보를 실제 집합에서의 순서쌍으로 표현하면 다음과 같습니다.

* 집합 A: { 1, 2, 3, 4, 5 }
* 선택할 수 있는 총 개수 n: 5
* 선택할 개수 r: 3
* <small>5</small>P<small>3</small>

```bash
1 ┬─ 2 ┬─ 3   2 ┬─ 1 ┬─ 3   3 ┬─ 1 ┬─ 2   4 ┬─ 1 ┬─ 2   5 ┬─ 1 ┬─ 2
  │    ├─ 4     │    ├─ 4     │    ├─ 4     │    ├─ 3     │    ├─ 3
  │    └─ 5     │    └─ 5     │    └─ 5     │    └─ 5     │    └─ 4
  │             │             │             │             │
  ├─ 3 ┬─ 2     ├─ 3 ┬─ 1     ├─ 2 ┬─ 1     ├─ 2 ┬─ 1     ├─ 2 ┬─ 1
  │    ├─ 4     │    ├─ 4     │    ├─ 4     │    ├─ 3     │    ├─ 3
  │    └─ 4     │    └─ 5     │    └─ 5     │    └─ 5     │    └─ 4
  │             │             │             │             │
  ├─ 4 ┬─ 2     ├─ 4 ┬─ 1     ├─ 4 ┬─ 1     ├─ 3 ┬─ 1     ├─ 3 ┬─ 1
  │    ├─ 3     │    ├─ 3     │    ├─ 2     │    ├─ 2     │    ├─ 2
  │    └─ 5     │    └─ 5     │    └─ 5     │    └─ 5     │    └─ 4
  │             │             │             │             │
  └─ 5 ┬─ 2     └─ 5 ┬─ 1     └─ 5 ┬─ 1     └─ 5 ┬─ 1     └─ 4 ┬─ 1
       ├─ 3          ├─ 3          ├─ 2          ├─ 2          ├─ 2
       └─ 4          └─ 4          └─ 4          └─ 3          └─ 3
```

<br/>

순열을 표현하는 기호는 ``P`` 를 사용 합니다. (P: ``Permutation``)

``P`` 기호의 좌측 숫자는 ``선택할 수 있는 개수: n`` 을 나타냅니다.

``P`` 기호의 우측 숫자는 ``한번에 선택할 개수: r`` 을 나타냅니다.

<br/>

순열의 공식은 다음과 같습니다.

```bash
1. n! / (n - r)!
2. n * (n - 1) * (n - 2) * ... * (n - r + 1)
3. 0! === 1
4. n === r => n!
  * n === 5 , r === 5 => 5!
```

<br/>

다음은 순열 계산에 대한 예제 입니다.

1. 집합 { 1, 2, 3 } 에서, 2개씩 선택하여 배치하는 방법은 몇가지 인가?

```bash
n: 3
r: 2

* 풀이 1)
  n! / (n - r)!
  === 3! / (3 - 2)!
  === (3 * 2 * 1) / (1)!
  === (3 * 2 * 1) / 1
  === 3 * 2 * 1
  === 6가지

* 풀이 2)
  n * (n - 1) * ... * (n - r)
  === 3 * (3 - 1) * (3 - 2)
  === 3 * 2 * 1
  === 6가지

1 ┬─ 2 ── 3
  └─ 3 ── 2
2 ┬─ 1 ── 3
  └─ 3 ── 1
3 ┬─ 1 ── 2
  └─ 2 ── 1
```

<br/>

2. 10개 과목 중 전공과 부전공을 선택할 수 있는 경우의 수는?

```bash
n: 10
r: 2

* 풀이 1)
  n! / (n - r)!
  === 10! / (10 - 2)!
  === 10! / 8!
  === 10 * 9
  === 90가지

* 풀이 2)
  n * (n - 1) * ... * (n - r + 1)
  === 10 * (10 - 1)
  === 10 * 9
  === 90가지
```

<br/>

Javascript 로 구현하면, 다음과 같습니다.

```javascript
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

console.log("resultArr: ", resultArr);

```

[원본파일](https://github.com/Chocobe/-Study-Algorithm-2021/blob/master/permutation.js)



<br/>

[🔺 Top](#top)

<br><br><hr/>
