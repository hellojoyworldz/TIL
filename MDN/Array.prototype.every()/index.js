const isBelowThreshold = (currentValue,idx,ary) => {
    console.log(idx)
    console.log(ary)
    return  currentValue < 40;
}
const array1 = [1, 30, 39, 29, 10, 13, 39];

console.log(array1.every(isBelowThreshold))

// 빈 슬롯에 콜백 함수 실행 X
console.log([1, , 3].every((x) => x !== undefined)); // true
console.log([2, , 2].every((x) => x === 2)); // true