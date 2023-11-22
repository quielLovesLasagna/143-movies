"use strict";

// Elements
const moviesContainer = document.querySelector(".movies__container");
const searchInput = document.querySelector(".navigation__search-input");
const moviePreviewContainer = document.querySelector(
	".hero__movie-preview-container"
);
const btnSearch = document.querySelector(".search");
const overlay = document.querySelector(".overlay");

const apiKey = "819ce82c";

// List of random movies
const movieList = [
	{
		Title: "Last Action Hero",
		Year: "1993",
		imdbID: "tt0107362",
		Type: "movie",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BNjdhOGY1OTktYWJkZC00OGY5LWJhY2QtZmQzZDA2MzY5MmNmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
	},
	{
		Title: "Looney Tunes: Back in Action",
		Year: "2003",
		imdbID: "tt0318155",
		Type: "movie",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BZDc0NTc4YTMtOTRiYS00MzQ5LTg5MDAtYWMzZTM5MjljYWViXkEyXkFqcGdeQXVyMTUyOTc1NDYz._V1_SX300.jpg",
	},
	{
		Title: "An Action Hero",
		Year: "2022",
		imdbID: "tt15600222",
		Type: "movie",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BMDJiOTdmMGItMmM5MC00ZTRiLWIzNjctNDE4ZTZkMWMzZTg0XkEyXkFqcGdeQXVyOTI3MzI4MzA@._V1_SX300.jpg",
	},
	{
		Title: "A Civil Action",
		Year: "1998",
		imdbID: "tt0120633",
		Type: "movie",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BZmEzNjhiZWEtNTM5OS00ZmQyLThhYjEtNjY4ZDZhOGFkMzI4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
	},
	{
		Title: "Missing in Action",
		Year: "1984",
		imdbID: "tt0087727",
		Type: "movie",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BNDczNDljZTUtNmZmZC00YzFkLWExYzEtYzQxNmNkNmFjMDQyXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
	},
	{
		Title: "Action Point",
		Year: "2018",
		imdbID: "tt6495770",
		Type: "movie",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BMjEyMTU5MTk1N15BMl5BanBnXkFtZTgwMzIzMzczNTM@._V1_SX300.jpg",
	},
	{
		Title: "Action Jackson",
		Year: "1988",
		imdbID: "tt0094612",
		Type: "movie",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BYjc0Y2E2ZjYtZGQxNi00NDgxLTk0OTctMDAzYTg1MzFmMjI4XkEyXkFqcGdeQXVyNjc5NjEzNA@@._V1_SX300.jpg",
	},
	{
		Title: "321 Action",
		Year: "2020",
		imdbID: "tt13423846",
		Type: "movie",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BYTRmYzgyZjEtN2UyZS00NDYxLTlkMDctMGJjZjY0ODExNWE5XkEyXkFqcGdeQXVyNjI2ODk3NTM@._V1_SX300.jpg",
	},
	{
		Title: "Missing in Action 2: The Beginning",
		Year: "1985",
		imdbID: "tt0089604",
		Type: "movie",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BOTFhNTdiNDQtZGQ4Ny00MDA1LTg1ZjEtYzZhMGU5YjBjNTBhXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
	},
	{
		Title: "Class Action",
		Year: "1991",
		imdbID: "tt0101590",
		Type: "movie",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BNWY5Mjk4ZmItMTAzYS00NWE3LWEzYzYtNDgzY2MwMzA3MDIzXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg",
	},

	{
		Title: "True Romance",
		Year: "1993",
		imdbID: "tt0108399",
		Type: "movie",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BYWRhYWJjNGEtMjNhNi00NzFkLTk1ZGUtNjNmM2FlNTNhNWRjXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
	},
	{
		Title: "Romance & Cigarettes",
		Year: "2005",
		imdbID: "tt0368222",
		Type: "movie",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BYWQzOTk1MjItNGVhZC00NzhiLWFkNzEtYTI5YTk3NzA4M2M4XkEyXkFqcGdeQXVyMTcwOTQzOTYy._V1_SX300.jpg",
	},
	{
		Title: "Romance",
		Year: "1999",
		imdbID: "tt0194314",
		Type: "movie",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BMGViMmNjMGEtMjUwMC00ZjNkLWE4YTItN2RmOWQyNTQ1OWU2XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
	},
	{
		Title: "Shuddh Desi Romance",
		Year: "2013",
		imdbID: "tt2988272",
		Type: "movie",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BMTU0NjI2MTI0Ml5BMl5BanBnXkFtZTcwNjI4MzY5OQ@@._V1_SX300.jpg",
	},
	{
		Title: "Office Romance",
		Year: "1977",
		imdbID: "tt0076727",
		Type: "movie",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BMDZmNjBmYzMtMmU1NC00MzQ1LWE1NzgtOTlhOGFlMzQ5MzAwXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg",
	},
	{
		Title: "Murphy's Romance",
		Year: "1985",
		imdbID: "tt0089643",
		Type: "movie",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BM2E1OTkyN2QtMjI4NS00MGRmLTkxZmMtNjgyY2NhNTkzMjEwXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg",
	},
	{
		Title: "A Little Romance",
		Year: "1979",
		imdbID: "tt0079477",
		Type: "movie",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BNDVhNjQyMTQtYTFhNy00MWNmLTkwZjEtNjc3MmQ2MDZhZmIwXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_SX300.jpg",
	},
	{
		Title: "Guilty of Romance",
		Year: "2011",
		imdbID: "tt1743724",
		Type: "movie",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BMjQ1ZTE1NGEtNzVlOS00ODY5LThlYzItZDYxZDY5NzgxOWZlXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SX300.jpg",
	},
	{
		Title: "Modern Romance",
		Year: "1981",
		imdbID: "tt0082764",
		Type: "movie",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BYmZmZjE4NmYtMDIxYi00YzdmLWI5NTItMzgwZTk5OGJlZWQzXkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_SX300.jpg",
	},
	{
		Title: "A Cruel Romance",
		Year: "1984",
		imdbID: "tt0090368",
		Type: "movie",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BMmZhM2NlNjQtMjgxOC00YTJhLThlYzMtMDMxYmEyYzAxMzc2L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjMxMjkwMjI@._V1_SX300.jpg",
	},
];

const displayMovieList = function () {
	// Get data from movieList
	const movies = movieList
		.map((movie) => {
			return `
      <div class="movies__container-item">
        <img
          src="${movie.Poster}"
          alt="${movie.Title}"
          class="movie-poster"
        />
        <div class="movies__container-item-info">
          <h3 class="movie-title">${movie.Title}</h3>
          <p class="movie-year">${movie.Year}</p>
          <p class="movie-type">Type: ${movie.Type}</p>
        </div>
      </div>
      `;
		})
		.join("");
	// Display data to UI
	moviesContainer.innerHTML = movies;
};

const displayMovie = function (data) {
	moviePreviewContainer.innerHTML = "";
	moviePreviewContainer.innerHTML = `
    <h1 class="hero__movie-title">${data.Title}</h1>
    <div class="hero__movie">
      <img
        src="${data.Poster}"
        alt="${data.Title}"
        class="hero__movie-poster"
      />
      <div class="hero__movie-description-container">
        <p class="hero__movie-year">${data.Year}</p>
        <p class="hero__movie-description">
          ${data.Plot}
        </p>
        <button class="btn btn-watch-now">
          <ion-icon name="play" class="btn-play-icon"></ion-icon>
          <span>Watch Now</span>
        </button>
      </div>
    </div>
  `;
	overlay.style.display = "none";
};

const getMovie = async function () {
	const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchInput.value}&type=movie`;
	try {
		const res = await fetch(apiUrl);
		const data = await res.json();
		if (data.Response === "False") {
			throw new Error("Search field cannot be empty! Try again.");
		}
		displayMovie(data);
	} catch (err) {
		alert(err);
	}
};

// On load
displayMovieList();

// Display movie preview on search
btnSearch.addEventListener("click", getMovie);
