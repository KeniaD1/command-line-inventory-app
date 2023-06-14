# command-line-inventory-app

It will be an application where employees can keep track of the inventory of a store. 
Employees can create new items, update items, see a list of items, see details of one item and delete items. 

This application will allow access to cosmetic products inventory . 


### Set up & Instructions
 The user can create a new item in the command-line.
 EX: Npm run create <Name><priceInCents><inStock><weight> `npm run create "Lip Gloss" 23888 false 0.5`

. The user can see a list of all the items in the command-line.
  EX:Npm run index `npm run index`

. The user can see the details of one item in the command-line.
EX: Npm run show <id> `npm run show jNLz2A0Z3Or8URcZG_5yK`

. The user can delete an item in the command-line.
EX: Npm run destroy <id>`npm run destroy jNLz2A0Z3Or8URcZG_5yK`

. The user can update an item in the command-line.
EX: Npm run edit <id> <updatedName> `npm run edit jNLz2A0Z3Or8URcZG_5yK "Blush hush"`

.The user can add items to cart in the command-line.
 EX : Node index.js add-to-cart <id> `node index.js add-to-cart jNLz2A0Z3Or8URcZG_5yK`

.The user can view items in cart in the command-line.
EX: Node index.js view-cart `node index.js view-cart`

.The user can cancel items in cart in the command-line.
EX: Node index.js cancel-cart <id> `node index.js jNLz2A0Z3Or8URcZG_5yK`

