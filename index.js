const cors = require("cors");
const express = require("express");
const fetch = require("node-fetch");
const app = express();
const fs = require('fs');
app.use(cors());

fs.readFile('apikey', "utf8", (err, data) => {
    if(err) console.log("Was not able to read API-key!", err);
    fetch(`https://api.themoviedb.org/3/movie/550?api_key=${data}`)
    .then(r => r.json())
    .then(j => {
        .map(=>{

        })
    })
});



