const chalk = require('chalk');
const nanoid =require('nanoid');
const inform = console.log;




function index (arrayOfProducts){
    return arrayOfProducts.map((product) => product.id + " " + product.name).join("\n");
}

function show (arrayOfProducts){
    const productsId = arrayOfProducts.find((product) => product.id === productId);
  return product.id + " " + product.name + " " + product.priceInCents + " " + product.inStock + " " + product.weight;
}


module.exports= {
    index,
    show
}