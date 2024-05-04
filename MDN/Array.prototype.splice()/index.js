// 5번째부터 제거
let ary1 = [3,5,7,9,13,6,9,0]
console.log(ary1.splice(5))
console.log(ary1)

// 5번째 제거
let ary2 = [3,5,7,9,13,6,9,0]
console.log(ary2.splice(5,1))
console.log(ary2)

// 3번째부터 2개 제거하기
let ary3 = [3,5,7,9,13,6,9,0]
console.log(ary3.splice(3,2))
console.log(ary3)

// 3번째에 15 추가
let ary4 = [3,5,7,9,13,6,9,0]
console.log(ary4.splice(3,0,15))
console.log(ary4)

// 3번째 제거하고 15,8 추가
let ary5 = [3,5,7,9,13,6,9,0]
console.log(ary5.splice(3,1,15,8))
console.log(ary5)

// -3번째 부터 제거하기
let ary6 = [3,5,7,9,13,6,9,0]
console.log(ary6.splice(-3))
console.log(ary6)

// -3번째 부터 4개 제거허하기 (-3번째 부터이기 때문에 최대 3개까지만 제거됨)
let ary7 = [3,5,7,9,13,6,9,0]
console.log(ary7.splice(-3,4))
console.log(ary7)

// -3번째에 -3 추가 -> -4번째에 추가됨
let ary8 = [3,5,7,9,13,6,9,0]
console.log(ary8.splice(-3,0,-3))
console.log(ary8)

// -3번째 제거하고 -3 추가
let ary9 = [3,5,7,9,13,6,9,0]
console.log(ary9.splice(-3,1,-3))
console.log(ary9)
