const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({extended: false}));

app.use("/api/users", require("./routes/api/users"));
app.use("/api/search", require("./routes/api/search"));

app.listen(8080, () =>
    console.log("Server started yuhh")
);