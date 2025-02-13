// 'use strict'




//  let drink;
//  const select = 'Кава';

//  switch (select) {
//      case 'Кава':
//          drink = 'Кава';
//         break;

//     case 'Чай':
//         drink = 'Чай';
//         break;

//      case 'Сік':
//          drink = 'Сік';
//          break;
//      default:
//          console.log('В списку немає цього напитку');
//  }
// console.log(drink);




//  let days;
//  const day = prompt('Напишіть день тижня');
//  switch (day) {
//    case 'понеділок':
//         case 'вівторок':
//              case 'середа':
//                  case 'четвер':
//                      case 'п`ятниця':
//                          days = 'Робочий день';
//                          break;
//      case 'субота':
//        case 'неділя':
//              days = 'Вихідний';
//              break;
//              default:
//                  console.log('Пробачте, скорішь за все ви написали помилку:)');
//  }
// console.log(days);





 let season;
 const month = prompt('Напишіть номер місяця');

 if (month >= 1 && month <= 3) {
     season = 'Зима';
 } else if (month >= 4 && month <= 6) {
     season = 'Весна';
 } else if (month >= 7 && month <= 9) {
     season = 'Літо';
 } else if (month >= 10 && month <= 12) {
     season = 'Осінь';
 } else {
     season = 'Невірний номер місяця';
}
 console.log(season);





let days;
 const num = prompt('Напишіть будь ласка номер місяця');

 switch (num) {
     case '1':
         case '3':
             case '5':
                 case '7':
                     case '8':
                         case '10':
                             case '12':
                                 days = 'В цьому місяці 31 день';
                                 break;
     case '4':
        case '6':
            case '9':
                 case '11':
                     days = 'В цьому місяці 30 днів';
                     break;
    case '2':
         days = 'В цьому місяці 28 днів, але якщо високосний то 29';
        break;
     default:
         console.log('Невірний номер місяця');
 }
 console.log(days);





 let colors;
 const color = prompt('Напишіть колір світлофору');
 switch (color) {
     case 'червоний':
         colors = 'стоп';
         break;
     case 'жовтий':
         colors = 'чекати';
         break;
   case 'зелений':
       colors = 'йти';
         break;
    default:
         console.log('Будь ласка напишіть правильний колір');
 }
 console.log(colors);





 let num1 = 6;
 let num2 = 0;
 let operation = '/';
 let result;
 if (operation === '/' && num2 === 0) {
     result = 'Помилка ділення на нуль';
 } else {
    switch (operation) {
        case '+':
           result = num1 + num2;
           break;
      case '-':
          result = num1 - num2;
          break;
      case '/':
          result = num1 / num2;
           break;
    case '*':
            result = num1 * num2;
            break;
       default:
              console.log('Невідома операція')
   }
 }
 console.log(result);