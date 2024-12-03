// const x = "Сергій";
// const y ="Бондареннко";
// const n =3;
// const g ="grand hotel"
// console.log(`гість ${x} ${y} Поселяється в ${n} номер ${g}`)


// const message=prompt("enter number");
// const trueMessage =message.trim();
// console.log(trueMessage)


// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;
// for (const price of cart) {
// total+=price;

// }
// console.log(total)


// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber =numbers[0] ;
// for (const number of numbers) {
//     if (number < smallestNumber){
//         smallestNumber = number;
//     }
// }
// console.log(smallestNumber)

const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];
let total = 0;

for (const number of array1) {
    total+=number
}
for (const number of array2) {
    total+=number
}
console.log(`total is ${total}`)