const chalk = require('chalk');
const { readJSONFile, writeJSONFile } = require("./src/helper")

function run() {
    inform("Welcome to Our App! \n\n")

    let customers = readJSONFile("data", "customers.json")
    // console.log("Here is the Data Read: ", customers)

    const action = process.argv[2]; // What "action" did the User type in?
    const customer = process.argv[3];
    const amount = process.argv[4]
    let writeToFile = false;  // Have we done an Action that will "write" to Our JSON File

    switch (action) {
        case "index":
            
            break;
        case "show":
       
            break;

        case "edit":
           
            break;

        case "create":
            ;
            break;
        case "destroy":
            
            break;


        default:
            inform(chalk.blue("Hey, did you forget something? Your cart is empty 🫠"));

    }
    
}
run()



