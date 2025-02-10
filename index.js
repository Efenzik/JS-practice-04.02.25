"use strict";
const PASSWORD = "11112222";
let userPassword;
//  Цикл do while
// do {
//   userPassword = prompt("Введіть пароль : ");
// } while (userPassword !== PASSWORD);

//  Цикл while

// while (userPassword !== PASSWORD);
// {
//   userPassword = prompt("Введіть пароль : ");
// }
//  Цикл for
// for (let i = 11; 1 < 10; i++) {
//   console.log(i);
// }

// const text = "JavaScript";

// for (let i = 0; 1 < text.length; i++) {
//   if (i === 4) {
//     continue;
//   }
//   console.log("Work!");
// }

// 1.1 =========================

// let number = 1;
// while (number <= 5) {
//   console.log(number);
//   number += 1;
// }

// do {
//   console.log(number);
//   number += 1;
// } while (number < 5);

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// 1.2 =========================

// Зробили усно

// 1.3 =========================

// let number = 0;
// while (number < 5) {
//   console.log(`Число ${number}`);
//   number = number + 1;
// }

// 1.4 =========================

// for (let i = 1; i < 1000; i += 2) {
//   console.log(i);
// }

// for (let i = 1; i < 1000; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// 2.1 =========================

// let num = 0;
// do {
//   num = Number(prompt("Введіть число більше 100 : "));
// } while (num < 100);

// 2.2 =========================

// const employers = 70;
// let totalSalary = 0;
// for (let i = 1; i <= employers; i++) {
//   const salary = Math.round(Math.random() * (5000 - 500) + 500);
//   totalSalary += salary;
// }
// console.log(totalSalary);

// 2.3 =========================

// const min = 5;
// const max = 10;
// let sumOfDoublesNumbers = 0;
// for (let i = min; i <= max; i++) {
//   if (i % 2 === 0) {
//     sumOfDoublesNumbers += i;
//   }
// }
// console.log(sumOfDoublesNumbers);

// 2.4 =========================

// let userResponse;
// do {
//   userResponse = prompt("Введіть число більше 100 : ");
//   if (userResponse === null) {
//     alert("Скасовано");
//     break;
//   }
//   userResponse = Number(userResponse);
// } while (userResponse <= 100 || isNaN(userResponse));

// 2.5 =========================

const min = 10;
const max = 15;
let sumOfOddNumber = 0;
for (let i = min; i <= max; i++) {
  if (i % 2 !== 0) {
    sumOfOddNumber += i;
  }
}
console.log(sumOfOddNumber);
// Додаткове на 5 баллів
