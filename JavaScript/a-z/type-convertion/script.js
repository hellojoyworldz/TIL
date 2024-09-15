// 문자로 - String()
console.log(String(1 + 2)); // '3'
console.log(String(true)); // 'true'
console.log(String(null)); // 'null'
console.log(String(undefined)); // 'undefined'
console.log(String([1, 2, 3])); // '1,2,3'
console.log(String({ a: 1 })); // '[object Object]'
console.log(String(new Date()));

// 문자로 - .toString()
let val;
console.log((1 + 2).toString()); // '3'
console.log(true.toString()); // 'true'
console.log([1, 2, 3].toString()); // '1,2,3'
console.log({ a: 1 }.toString()); // '[object Obejct]
console.log(new Date().toString());
// console.log((null).toString()) // cannot read properties of undefined
// console.log((undefined).toString()) // cannot read properties of undefined

// 숫자 - Number()
console.log(Number(1 + 2)); // 3
console.log(Number("1")); // 1
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(Number([1, 2, 3])); // NaN
console.log(Number("100.11"));

// 자바스크립트 자체변경
console.log("1" + 2); // '12'
console.log(1 * "3"); // 3
console.log("3" % "3");
