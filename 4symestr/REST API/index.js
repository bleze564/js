const formEl = document.querySelector("form");
const markupDiv =document.querySelector('.container')
const showMore =document.querySelector('.show')


const BASE_URL ="https://newsapi.org/v2/everything"
const apiKey ="4cb0d0900a824cada0e90e272a031922" 
let searchQuery ;
let pages = 1 


formEl.addEventListener("submit", (ev) => {
  ev.preventDefault();
  searchQuery = ev.currentTarget.elements.query.value
  searchArticlesByName(searchQuery).then( (responds) => {
   let markup =responds.articles.map(createArticleMarkup)
   markupDiv.innerHTML = markup
  }).catch(() => {
    document.body.innerHTML ='<h1>error</h1>'
  })
    formEl.reset();
    
});





function searchArticlesByName(news) { 
  return fetch(
    `${BASE_URL}?q=${news}&apiKey=${apiKey}&pageSize=9&page=${pages}`
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
showMore.addEventListener("click", () => {
  pages += 1
  searchArticlesByName(searchQuery).then( (responds) => {
   let markup =responds.articles.map(createArticleMarkup)
   markupDiv.insertAdjacentHTML('beforeend', markup);
  })
})
