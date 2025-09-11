const formEL = document.querySelector('form')
formEL.addEventListener('submit' ,  (ev)=>( 
    ev.preventDefault()
    formEL.reset()
))
function searchArticlesByName(querry){
fetch('https://newsapi.org/docs/endpoints/everythinghttps://newsapi.org/v2/everything?q=${querry}&apiKey=3ce63eea477043d7a470d2b21dc5ab4b').then(result => result.json())
}

