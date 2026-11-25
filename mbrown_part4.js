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

//Created test movie to test
let testMovie = new Movie(1, "Test Movie", 2020, 3);
console.log("B4.2 One movie:", testMovie);

// List of movies
// Movie ID
// Movie Name
// Movie Year of release
// rating - score out of 10
let movies = [
new Movie(2, "The Matrix", 1999, 8.7),
new Movie(8, "Star Wars", 1977, 8.6),
new Movie(4, "Lord of the Rings", 2001, 8.9),
new Movie(10, "The Dark Knight", 2008, 9.1),
new Movie(3, "Avatar", 2009, 7.9),
new Movie(6, "Iron Man", 2008, 7.8),
new Movie(5, "The Avengers", 2012, 8.0),
new Movie(7, "Stuart Little", 1999, 6.0),
new Movie(9, "A Bugs Life", 1998, 7.2),
new Movie(1, "Inception", 2010, 8.8),
];
console.log("B4.3 Movies:", movies);

//Order the movies
movies.sort(function (a, b) {
  return a.movieId - b.movieId;
});
console.log("B4.4 Sorted by ID:", movies);


// Create the search function
function sequentialSearch(searchArray, targetId) {
    let found = null;
  console.log(`Target ID: ${targetId}`);

  // Check each movie one by one, from the start of the list
  for (let i = 0; i < searchArray.length; i++) {
    console.log(`Checking position ${i}, ID: ${searchArray[i].movieId}`);

    // Test if this movie has the ID we want
    if (searchArray[i].movieId === targetId) {
      found = searchArray[i];
      break;
    }
  } // End for
  return found;
}

// result - the movie found
let result = sequentialSearch(movies, 7);
if (result === null) {
  console.log("The movie with ID 7 was not found");
} else {
  console.log(`The movie with ID 7 was found: ${result.title} (${result.year})`);
}

// Result - The movie was not found
result = sequentialSearch(movies, 99);
if (result === null) {
  console.log("The movie with ID 99 was not found");
} else {
  console.log(`The movie with ID 99 was found: ${result.title} (${result.year})`);
}