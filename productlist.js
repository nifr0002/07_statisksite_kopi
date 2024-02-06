fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  //looper og kalder showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  //fang template
  const template = document.querySelector("product-cardTemplate").content;

  //Lav en kopi
  const copy = template.cloneNode(true);

  //ændre indhold
  copy.querySelector("h2").textContent = product.productdisplayname;
  if (product.soldout) {
    //produktet er udsolgt
    copy.querySelector("article").classList.add(soldout);
  }
  //appende
  document.querySelector("main").appendChild(copy);
}
