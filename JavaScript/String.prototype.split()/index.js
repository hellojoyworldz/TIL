// 빈 문자열이 주어졌을 경우 split()은 빈 배열이 아니라 빈 문자열을 포함한 배열을 반환합니다. 
// 문자열과 separator가 모두 빈 문자열일 때는 빈 배열을 반환합니다.
let myString = ""
console.log(myString.split(" "))

// 끊는 횟수 제한하기
// 다음 예제에서 split()은 문자열을 공백으로 끊고 처음 3개의 문자열을 반환합니다.
console.log("a bc d e".split(" ", 3))

// RegExp를 사용해 구분자도 결과에 포함하기
// separator가 포획 괄호 ()를 포함하는 정규표현식일 경우, 포획된 결과도 배열에 포함됩니다.
var myString2 = "Hello 1 word. Sentence number 2.";
var splits2 = myString2.split(/(\d)/);
console.log(splits2);

// 배열을 구분자로 사용하기
var myString3 = "this|is|a|Test";
var splits3 = myString3.split(["|"]);
console.log(splits3);

var myString4 = "ca,bc,a,bca,bca,bc";
var splits4 = myString4.split(['a','b']); // 'a,b'
// myString.split(['a','b'])은 myString.split(String(['a','b']))와 같다
console.log(splits4); //["c", "c,", "c", "c", "c"]