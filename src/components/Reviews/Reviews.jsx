import React, { useEffect, useState } from 'react';
import { getMovieReviews } from 'components/Services/api';
import { useParams } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReviewsList from 'components/ReviewsList/ReviewsList';
import { Loader } from 'components/Loader/Loader';

const Reviews = () => {
  const { movieId } = useParams();

  const [movieReviews, setMovieReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        setIsLoading(true);
        const data = await getMovieReviews(movieId);

        setMovieReviews(data.results);
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
    fetchMovieReviews();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <ToastContainer />}
      {movieReviews.length > 0 ? (
        <ReviewsList reviews={movieReviews} />
      ) : (
        <p>We don`t have any reviews for this movie</p>
      )}
    </>
  );
};

export default Reviews;
