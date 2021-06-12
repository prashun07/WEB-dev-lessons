const express = require("express")
const app = express();

const port = 80;

app.set('views', './views')
app.set('view engine', 'pug')
app.get('/', function (req, res) {
    res.render('index', { title: 'pug', message: 'Hello there This is pug Test!' })
})


app.get('/', (req, res) => {
    res.send("this is Home page of get");
});
app.post("/", (req, res) => {
    res.send("This is Home page of post app");
});
app.listen(port, () => {
    console.log("This is console log");
})
