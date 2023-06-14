const chalk = require('chalk');
const { readJSONFile, writeJSONFile } = require("./src/help")
const { index, show, create , edit} = require("./src/inventoryController")
const inform = console.log

function run() {
    inform("Welcome to Our App! \n\n")

    let list = readJSONFile("data", "sample.json")
    // console.log("Here is the Data Read: ", customers)

    const action = process.argv[2]; // What "action" did the User type in?
    const customer = process.argv[3];
    const amount = process.argv[4]
    let writeToFile = false;  // Have we done an Action that will "write" to Our JSON File
    let updatedProduct = []
    switch (action) {
        case "index":
            const inventory = index(list)
            inform(inventory)
            break;
        case "show":
            const showInventory = process.argv[3]
            show(list, showInventory)
            break;

        case "edit":
            const editProductId = process.argv[3];
            const updatedProduct = process.argv[4];
            edit(list, editProductId, updatedProduct);
            writeToFile = true;

            break;

        case "create":
            const name = process.argv[3];
            const priceInCents = parseInt(process.argv[4]);
            const inStock = process.argv[5] === "true";
            const weight = parseFloat(process.argv[6]).toFixed(2);
            updatedProduct = create(list, name, priceInCents, inStock, weight);
            writeToFile = true;
            break;

        case "destroy":

            break;


        default:
            inform(chalk.blue("Hey, did you forget something? Your cart is empty 🫠"));

    }
    if (writeToFile) {
        writeJSONFile("data", "sample.json", list)
    }
}
run()



