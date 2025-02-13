// 1

// const bankAccount = {
//     ownerName: 'Bob Dou',
//     accountNumber: '1233456',
//     balance: 2000,
//     deposite(amount){
//         if(amount > 0) {
//             this.balance += amount;
//             alert(`Рахунок поповнено на ${amount} грн. Поточний баланс: ${this.balance}`);
//         } else{
//             alert('Сумма для поповнення повина бути більше 0 грн.')
//         }
//     },
//     withdraw(amount){
//         if(amount > 0 && amount <= this.balance) {
//             this.balance -= amount;
//             alert(`З рахунку знято ${amount}, поточний баланс ${this.balance}.`)
//         } else if(amount > this.balance){
//             alert('Недостатньо кошті на рахунку');
//         } else {
//             alert('Сумма для зняття повина бути більше 0 грн.')
//         }
//     }
// };

// if(confirm('Ви хочете поповнити рахунок?')) {
//     const depositeAmount = parseFloat(prompt('Введіть суму для поповнення'));
//     bankAccount.deposite(depositeAmount);
// } else if(confirm('Ви хочете зняти кошти?')){
//     const withdrawAmount = parseFloat(prompt('Введіть суму для зняття'));
//     bankAccount.withdraw(withdrawAmount);
// } else {
//     alert('Операція скасована');
// }

// 2

// const weather = {
//     temperature: 13,
//     humidity: 82,
//     windSpeed: '13km/h',
//     temperatureMath() {
//         if(this.temperature >= 0) {
//             console.log('Температура нижче 0 градусів Цельсія');
//         } else {
//             console.log('Температура вище 0 градусів Цельсія');
//         }
//     }
// }
// const temperatureInput = parseFloat(prompt('Яка в вас температура?'));
// weather.temperatureMath(temperatureInput);

//3

// const user = {
//     name: 'Viktor',
//     email: 'viktor123@gmail.com',
//     password: '123viktor123',
//     login(emailInput, passwordInput) {
//         if(emailInput === this.email && passwordInput === this.password) {
//             console.log('Вхід успішний');
//         } else {
//             console.log('Невірний password або email');
//         }
//     }
// }

//4

// const movie = {
//     title: 'Lord of the rings',
//     director: 'Peter Jackson',
//     year: 2002,
//     rating: 8.9,
//     ratingMath() {
//         if(this.rating <= 8) {
//             console.log(false);
//         } else {
//             console.log(true)
//         }
//     }
// }