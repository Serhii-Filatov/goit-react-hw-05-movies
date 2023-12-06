import { getMovieById } from 'components/Services/api';
import { useEffect, useRef, useState } from 'react';
import {
  NavLink,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import MovieCard from 'components/MovieCard/MovieCard';
import { lazy } from 'react';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';

const Casts = lazy(() => import('components/Casts/Casts'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  const [movieCard, setMovieCard] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        setIsLoading(true);
        const data = await getMovieById(movieId);

        setMovieCard(data);
      } catch (error) {
        setError(
          toast.error('Sorry, something went wrong. Try again!', {
            theme: 'colored',
          })
        );
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieById();
  }, [movieId]);

  return (
    <>
      <NavLink className="backLink" to={backLinkHref.current}>
        Go back
      </NavLink>
      {isLoading && <Loader />}
      {error && <ToastContainer />}

      {movieCard && <MovieCard movie={movieCard} />}
      <div className="additional-wrapper">
        <h3 className="adittional-title"> Additional information</h3>
        <ul className="adittional-list">
          <li className="adittional-item">
            <NavLink to="cast">Casts</NavLink>
          </li>
          <li className="adittional-item">
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </div>

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="cast" element={<Casts />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default MovieDetails;
