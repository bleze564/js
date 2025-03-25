// const listEl =document.querySelector("ul")
// console.log(listEl)
// const firstItemEl =listEl.firstElementChild
// console.log(firstItemEl)
// const listElOne =firstItemEl.parentElement
// console.log(listElOne)
// const imgEl =document.querySelector(".hero__image")
// console.dir(imgEl)



const articleEl = document.querySelector(".js-container");
const product ={
    name: 'Товар-2',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.',
    price: 3000,
    available: false,
    onSale: false,
  }
articleEl.innerHTML = `<article class="product">
<h2 class="product__name">${product.name}</h2>
<p class="product__descr">${product.description}</p>
<p product__pridct>${product.name}</p>
</article>`;

