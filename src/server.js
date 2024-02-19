const express = require("express");
const customerRouter = require("./routes/auth.routes")
const app = express();
const connectMongodb = require("./config/db")
app.use(express.json());
app.get("/", (req, res) => {
    res.send("get api")
})

app.use("/signup", customerRouter)

app.listen(3040, () => {
    console.log('server running on pirt 3040');
    connectMongodb();
})