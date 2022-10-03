const express = require("express");
const app = express();
const cors = require("cors")
require("./connection/db")
require("./connection/mongo");

const bodyParser = require("body-parser");

const port = process.env.PORT || 7000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
// app.use(json2xls.middleware);
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'X-Requested-With')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    next();
});
app.get('/', (req, res) => {
    console.log("welcome back");
})

const mutualRoutes = require("./routes/mutualRoutes");
app.use("/api/v1", mutualRoutes)

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})