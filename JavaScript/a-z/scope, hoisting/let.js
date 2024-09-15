let a;
console.log(a); // undefined

// console.log(b); // ! ReferenceError: Cannot access 'a' before initialization
let b = 1;

{
  let a = "a";
  console.log(a);
}

for (let i = 0; i < 4; i++) {
  console.log(i);
  let forVal = "forVal";
}
// console.log(forVal); // forVal is not defined
// console.log(i); // i is not defined

if (true) {
  let ifVal = "ifVal";
}
// console.log(ifVal); //ifVal is not defined

function foo() {
  let func = "func";
  console.log(func); // func

  for (let j = 0; j < 2; j++) {
    console.log(func);
  }
  console.log(j); // ! j is not defined
}

foo();
