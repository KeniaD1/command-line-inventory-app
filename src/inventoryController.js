const chalk = require('chalk');
const { nanoid } = require('nanoid');
const inform = console.log;
const { readJSONFile, writeJSONFile } = require("../src/help");

function index(arrayOfProducts) {
  return arrayOfProducts.map((product) => product.id + " " + product.name).join("\n");
}

function show(productList, productId) {
  //inform("Type of productList:", typeof productList)
  const showProductsId = productList.find((product) => product.id === productId);
  if (showProductsId) {
    inform(JSON.stringify([showProductsId], null, 2));
  } else {
    inform("Product not found.");
  }
}

function edit(productList, productId, updatedName) {
    const productToEdit = productList.find(
        (product) => product.id === productId
      );
    
      if (!productToEdit) {
        inform("Product not found. No action taken");
        return;
      }
    
      productToEdit.name = updatedName;
      inform(chalk.bold.green("Product successfully updated"));
}

function create(productList, name, priceInCents, inStock, weight) {
  const purchaseId = nanoid();
  const newProduct = {
    id: purchaseId,
    name: name,
    priceInCents: priceInCents,
    inStock: inStock,
    weight: weight
  }
  if (!Array.isArray(productList)) {
    productList = []; // Initialize productList as an empty array
}
 // productList = readJSONFile("data", "sample.json");
  productList.push(newProduct);

  writeJSONFile("data", "sample.json", productList);
  return newProduct;
}

function destroy(productList, productId,) {
    const proIndex = productList.findIndex((product) => product.id === productId);
  
    if (proIndex > -1) {
      productList.splice(proIndex, 1);
      inform("Puuurrr product successfully removed from inventory");
    } else {
      inform("Product not found. No action taken");
    }
  }


module.exports = {
  index,
  show,
  create,
  edit,
  destroy
}