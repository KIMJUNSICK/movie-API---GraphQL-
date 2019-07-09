let movies = [
  {
    id: 0,
    name: "Full Metal Jacket",
    score: 9
  },
  {
    id: 1,
    name: "Christmas of August",
    score: 10
  },
  {
    id: 2,
    name: "歩いても　歩いても",
    score: 10
  },
  {
    id: 3,
    name: "Old Boy",
    score: 10
  },
  {
    id: 4,
    name: "Wonderful Life",
    score: 8
  }
];

export const getMovies = () => movies;

export const getById = id => {
  const filteredMovies = movies.filter(movie => movie.id === id);
  return filteredMovies[0];
};

export const deleteMovie = id => {
  const strainedMovies = movies.filter(movie => movie.id !== id);
  if (movies.length > strainedMovies.length) {
    movies = strainedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: movies.length,
    name: name,
    score: score
  };
  movies.push(newMovie);
  return newMovie;
};
