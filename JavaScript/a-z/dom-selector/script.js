// DOM이로드되기 전에 스크립트가 실행되면 null

// document
console.dir(document);

const title = document.title;
console.log(title);

// getElementById - 단수 1개의 ID 대한 값들을 가져옴
const headingLv1 = document.getElementById("headingLv1");
console.log(headingLv1);

// getElementsByClassName - 복수의 class 객체(배열) 가져옴
const hellos = document.getElementsByClassName("hello");
console.log(hellos);

// getElementsByTagName - 배열
const headingLv2 = document.getElementsByTagName("h2");
console.log(headingLv2);

// querySelector - 1번째것만 가져옴
const sel = document.querySelector(".sel h3");
console.log(sel);

// querySelectorAll - 배열
const selAll = document.querySelectorAll(".sel h3");
console.log(selAll);
console.log(selAll.map);
console.log(Array.from(selAll).map);

const list = document.querySelector("ul.list-group");
const listItem = document.querySelector(".list-group>li");
const listChildred = list.children;
const listChildNodes = list.childNodes;
console.log(listChildred); // html collection 반환 (link break x) 실제 요소
console.log(listChildNodes); // \n 등 text 포함
let val;
val = list.firstChild; // === list.childNodes[0]
val = list.firstElementChild; // === list.children[0]
val = list.lastChild;
val = list.lastElementChild;
val = list.childElementCount;
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;
// next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;
// previous sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;

// 유사 배열 객체인 컬렉션 (collection)
// for...of 배열 순환 , for...in 객체 순환
// 배열은 아니지만 for...of, forEach() 사용 가능
// 배열 메서드 사용 불가 : filter, map
for (let node of listChildNodes) console.log(node);
console.log(listChildNodes.map);
console.log(Array.from(listChildNodes).map);

const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
