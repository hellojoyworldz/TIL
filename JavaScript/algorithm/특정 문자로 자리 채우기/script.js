let num = 1
let num2 = 12

// 두 자리 수 문자
let doubleDigit = num2.toString().padStart(2,"0")
console.log(doubleDigit)

// 세 자리 수 문자
let threeDigit = num.toString().padStart(3,"0")
console.log(threeDigit)

// 앞자리 특정 문자로 채우기
console.log("hello".padStart(10,"X"))
