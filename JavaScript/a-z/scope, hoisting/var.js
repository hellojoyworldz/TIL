var a = 1;
console.log(a); // 1
var a = 2;
console.log(a); // 2

console.log(b); // undefined
var b = "b";
console.log(b); // "b"

c = "c";
console.log(c); // "c"
var c;
console.log(c); // "c"

for (var i = 0; i < 4; i++) {
  console.log(i);
  var forVal = "forVal";
}
console.log(forVal); // "forVal"
console.log(i); // 4

if (true) {
  var ifVal = "ifVal";
}
console.log(ifVal);

{
  var scope = "scope";
}
console.log(scope); // "scope"

function foo() {
  var func = "func";
  console.log(func);

  for (var j = 0; j < 2; j++) {
    console.log(func);
  }
  console.log(j);
}

foo();
// console.log(func); // ! ReferenceError: func is not defined
// console.log(j); // ! j is no defined
