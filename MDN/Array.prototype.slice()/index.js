// 배열 1번째 부터 3-1번째 까지 배열로 반환
let ary = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(ary.slice(1, 3))
console.log(ary)

// 문자열 1번째 부터 3-1번째 까지 문자열로 반환
let str = 'String'
console.log(str.slice(1, 3))
console.log(str)

// slice 사용하기
// 다음 예제에서 slice()는 myCar에서 newCar라는 새 배열을 만듭니다. 
// 두 가지 모두 myHonda 객체에 대한 참조를 포함합니다. myHonda의 색상이 자주색으로 변경되면 두 배열 모두 변경 사항을 반영합니다.
// Using slice, create newCar from myCar.
let myHonda = { color: "red", wheels: 4, engine: { cylinders: 4, size: 2.2 } };
let myCar = [myHonda, 2, "cherry condition", "purchased 1997"];
let newCar = myCar.slice(0, 2);
console.log(myHonda)
console.log(myCar)
console.log(newCar)

// Change the color of myHonda.
myHonda.color = "purple";
console.log(myHonda)
console.log(myCar)
console.log(newCar)
