const cors = require("cors");
const express = require("express");
const fetch = require("node-fetch");
const app = express();
const fs = require('fs');
app.use(cors());

fs.readFile('apikey', "utf8", (err, data) => {
    if(err) console.log("Was not able to read API-key!", err);
    fetch(`https://api.themoviedb.org/4/list/1?api_key=${data}`, {
        headers: {
          "Content-Type": "application/json;charset=utf-8"
    }
})
    .then(r => r.json())
    .then(j => {
        console.log(j)
        const htmlArray = j.results;
        .map(movieObj => {
            return `
                <div>${movieObj.title}</div>
            `
        }).forEach(eventStr=>{
            document.querySelector(".container").innerHTML += eventStr;
        })
    })
});



