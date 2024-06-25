// 문자열 배열로 만들기
var txt = "abcde"
var txtArray = txt.split('')
console.log(txtArray)

var txtArray2 = [...txt]
txtArray2.push("f")
console.log(txtArray2)


