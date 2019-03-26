const cors = require("cors");
const express = require("express");
const fetch = require("node-fetch");
const app = express();
app.use(cors());

fetch("https://api.themoviedb.org/3/movie/550?api_key=851a59dab7ff415ab3747e067347ed4e")
.then(r => r.json())
.then(j => {
    console.log()
})
