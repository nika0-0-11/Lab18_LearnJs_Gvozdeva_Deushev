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

// // Явное преобразование типов:

// // В строку
// let num = 812; 
// let str = String(num); // "812"
// let str2 = num.toString(); // "812"
// let str3 = "" + num; // "812"

// // В число
// let strNum = "812"; // 812
// let int = Number(strNum); // 812
// let int2 = parseInt("812.5"); // 812
// let float = parseFloat("3.14"); // 3.14
// let int3 = +"812"; // 812

// // В булево значение
// let bool1 = Boolean(1); // true
// let bool2 = !!1; // true
// let bool3 = Boolean(0); // false
// let bool4 = Boolean(""); // false

// // Неявное преобразование (coercion):
// console.log("5" + 3); // "53" (конкатенация)
// console.log("5" - 3); // 2 (преобразование в число)
// console.log("5" * "2"); // 10
// console.log(true + 1); //  2
// console.log(false + 1); // 1
// console.log(null  + 1); // 1
// console.log(undefined + 1); // NaN

// // Строгое и нестрогое сравнение

// console.log(5 == "5"); // true (нестрогое, с преобразованием)
// console.log(5 === "5"); // false (строгое, без преобразования)
// console.log(0 == false); // true
// console.log(0 === false); // false
// console.log(null == undefined); // true
// console.log(null === undefined); // false

// // Объекты сравниваются по ссылке, а не по содержимому:
// let obj1 = { name: "Nika"}; 
// let obj2 = { name: "Nika"};

// console.log(obj1 == obj2); // false
// console.log(obj1 === obj2); // false 

// let obj3 = obj1; // obj3 ссылается на тот же объект
// console.log(obj1 === obj3); // true

// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3];
// console.log(arr1 === arr2); // false 

// let a2 = 5;
// let b2 = 2;
// console.log(a2 + b2, a2 * b2);

// let yourAge = 18;

// if (yourAge >= 18) {
//     console.log("Доступ разрешён");
// } else {
//     console.log("Доступ запрещён");
// }

// let temperature = 10;

// if (temperature < 0) {
//     console.log("Холодно");
// } else if (temperature >= 0 && temperature <= 20) {
//     console.log("Прохладно");
// } else {
//     console.log("Тепло");
// }

// if (isStudent && age < 25) {
//     console.log("Доступна студенческая скидка");
// }

// let isLoggedIn = true;
// let isAdmin = true;

// if (isLoggedIn && isAdmin) {
//     console.log("Полный доступ");
// } else if (isLoggedIn && !isAdmin) {
//     console.log("Ограниченный доступ");
// } else {
//     console.log("Доступ запрещен");
// }

// let a3 = 10;
// let b3 = "10";

// console.log("С помощью ==: ", a3 == b3); // num
// console.log("С помощью ===: ", a3 === b3); // str

// let message = age >= 18 ? "Совершеннолетний" : "Несовершеннолетний";
// console.log(message)

// let day = 3;

// switch (day) {
//     case 1: console.log("Пн"); break;
//     case 2: console.log("Вт"); break;
//     case 3: console.log("Ср"); break;
//     default: console.log("Неизвестный день");
// }

let monthNumber = 6;

switch (monthNumber) {
    case 1:
        console.log("Январь");
        break;
    case 2:
        console.log("Февраль");
        break;
    case 3:
        console.log("Март");
        break;
    case 4:
        console.log("Апрель");
        break;
    case 5:
        console.log("Май");
        break;
    case 6:
        console.log("Июнь");
        break;
    case 7:
        console.log("Июль");
        break;
    case 8:
        console.log("Август");
        break;
    case 9:
        console.log("Сентябрь");
        break;
    case 10:
        console.log("Октябрь");
        break;
    case 11:
        console.log("Ноябрь");
        break;
    case 12:
        console.log("Декабрь");
        break; 
    default: 
        console.log("Ошибка: ввидте число от 1 до 12");
}