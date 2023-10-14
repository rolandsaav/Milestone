const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser")
const goalRouter = require("./routes/api/goals");

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.get('/message', (req, res) => {
    res.json({message: "Hello from server"});
});

app.use("/goals", goalRouter);

app.listen(8080, () => {
    console.log('Server is running on port 8000');
});