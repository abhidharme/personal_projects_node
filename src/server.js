const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("get api")
})

app.listen(3040, () => {
    console.log('first')
})