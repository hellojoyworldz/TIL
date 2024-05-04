var obj1 = [{ x: 22 }]
var obj2 = [{ x: 22 }]
var obj3 = []

var res1 = obj1.reduce((acc, cur, idx, arr) => {
    console.log(acc)
    console.log(cur)
    console.log(idx)
    console.log(arr)
    return Math.max(acc.x, cur.x)
})
console.log(res1)

// 배열의 요소가 (위치와 관계없이) 하나 뿐이면서 initialValue를 제공되지 않은 경우, 
// 또는 initialValue는 주어졌으나 배열이 빈 경우엔 그 단독 값을 callback 호출 없이 반환합니다.
var res2 = obj2.reduce((acc, cur, idx, arr) => {
    console.log(acc)
    console.log(cur)
    console.log(idx)
    console.log(arr)
    return Math.max(acc.x, cur.x)
},{x:33})
console.log(res2)

// 배열이 비어있는데 initialValue도 제공하지 않으면 TypeError가 발생
/*
var res3 = obj3.reduce((acc, cur, idx, arr) => {
    console.log(acc)
    console.log(cur)
    console.log(idx)
    console.log(arr)
    return Math.max(acc.x, cur.x)
})
console.log(res3)
*/


var res4 = [0, 2, 4, 6, 8].reduce(
    function (accumulator, currentValue, currentIndex, array) {
        console.log(accumulator)
        console.log(currentValue)
        console.log(currentIndex)
        console.log(array)
        return accumulator + currentValue; // 2, 6, 12, 20
    },
);
console.log(res4)

// 객체 배열에서의 값 합산
var initialValue = 0;
var sum = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce(function (accumulator,currentValue,) {
    console.log(accumulator)
    console.log(currentValue)
    return accumulator + currentValue.x;
}, initialValue);

console.log(sum); // logs 6

// 중첩 배열 펼치기
var flattened = [
    [0, 1],
    [2, 3],
    [4, 5],
].reduce(function (accumulator, currentValue) {
    return accumulator.concat(currentValue);
}, []);
console.log(flattened)// 펼친 결과: [0, 1, 2, 3, 4, 5]