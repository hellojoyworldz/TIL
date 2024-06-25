const fullName = function (city, country) {
  console.log(this.firstName + " " + this.lastName);
  console.log(city + " " + country);
};

const person1 = {
  firstName: "Jhon",
  lastName: "Smith",
};

// call()
// fullName.call(person1, "Oslo", "Norway");

// apply()
// fullName.apply(person1, ["Oslo", "Norway"]);

// bind() - 바인딩 한다음 함수를 호출해야함
const boundFullName = fullName.bind(person1);
boundFullName("Oslo", "Norway");
