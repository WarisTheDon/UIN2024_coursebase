console.log(products)


let productHTML = "<h2>Ninjago</h2>"

products.map(product => productHTML +=`<article>
<img src="LEGOdudes_webshop/website_images/PROD_${product.imagefile}" alt="${product.title}"/>
<a href="#">${product.category}</a>
<h3>${product.title}</h3>
<span>Kr.${product.price}</span>
<button>Legg i handlekurv</button>
</article>` )

console.log(productHTML)


const main = document.getElementsByTagName("main")
main[0].innerHTML = productHTML