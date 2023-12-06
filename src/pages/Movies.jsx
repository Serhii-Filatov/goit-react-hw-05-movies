import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getMoviesbySearchQuery } from 'utils/api';

import TrendingMovies from 'components/TrendingMovies/TrendingMovies';
import { Loader } from 'components/Loader/Loader';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchMovies, setSearchMovies] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const query = searchParams.get('query');

  useEffect(() => {
    const fetchMoviesBySearchQuery = async () => {
      try {
        if (!query) return;
        setIsLoading(true);
        const data = await getMoviesbySearchQuery(query);

        setSearchMovies(data.results);
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
    fetchMoviesBySearchQuery();
  }, [query]);

  const handleSearchFormSubmit = event => {
    event.preventDefault();
    const searchQuery = event.currentTarget.elements.searchMovieByName.value;
    setSearchParams({ query: searchQuery });
    event.currentTarget.reset();
  };

  return (
    <>
      <form className="search-form" onSubmit={handleSearchFormSubmit}>
        <label className="search-form-lable">
          <p className="search-form-text">Search movie by name</p>
          <input
            className="search-form-input"
            type="text"
            name="searchMovieByName"
          />
        </label>
        <button className="search-form-submit">Search</button>
      </form>
      {isLoading && <Loader />}
      {error && <ToastContainer />}
      {searchMovies.length > 0 && <TrendingMovies movies={searchMovies} />}
    </>
  );
};

export default Movies;
