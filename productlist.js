fetch("https://kea-alt-del.dk/t7/api/products")
.then(res=>res.json())
.then(showProducts)

function showProducts(products){
    //looper og kalder showProduct
    products.forEach(showProduct)
}

function showProduct(product){
    console.log(product);
//fanf template
const template = document.querySelector("product-cardTemplate").content;

//Lav en kopi 
 const copy= template.cloneNode (true);

//ændre indhold
copy.querySelector ("h2").textContent=product.productdisplayname;
if(product.soldout){
    //produktet er udsolgt
    copy.querySelector("article").classList.add(soldout);
}
//apende
document.querySelector("main").appendChild(copy)
}


/*<div class="product-card">
                <img src="https://kea-alt-del.dk/t7/images/webp/640/1573.webp" alt="Produktbillede">
                <h2>Leggings</h2>
                <p>Pris: 300 kr</p>
                <p class="discounted-price">Rabatpris: 250 kr</p>
                <a href="produkt.html">Se detaljer</a>
            </div>*/