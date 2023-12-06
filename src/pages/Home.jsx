import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getTrendingMovies } from 'utils/api';
import TrendingMovies from 'components/TrendingMovies/TrendingMovies';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const [trendingMoviesArr, setTrendingMoviesArr] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setIsLoading(true);
        const { results } = await getTrendingMovies();

        setTrendingMoviesArr(results);
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
    fetchTrendingMovies();
  }, []);

  return (
    <>
      <h1 className="title">Trending today</h1>
      {isLoading && <Loader />}
      {error && <ToastContainer />}
      <TrendingMovies movies={trendingMoviesArr} />
    </>
  );
};

export default Home;
