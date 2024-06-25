/**
 * this는 생성자 혹은 메소드에서 객체를 가리킬 때 사용하는 키워드
 * 1. 새로 만들어지는 객체의 생상지의 속성을 넣어줄 때
 * 2. 객체의 속성에 접근(메소드에서 사용하는 this) 일 때
 */

// 생성자 함수 - 생성자로 인해 생성된 새로운 객체 (빈객체 안에 this로 세팅한 값)
function Constr(title, volumn) {
  this.title = title;
  this.volumn = volumn;
  this.getVolumn = function () {
    console.log(`${this.title}의 볼륨은  ${this.volumn}`);
  };
  console.log(this);
}
const constr = new Constr("a", 10); // {title: 'a', volumn: 10}
constr.getVolumn(); // 'a의 볼륨은 10'

// 함수에서 this - window 객체
function func() {
  console.log(this);
}
func(); // = window.func();

// 화살표 함수에서 this - 상위 스코프의 this
const arrowFunc = () => {
  console.log(this);
};
arrowFunc();

// 메서드에서 this - 해당 객체를 가르킨다
const obj = {
  ttitle: "a",
  play() {
    console.log("play this", this);
  },
  func,
  arrowFunc,
};

obj.play(); // 해당 객체
obj.func(); // 해당 객체
obj.arrowFunc(); // {}

// 콜백함수
const audio = {
  categories: ["rock", "pop", "hiphop", "jaxx"],
  displayCategories() {
    this.categories.forEach(function (category) {
      // 일반함수 - 콜백함수 내부의 this는 전역 객체 window 가리킴
      console.log(`title: ${this.title}, category: ${category}`);
    });
  },
  displayCategories2() {
    this.categories.forEach(function (category) {
      // forEach 2번째 인자가 콜백함수에서 this로 참조할 수 있게 됨
      console.log(`title: ${this.title}, category: ${category}`);
    }, this);
  },
  // lexical this
  displayCategories3() {
    this.categories.forEach((category) => {
      // 화살표함수 - this는 언제나 상위 스코프의 this를 가리킴
      console.log(`title: ${this.title}, category: ${category}`);
    });
  },
};

audio.title = "audio";
audio.displayCategories(); // title: undefined
audio.displayCategories2(); // title: audio
audio.displayCategories3(); // title: audio
