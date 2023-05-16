const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.render("hey");
});

app.listen(4000, () => {
    console.log("server started at port 4000");
})