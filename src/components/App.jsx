import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import {Movies, MovieDetails, Cast, Reviews, NotFound} from "components";

const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));
const Home = lazy(() => import('./Home/Home'));

export const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies/>} />
          <Route path="/movies/:movieId" element={<MovieDetails/>}>
            <Route path="cast" element={<Cast/>} />
            <Route path="reviews" element={<Reviews/>} />
          </Route>
            <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    </>
  );
};