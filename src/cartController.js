// const inform = console.log;
// const fs = require("node:fs")


// function writeJSONFile(directory, filename, data) {
//     const filePath = `${directory}/${filename}`;
//     fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  
//   }

// //well disregard below - it's pushing the entire object
//   //lol try and add something to your cart using node index.js cart "whateverid"
//   //or npm run cart "whateverid"

// function addToCart(productList, ids, cartItems) {
//   if (productList.length === 0) {
//     inform("No product ID provided.");
//     return;
//   }

//   ids.forEach((id) => {
//     const productToAdd = productList.find((product) => product.id ===ids);

//     if (productToAdd) {
//       const cartItemIndex = cartItems.findIndex((item) => item.id === id);

//       if (cartItemIndex !== -1) {
//         // If the item is already in the cart, increase the quantity
//         cartItems[cartItemIndex].quantity += 1; //kvp
//       } else {
//         // If the item is not in the cart, add it
//         cartItems.push({ ...productToAdd, quantity: 1 }); //push everything from line 18
//       }
//     } else {
//       inform(`Equipment with ID ${id} not found.`);
//     }
//   });

//   inform("Items added to the cart.");
//   writeJSONFile("data", "cart.json", cartItems); // Write cart items to JSON file
// }

// // function cancelCart(cartItems) {
// //   cartItems = []; // Empty the shopping cart
// //   inform("Shopping cart has been canceled. All items removed.");
// //   writeJSONFile("data", "cartItems.json", cartItems); // Write cart items to JSON file
// // }
  
// //   function writeJSONFile(directory, filename, data) {
// //     const filePath = `${directory}/${filename}`;
// //     fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  
// //   }
  
// //   // Function to display the shopping cart
// //   function showCart(cartItems) {
// //     if (cartItems.length === 0) {
// //       inform("The shopping cart is empty.");
// //     } else {
// //       const totalPrice = cartItems.reduce((total, item) => {
// //         return total + item.priceInCents * item.quantity;
// //       }, 0);
  
// //       const cartItemsFormatted = cartItems.map((item) => {
// //         return {
// //           id: item.id,
// //           name: item.name,
// //           priceInCents: item.priceInCents,
// //           quantity: item.quantity,
// //         };
// //       });
  
// //       inform(JSON.stringify(cartItemsFormatted, null, 2));
// //       inform(`Total Price: $${(totalPrice / 100).toFixed(2)}`);
// //     }
// //   }
  
//   module.exports = {
//     addToCart
  
//   };