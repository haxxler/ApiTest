import axios from 'axios'

function fetchMovies() {
    axios
        .get('https://www.omdbapi.com/?apikey=5e7c7a82&s=frozen')
        .then(resp => {
            console.log(resp);
            const h1El = document.querySelector('h1');
            const imgEl = document.querySelector('img');
            h1El.textContent = resp.data.Search[0].Title;
            imgEl.src = resp.data.Search[0].Poster;
        })

}

fetchMovies();