// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement
// event listener : property 앞에 on
const title = document.querySelector("h1");
console.dir(title);

function handleMouseenter() {
  console.log("mouse is here");
}

function handleTItleClick() {
  title.classList.toggle("clicked");
}

//title.addEventListener("mouseenter", handleMouseenter)
title.onmouseenter = handleMouseenter;
title.addEventListener("click", handleTItleClick);

const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

// event: 이벤트에 대한 정보 제공
function onLoginSubmit(event) {
  event.preventDefault();
  console.log(loginInput.value);
}

// 브라우저는 함수를 실행시키면서 그 함수에 첫번째 인자로 object 넣어줌
// object에는 방금 일어난 event에 대한 여러 정보가 담겨있다.
// onLoginSubmit({information about the event that just happened})
loginForm.addEventListener("submit", onLoginSubmit);
