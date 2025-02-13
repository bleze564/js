'use strict'

//1. Напиши скрипт, який об'єднує всі елементи массива в один рядок. Елементів може бути довільна кількість. 
//Нехай елементи массива в рядку будут розділені комою.

const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
let string = '';

for(let i = 0; i < friends.length; i++) {
    string += friends[i] + ', ';
}
console.log(friends);

friends.join(', ');
console.log(friends);

//2. Працюємо з колекцією карток в trello. Метод splice() (можна використати інші методи)

const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
];

//3. Видалити

const cardToRemowe = cards.splice(2, 1);

//4. Додати

const cardToInsert = cards.splice(4, 0, 'Карточка-6');

//5. Оновити

const cardToUpdate = cards.splice(2, 1, 4);

console.log(cards)