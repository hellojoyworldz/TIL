// 함수 선언식
funcDec(); // "Function Declaration"
function funcDec() {
  console.log("Function Declaration");
}

// 함수 표현식
console.log(funcExp); // undefined
funcExp(); //  funcExp is not a function
var funcExp = function () {
  console.log("Function Expression");
};
funcExp(); // "Function Expression"

// 화살표 힘수
funcArr(); //  funcArr is not a function
let funcArr = () => {
  console.log("Function Arrow");
};
