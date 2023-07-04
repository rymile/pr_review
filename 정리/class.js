// class User {}

// const user = new User();
// user.name = "이용우";
// user.age = 28;
// user.tech = "Node.js";

// console.log(user.name); // 이용우
// console.log(user.age); // 28
// console.log(user.tech); // Node.js

// class User {
//   constructor(name, age, tech) {
//     // User 클래스의 생성자
//     this.name = name;
//     this.age = age;
//     this.tech = tech;
//   }
// }

// const user = new User("이용우", 28, "Node.js"); // user 인스턴스 생성

// console.log(user.name); // 이용우
// console.log(user.age); // 28
// console.log(user.tech); // Node.js

// class User {
//   constructor(name, age, tech) {
//     // User 클래스의 생성자
//     this.name = name;
//     this.age = age;
//     this.tech = tech;
//   }

//   getName() {
//     return this.name;
//   } // getName 메서드
//   getAge() {
//     return this.age;
//   } // getAge 메서드
//   getTech() {
//     return this.tech;
//   } // getTech 메서드
// }

// const user = new User("이용우", "28", "Node.js"); // user 인스턴스 생성
// console.log(user.getName()); // 이용우
// console.log(user.getAge()); // 28
// console.log(user.getTech()); // Node.js

class User {
  // User 부모 클래스
  constructor(name, age, tech) {
    // 부모 클래스 생성자
    this.name = name;
    this.age = age;
    this.tech = tech;
  }
  getTech() {
    return this.tech;
  } // 부모 클래스 getTech 메서드
}

class Employee extends User {
  // Employee 자식 클래스
  constructor(name, age, tech) {
    // 자식 클래스 생성자
    super(name, age, tech);
  }
}

const employee = new Employee("이용우", "28", "Node.js");
console.log(employee.name); // 이용우
console.log(employee.age); // 28
console.log(employee.getTech()); // 부모 클래스의 getTech 메서드 호출: Node.js
