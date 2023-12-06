import { defaultImg } from '../../utils/constants';

const MovieCard = ({ movie }) => {
  const { title, name, poster_path, overview, genres, vote_average } = movie;

  return (
    <div className="card-wraper">
      <img
        className="card-img"
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : defaultImg
        }
        width={300}
        alt={`poster to movie: ${title}`}
      />
      <div className="card-info-wrapper">
        <h1>{title ? title : name}</h1>
        <p>User Score: {vote_average}</p>
        <h2>Overview</h2>
        <p>{overview}</p>

        {genres && (
          <>
            <h2>Genres</h2>
            <ul className="genres-list">
              {genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
