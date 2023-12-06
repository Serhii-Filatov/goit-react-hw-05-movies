import { getMovieCredits } from 'components/Services/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CastList from 'components/CastList/CastList';
import { Loader } from 'components/Loader/Loader';

const Casts = () => {
  const { movieId } = useParams();

  const [movieCasts, setMovieCasts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieCasts = async () => {
      try {
        setIsLoading(true);
        const data = await getMovieCredits(movieId);
        const castArr = data.cast;
        setMovieCasts(castArr);
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
    fetchMovieCasts();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <ToastContainer />}
      {movieCasts && <CastList casts={movieCasts} />}
    </>
  );
};

export default Casts;
