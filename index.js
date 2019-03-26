const cors = require("cors");
const express = require("express");
const fetch = require("node-fetch");
const app = express();
const fs = require('fs');
app.use(cors());

app.get('/movies', (req, res) => {
    fs.readFile('apikey', "utf8", (err, data) => {
        if (err) console.log("Was not able to read API-key!", err);
        fetch(`https://api.themoviedb.org/4/list/1?api_key=${data}`, {
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            }
        })
            .then(r => r.json())
            .then(j => {
                res.json(j)

            })
    });
})


const port = 3046;
app.listen(port, () => {
    console.log(`Example app is listening on ${port}!`);
});


