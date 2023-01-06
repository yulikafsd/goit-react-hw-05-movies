import { Routes, Route } from "react-router-dom";

export const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<div>SharedLayout</div>}>
          <Route index element={<div>Home</div>} />
          <Route path="/movies" element={<div>Movies</div>} />
          <Route path="/movies:movieId" element={<div>MovieDetails</div>}>
            <Route path="cast" element={<div>MovieCast</div>} />
            <Route path="reviews" element={<div>MovieReviews</div>} />
          </Route>
            <Route path="*" element={<div>Not Found</div>} />
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