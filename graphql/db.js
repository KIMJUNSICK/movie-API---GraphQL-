import fetch from "node-fetch";

const API_URL = "https://yts.lt/api/v2/list_movies.json?";

export const getMovies = (sort, limit) => {
  let REQEUSTED_URL = API_URL;
  if (sort === "rating") {
    REQEUSTED_URL += `&sort_by=${sort}`;
  }
  if (limit > 0) {
    REQEUSTED_URL += `&limit=${limit}`;
  }
  return fetch(REQEUSTED_URL)
    .then(res => res.json())
    .then(json => json.data.movies);
};
