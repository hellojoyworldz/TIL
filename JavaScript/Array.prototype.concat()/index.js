const num1 = [1,2,3]
const num2 = [4,5,6]
const num3 = [7,8,9]
const numbers = num1.concat(num2,num3)
console.log(numbers)
console.log(num1)
console.log(num2)
console.log(num3)

const letters = ["a","b","c"]
const alphaNumeric1 = letters.concat([1],[2,3])
console.log(alphaNumeric1)
const alphaNumeric2 = letters.concat(1,[2,3])
console.log(alphaNumeric2)
const alphaNumeric3 = letters.concat(1,2,3)
console.log(alphaNumeric3)

const ob1 = {a:1, b:2, c:3}
console.log([0].concat(ob1))

const ary1 = [[1]]
const ary2 = [2,[3]]
const ary = ary1.concat(ary2)
console.log(ary)

// 희소 배열에 concat() 사용
// 소스 배열 중 하나라도 희소 배열이 있으면, 결과 배열도 희소 배열이 됩니다.
console.log([1,,3].concat(4,5))
console.log([1,2].concat([3,,5]))

// Symbol.isConcatSpreadable을 이용하여 유사 배열 객체 연결
// concat은 기본적으로 모든 유사 배열 객체를 배열로 취급하지 않으며, 
// Symbol.isConcatSpreadable이 참인 값(예: true)으로 설정된 경우에만 배열로 취급합니다.
const obj1 = { 0: 1, 1: 2, 2: 3, length: 3 };
const obj2 = { 0: "a", 1: 2, 2: 3, length: 3, [Symbol.isConcatSpreadable]: true };
console.log([0].concat(obj1));
console.log([0].concat(obj2));
console.log([0].concat(obj1, obj2));