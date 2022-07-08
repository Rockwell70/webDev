import fetch from "node-fetch";

const tmdbKey = 'c0ffb381d49a8e2459f662fcb21a2efb';
const tmdbBaseUrl = 'https://api.themoviedb.org/3';
const playBtn = document.getElementById('playBtn');

const getGenres = async () => {
    const genreRequestEndpoint = '/genre/movie/list';
    const requestParams = `?api_key=${tmdbKey}`;
    const urlToFetch = `${tmdbBaseUrl}${genreRequestEndpoint}${requestParams}`;

    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            const jsonResponse = await response.json();
            const genres = jsonResponse.genres
            //console.log(genres)
            return genres
        } else {
            // Handle server error
            // example: INTERNAL SERVER ERROR: 500 error
            console.log(`${response.statusText}: ${response.status} error`);
        }
    } catch (error) {
        console.log(error);
    }



};

getGenres();

const getMovies = () => {
    const selectedGenre = getSelectedGenre();

};

const getMovieInfo = () => {

};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = () => {
    const movieInfo = document.getElementById('movieInfo');
    if (movieInfo.childNodes.length > 0) {
        clearCurrentMovie();
    };

};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;