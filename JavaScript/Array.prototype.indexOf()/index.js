const array = [2, 9, 9];
array.indexOf(2); // 0
array.indexOf(7); // -1
array.indexOf(9, 2); // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0

// 희소배열에 indexOf() 사용하기
// indexOf()를 사용하여 희소 배열에서 빈 슬롯을 검색할 수 없습니다.
console.log([1, , 3].indexOf(undefined)); // -1


// 배열이 아닌 객체에서 indexOf() 호출하기
// indexOf() 메서드는 this의 length 속성을 읽은 다음 키가 length보다 작은 음수가 아닌 정수인 각 속성에 접근합니다.
const arrayLike = {
    length: 3,
    0: 2,
    1: 3,
    2: 4,
    3: 5, // length가 3이므로 indexOf()에서 무시됩니다.
};
console.log(Array.prototype.indexOf.call(arrayLike, 2));// 0
console.log(Array.prototype.indexOf.call(arrayLike, 5));// -1