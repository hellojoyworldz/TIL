// https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
localStorage.setItem("username", "sunah");
localStorage.getItem("username"); // 없으면 null
localStorage.removeItem("username");

const ary = [1, 2, 3, 4];
// string으로 넣기
localStorage.setItem("ary", JSON.stringify(ary));
// array로 가져오기
JSON.parse(localStorage.getItem("ary"));
