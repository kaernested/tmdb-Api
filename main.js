const container = document.querySelector(".container");

fetch("http://localhost:3046/movies")
.then(r => r.json())
.then(data => {
    console.log(data);
    data.results
    .map(movieObj => {
        return `

            <h1>${movieObj.title}</h1>
            <p>${movieObj.overview}</p>
            <img src="${movieObj.poster_path}">
            <p>${movieObj.release_date}</p>
        `
    }).forEach(eventStr=>{
        document.querySelector(".container").innerHTML += eventStr;
    })
})
