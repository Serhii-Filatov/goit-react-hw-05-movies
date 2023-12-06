import { Link, useLocation } from 'react-router-dom';
import { defaultImg } from '../../utils/constants';

const TrendingMovies = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className="trending-list">
      {movies &&
        movies.map(({ id, poster_path, title, name }) => (
          <li className="trending-item" key={id}>
            <Link
              state={{ from: location }}
              className="trending-link"
              to={`/movies/${id}`}
            >
              <img
                className="trending-item-img"
                width={300}
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                    : defaultImg
                }
                alt={`Card to ${title}`}
              />
              <h2 className="trending-item-title">{title ? title : name}</h2>
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default TrendingMovies;
