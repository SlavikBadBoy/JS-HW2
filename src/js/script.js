"use strict";
// Створив змінні для зберігання температури за Цельсієм та Фаренгейтом.
const tempC = 18;
let tempF;
tempF = (tempC * 9) / 5 + 32;
console.log(tempF);
// Створив змінну для зберігання кількості днів у місяці.
const daysInMonth = 30;
const hoursInMonth = daysInMonth * 24;
const minutesInMonth = hoursInMonth * 60;
console.log(
  "Кількість годин",
  hoursInMonth,
  "Кількість хвилин",
  minutesInMonth
);
// Створив змінні для зберігання рівня здоров'я та енергії гравця в грі.
let playerHealth = 100;
let playerEnergy = 100;
playerHealth -= 20;
playerEnergy -= 40;
console.log("Здоров'я", playerHealth, "Енергія", playerEnergy);
// Створив змінну для зберігання суми покупки в магазині.
const purchaseAmount = 1000;
const discountAmount = purchaseAmount * 0.1;
const finalAmount = purchaseAmount - discountAmount;
console.log("Всього", finalAmount, "Гривень");
// Створив змінну для зберігання числа з плаваючою комою.
const floatNumber = 256.999;
const flooredNumber = Math.floor(floatNumber);
console.log(flooredNumber);
// Створив змінну для зберігання рядка, який містить ціле число.
const intString = "10";
const parsedInt = parseInt(intString);
console.log(parsedInt);
// Створив змінну для зберігання числа.
const number = 16;
const sqrtNumber = Math.sqrt(number);
console.log(sqrtNumber);
// Створив змінні для зберігання цілочисельного значення та рядка з числом у вигляді рядка.
const intNumber = 25;
const numberString = "25";
const parsedNumber = parseInt(numberString);
console.log(parsedNumber);
const numberToString = intNumber.toString();
console.log(numberToString);
