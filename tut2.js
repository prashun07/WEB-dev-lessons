const fs = require('fs')
let text = fs.readFileSync("dele.tx", "utf-8")
console.log(text)
console.log("replacing the File owner name")
text = text.replace("Harry", "Prashun")

console.log(text);
console.log("Creating a new file")
fs.writeFileSync("newf.txt", "utf-8")
fs.appendFile("newf.txt", "Hello world", (err) => {
    if (err) {
        console.log(err);
    }
    else {
        // Get the file contents after the append operation
        console.log("\nFile Contents of file after append:",
            fs.readFileSync("newf.txt", "utf8"));
    }
});

