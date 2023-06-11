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
            const styleView = index(styles)
            inform(styleView);
            break;
        case "show":
            showController(styles)
            //inform(viewShow);
            break;

        case "edit":
            const styleId = process.argv[3];
            const updatedName = process.argv[4];
            editStyleController(styles, styleId, updatedName);
            writeToFile = true;
            break;

        case "create":
            createStyleController(styleId, amount, styles)
            //updatedStyle = create(styles, styleId);
            writeToFile = true;
            break;
        case "destroy":
            updatednewStyle = destroy(styles, styleId);
            writeToFile = true;
            break;


        default:
            inform(chalk.blue("Hey, did you forget something? Your cart is empty 🫠"));

    }
    if (writeToFile) {
        writeJSONFile("data", "styles.json", styles);
        inform("Thank you. Styles have been updated");
    }
    //put this in purchase controller for receipt

}
run()



