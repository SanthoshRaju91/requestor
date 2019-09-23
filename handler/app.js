const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.get("/handle", (req, res) => {
    res.status(200).json({ message: "Hello"});
})

app.listen(8000, (err) => {
    if(err) console.error(err);

    console.log(`Listening on port 8000`);
})
