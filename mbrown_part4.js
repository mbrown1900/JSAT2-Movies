//JSAT2 Part 4
//Author: Mathew Brown

//Define Movie Class
class Movie {
     constructor(movieId, title, year, rating) {
    this.movieId = movieId;
    this.title = title;
    this.year = year;
    this.rating = rating;
     }
}

let testMovie = new Movie(1, "Test Movie", 2020, 3);
console.log("B4.2 One movie:", testMovie);