// let age = 18;
// let name = "Nika";
// let isStudent = true;

// console.log("Name: ", name);
// console.log("Age: ", age);
// console.log("Is Student: ", isStudent);

// let value = 10;
// console.log(value);
// value = "Теперь это строка";
// console.log(value);
// value = true;
// console.log(value); 

// 1. Примитивные (primitive) типы

// let userName = "Тимур";
// // шаблон строка
// console.log(`Привет, ${userName}!`);
// // дробное число
// let price = 99.99;
// // отриц число
// let temperature = -15;
// // Infinity 
// let infinity = 1 / 0;
// // NaN (Not a Number)
// let notANumber = 0 / 0;
// // 0.30000000000000004 (особенность JS)
// console.log(0.1 + 0.2);
// // BigInt (Большие целые числа)
// let bigNum = 9007199254740991n;
// let huge = BigInit("12345678012345678901234567890");
// // Boolean (Логический тип)
// let isAlive = true;
// let isWorking = false;
// let isAdult = age >= 18;
// // Undefined (Не определено)
// let x;
// let y = undefined; 
// // Null (Пустое значение)
// let userData = null;

// // 2. Объектные (object) типы

// // Symbol (Символ)
// let id = Symbol("id");

// // Object (Объект)
// let person = {
//     name: "Тимур",
//     age: 18,
//     isStudent: true,
//     sayHello: function () {
//         console.log("Привет!");
//     },
// };

// console.log(person.name);

// // Array (Массив)
// let fruits = ["яблоко","банан", "апельсин"];
// let numbers = [1, 2, 3, 4, 5];
// let mixed = ["text", 812, true, null];

// // Function (Функция)
// function sum(a, b) {
//     return a +b;
// }

// let mut = function(x, y) {
//     return x * y;
// }

// console.log(sum(5, 3));
// console.log(mut(5, 3));

// // Date (Дата)
// let now = new Date();
// let birthday = new Date("2007-07-20");

// // 3. Арифметические операции

// let a = 10;
// let b = 3;
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);

// // Особенность JavaScript:
// console.log(10 + "5"); // "105"
// console.log("10" - 5); // 5

// // Константы (const)
// const PI = 3.14;
// console.log(PI);
// // PI = 3.1415 // Error

// // Массивы:
// const numbersArray = [1, 2, 3];
// // Можно изменять элементы:
// numbersArray[0] = 10;
// console.log(numbersArray); // [10, 2, 3]
// // Нельзя переназначать:
// numbersArray = [5, 6, 7] // Error!

// // Объекты:
// const persons = {name: "Timur", age: 18};
// // Можно изменять свойства:
// persons.age = 50;
// persons.city = "Volgograd";
// console.log(persons);
// persons = {name: "Nika"}; // Error!

// console.log( typeof "text"); // string
// console.log( typeof 812); // number
// console.log( typeof true); // boolean
// console.log( typeof undefined); // undefined
// console.log( typeof null); // !!! object
// console.log( typeof {}); // object
// console.log( typeof []); // object
// console.log( typeof function () {}); // function

// let numberX = null;
// console.log(numberX === null);

// // Практическое задание

// let newPrice = 812;
// console.log(newPrice, typeof newPrice);
// newPrice = "Text";
// console.log(newPrice, typeof newPrice);

// Явное преобразование типов:

// В строку
let num = 812; 
let str = String(num); // "812"
let str2 = num.toString(); // "812"
let str3 = "" + num; // "812"

// В число
let strNum = "812"; // 812
let int = Number(strNum); // 812
let int2 = parseInt("812.5"); // 812
let float = parseFloat("3.14"); // 3.14
let int3 = +"812"; // 812

// В булево значение
let bool1 = Boolean(1); // true
let bool2 = !!1; // true
let bool3 = Boolean(0); // false
let bool4 = Boolean(""); // false

// Неявное преобразование (coercion):
console.log("5" + 3); // "53" (конкатенация)
console.log("5" - 3); // 2 (преобразование в число)
console.log("5" * "2"); // 10
console.log(true + 1); //  2
console.log(false + 1); // 1
console.log(null  + 1); // 1
console.log(undefined + 1); // NaN
