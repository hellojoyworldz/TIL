let arr1 = [undefined, null, "", 1,2,3,4,5]
console.log(arr1.join())
console.log(arr1.join(''))

const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join());// Expected output: "Fire,Air,Water"
console.log(elements.join(''));// Expected output: "FireAirWater"
console.log(elements.join('-'));// Expected output: "Fire-Air-Water"

const a = ["바람", "물", "불"];
console.log(a.join()) // '바람,물,불'
console.log(a.join(", ")) // '바람, 물, 불'
console.log(a.join(" + ")) // '바람 + 물 + 불'
console.log(a.join("")) // '바람물불

// 배열이 아닌 객체에서 join() 호출하기
// join 메서드는 this의 length 속성을 읽은 다음 키가 length보다 작은 음이 아닌 정수인 각 속성에 접근합니다.
const arrayLike = {
    length: 3,
    0: 2,
    1: 3,
    2: 4,
    3: 5, // length가 3 이므로 join()에서 무시됨.
};
console.log(Array.prototype.join.call(arrayLike)); // 2,3,4
console.log(Array.prototype.join.call(arrayLike, ".")); // 2.3.4