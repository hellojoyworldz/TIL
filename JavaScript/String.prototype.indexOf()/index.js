"Blue Whale".indexOf("Blue"); // returns  0
"Blue Whale".indexOf("Blute"); // returns -1
"Blue Whale".indexOf("Whale", 0); // returns  5
"Blue Whale".indexOf("Whale", 5); // returns  5
"Blue Whale".indexOf("Whale", 7); // returns -1
"Blue Whale".indexOf(""); // returns  0
"Blue Whale".indexOf("", 9); // returns  9
"Blue Whale".indexOf("", 10); // returns 10
"Blue Whale".indexOf("", 11); // returns 10

// indexOf() 메서드는 대소문자를 구분합니다. 
// 예를 들면, 아래 예제는 일치하는 문자열이 없으므로 -1을 반환합니다.
"Blue Whale".indexOf("blue"); // returns -1

// 존재 여부 확인
// '0'을 평가했을 때 true가 아니고, -1을 평가했을 때 false가 아닌 것에 주의해야 합니다. 
// 따라서, 임의의 문자열에 특정 문자열이 있는지를 확인하는 올바른 방법은 다음과 같습니다.
"Blue Whale".indexOf("Blue") !== -1; // true
"Blue Whale".indexOf("Bloe") !== -1; // false


var anyString = "Brave new world";
console.log(anyString.indexOf("w"),); // 첫번째 w 문자 위치는 8
console.log(anyString.lastIndexOf("w"),); // 마지막 w 문자 위치는 10
console.log(anyString.indexOf("new"),); // 첫번째 new 문자열 위치는 6
console.log(anyString.lastIndexOf("new"),); // 마지막 new 문자열 위치는 6

// indexOf()와 대소문자 구분
var myString = "brie, pepper jack, cheddar";
var myCapString = "Brie, Pepper Jack, Cheddar";

console.log(myString.indexOf("cheddar")) // 로그에 19를 출력합니다.
console.log(myCapString.indexOf("cheddar"),); // 로그에 -1을 출력합니다.