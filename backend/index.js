const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const mainRouter = require('./routes/index');
const { User } = require('./db');


app.use("/api/v1", mainRouter);

app.get("/", (req, res) => {
    res.send("Welcome to index");
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});