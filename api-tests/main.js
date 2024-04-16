let tvmazeSearch = document.getElementById("tvmaze-search");
let title = document.getElementById("tvmaze-title");
let genre = document.getElementById("tvmaze-genre");
let running = document.getElementById("tvmaze-running");
let summary = document.getElementById("tvmaze-summary");

tvmazeSearch.addEventListener("keydown", (e) => {
    if (e.key === 'Enter') {
        genre.textContent = "";
        search();
    }
});


function search() {
    let searchUrl = `https://api.tvmaze.com/search/shows?q=${tvmazeSearch.value}`;
    console.log(searchUrl);

    let show = fetch(searchUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (realData) {
            title.innerText = `title: ${realData[0].show.name}`;
            let genres = realData[0].show.genres
            genre.textContent = "genres: ";
            for (let i = 0; i < genres.length; i++) {
                genre.textContent += `${genres[i]}`;
                if (i < genres.length - 1) {
                    genre.textContent += ", ";
                }
            }
            running.textContent = `${realData[0].show.status} since `;
            if (realData[0].show.status === "Running") {
                running.textContent += `${realData[0].show.premiered}`;
            }
            else {
                running.textContent += `${realData[0].show.ended}`;
            }
            summary.innerHTML = realData[0].show.summary;
        })
}