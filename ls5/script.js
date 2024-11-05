// // Якщо ваше ім’я містить більше 4 букв і прізвище більше 5, то виведіть
//  на екран число,яке дорівнює сумі букв імені і прізвища. Якщо умова не виконується - вивести “УПС”.
//   Наприклад: “Віктор Сташко” Віктор - 6 літер, Сташко - 6 літер. Виводимо 12. Використовувати вбудований метод length.
const nameOne ="Валерій";
const sourname ="Наумець";
const nameLength = nameOne.length;
const sournameLength = sourname.length;
let result;
switch(true){
    case( nameLength>4 && sournameLength>5):
    result=nameLength+sournameLength;
    break;
    default:
        result="Упс"
}
console.log(result)