const express = require('express');
const cors = require('cors');
const goalRouter = require("./routes/api/goals")

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({extended: false}));

app.get("/", (req, res) => {
    res.send("Welcome to the jungle")
})

app.use("/api/users", require("./routes/api/users"));
app.use("/api/search", require("./routes/api/search"));
app.use("/api/goals", goalRouter)

app.listen(8080, () =>
    console.log("Server started yuhh")
);