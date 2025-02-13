'use strict'

//Створити масив з трьох чисел. Змінити значення другого елемента масиву на 10.

// const numbers = [11, 45, 98];
// numbers[2] = 10;
// console.log(numbers);



//Створити масив із трьох рядків. Додати до масиву ще одну рядків.

// const strings = ['Bob', 'Tom', 'Poly'];
// strings[3] = 'Alex';
// console.log(strings);



//Створити скрипт який поверне суму всіх чисел в масиві.

// const numbers = [12, 98, 112];
// let num = 0;
// for(let i = 0; i < numbers.length; i++) {
//     num += numbers[i];
// }
// console.log(num);



//Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for.

// const numbers = [23, 54, 78, 12, 9];
// for(let i = 0; i < numbers.length; i++) {
//     i += numbers[i];
// }
// console.log(numbers);



//Створити масив із 5-ти рядків. Вивести на екран кожен рядок з масиву, який містить більше 5-ти символів.

// const names = ['Bob', 'Tom', 'Valeria', 'Maria', 'Sergio'];
// for(let i = 0; i < names.length; i++) {
//     if (names[i].length >= 5) {
//         console.log(names[i]);
//     }
// }



//Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.

// const numbers = [10, 25, 5];
// let max = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] > max) {
//     max = numbers[i];
//   }
// }
// console.log(max);



//Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const duoNumbers = [];
let duo = 0;
for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 === 0) {
        duoNumbers[duo] = numbers[i];
        duo++;
    }
}
console.log(duoNumbers);