import { Routes, Route } from "react-router-dom";
import {SharedLayout, Home, Movies, MovieDetails, Cast, Reviews, NotFound} from "components";

export const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
          <Route index element={<Home/>} />
          <Route path="/movies" element={<Movies/>} />
          <Route path="/movies:movieId" element={<MovieDetails/>}>
            <Route path="cast" element={<Cast/>} />
            <Route path="reviews" element={<Reviews/>} />
          </Route>
            <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    </>
  );
};

// https://api.themoviedb.org/3/movie/550?api_key=9ce583f6a8e715ddcf70f43e50ddfd1c
// api_key=9ce583f6a8e715ddcf70f43e50ddfd1c
// /trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
// /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
// /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
// /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
// /movies/get-movie-reviews запит оглядів для сторінки кінофільму.