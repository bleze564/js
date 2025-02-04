// Створіть об'єкт "book" з властивостями "title", "author", "year" та "genre". Додайте до об'єкту метод, який дозволить змінювати значення властивостей.



const book ={
    title:"harry poter",
    author:"Роулінг Джоан",
    year:1990,
    genre:"фантастика",
    update(newTitle,newAuthor,newYear,newGenre){
        if(newTitle) this.title = newTitle;
        if(newAuthor) this.author = newAuthor;
        if(newYear) this.year = newYear;
        if(newGenre) this.genre = newGenre;

    }

}
console.log(book);
// book.update(
//     'буквар',
//     'Тарас',
//     2001,
//     'Навчальна література'
// )
// console.log(book)