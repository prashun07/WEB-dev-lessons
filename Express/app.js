const express = require("express")
const app = express();

const port = 80;
app.get('/', (req, res) => {
    res.send("this is Home page of get");
});
app.post("/", (req, res) => {
    res.send("This is Home page of post app");
});
app.listen(port, () => {
    console.log("This is console log");
})
