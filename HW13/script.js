
// const user = { 
//     name: 'Mango', 
//     age: 20, 
//     hobby: 'html', 
//     premium: true, 
//   };   
//     user.mood = 'happy';
//     user.hobby = 'skydiving';
//     user.premium = false;
//     const keys = Object.keys(user);
//     for(const key of keys) {
//     console.log(`${key}: ${user[key]}`);
//   };
//   const {name, age, hobby, premium} = user;
//   console.log(name);

//   console.log(name, age, hobby, premium);

// const products = [ 
//   { name: 'Радар', price: 1300, quantity: 4 }, 
//   { name: 'Сканер', price: 2700, quantity: 3 }, 
//   { name: 'Дроїд', price: 400, quantity: 7 }, 
//   { name: 'Захоплення', price: 1200, quantity: 2 }, 
// ]; 
// const [
//   {name: firstName, price: firstPrice, quantity: firstQuantity},
//   {name: secondName, price: secondPrice, quantity: secondQuantity},
//   {name: thirdName, price: thirdPrice, quantity: thirdQuantity},
//   {name: fourthName, price: fourthPrice, quantity: fourthNameQuantity},
// ] = products

// console.log(firstQuantity, thirdPrice, secondName, fourthName);

//2. Напиши сценарій керування особистим кабінетом інтернет-банку. Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.
 
/* 
 * Типів транзацкій всього два. 
 * Можна покласти або зняти гроші з рахунку. 
 */ 
const Transaction = { 
    DEPOSIT: 'deposit', 
    WITHDRAW: 'withdraw', 
  }; 
   
  /* 
   * Кожна транзакція - це об'єкт з властивостями: id, type і amount 
   */ 
   
  const account = { 
    // Поточний баланс рахунку 
    balance: 0, 
   
    // Історія транзакцій 
    transactions: [], 
   
    /* 
     * Метод створює і повертає об'єкт транзакції. 
     * Приймає суму і тип транзакції. 
     */ 
    createTransaction(amount, type) {
      return {
          id: this.transactions.length + 1,
          type,
          amount,
      }
    }, 
   
    /* 
     * Метод відповідає за додавання суми до балансу. 
     * Приймає суму танзакції. 
     * Викликає createTransaction для створення об'єкта транзакції 
     * після чого додає його в історію транзакцій 
     */ 
    deposit(amount) {
      const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
      this.transactions.push(transaction);
      this.balance += amount;
    }, 
   
    /* 
     * Метод відповідає за зняття суми з балансу. 
     * Приймає суму танзакції. 
     * Викликає createTransaction для створення об'єкта транзакції 
     * після чого додає його в історію транзакцій. 
     * 
     * Якщо amount більше, ніж поточний баланс, виводь повідомлення 
     * про те, що зняття такої суми не можливо, недостатньо коштів. 
     */ 
    withdraw(amount) {
      if(amount > this.balance) {
          console.log('Недостатнько коштів на рахунку');
          return;
      }
  
      const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
      this.transactions.push(transaction);
      this.balance -= amount;
    }, 
   
    /* 
     * Метод повертає поточний баланс 
     */ 
    getBalance() {
      return this.balance;
    }, 
   
    /* 
     * Метод шукає і повертає об'єкт транзакції по id 
     */ 
    getTransactionDetails(id) {
      return this.transactions.find((transaction) => transaction.id === id);
    }, 
   
    /* 
     * Метод повертає кількість коштів 
     * певного типу транзакції з усієї історії транзакцій 
     */ 
    getTransactionTotal(type) {
      return this.transactions
      .filter((transaction) => transaction.type === type)
      .reduce((total, transaction) => total + transaction.amount, 0);
    }, 
  };
  
  account.deposit(350);
  account.deposit(150);
  account.withdraw(700);
  account.withdraw(400);
  console.log(account.getBalance());
  console.log(account.getTransactionDetails(2));
  console.log(account.getTransactionTotal(Transaction.DEPOSIT));
  console.log(account.getTransactionTotal(Transaction.WITHDRAW));