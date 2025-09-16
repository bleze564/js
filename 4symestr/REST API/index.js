const formEl = document.querySelector("form");
const markupDiv =document.querySelector('.container')
formEl.addEventListener("submit", (ev) => {
  ev.preventDefault();
  searchArticlesByName(ev.currentTarget.elements.query.value).then( (responds) => {
   let markup =responds.articles.map(createArticleMarkup)
   markupDiv.innerHTML = markup
  })
    formEl.reset();
});
function searchArticlesByName(news) {
  return fetch(
    `https://newsapi.org/v2/everything?q=${news}&apiKey=4cb0d0900a824cada0e90e272a031922`
  ).then((result) => result.json());
}
function createArticleMarkup (article) {
  return `
       <article>
        <img src="${article.urlToImage}" alt="${article.title}">
        <h2>${article.title}</h2>
        <p>${article.description}</p>
     </article>
`;
}