const obj = {
  value: 42,
  regularFunction: function () {
    console.log(this.value); // 42 - 상위스코프
    function innerFunction() {
      console.log(this.value); // undefined - 전역스코프
    }
    innerFunction();
  },
};

obj.regularFunction();

const obj2 = {
  value: 42,
  regularFunction: function () {
    console.log(this.value); // 42 - 상위스코프
    const innerFunction = () => {
      console.log(this.value); // 42 - 상위스코프
    };
    innerFunction();
  },
};

obj2.regularFunction();
