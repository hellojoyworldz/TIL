// 함수 선언식
funcDec(); // "Function Declaration"
function funcDec() {
  console.log("Function Declaration");
}

// 함수 표현식
funcExp(); //  funcExp is not a function
let funcExp = function () {
  console.log("Function Expression");
};
funcExp(); // "Function Expression"

// 화살표 힘수
funcArr(); //  funcArr is not a function
var funcArr = () => {
  console.log("Function Arrow");
};
