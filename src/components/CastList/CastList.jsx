import { defaultImg } from '../../utils/constants';

const CastList = ({ casts }) => {
  return (
    <ul>
      {casts &&
        casts.map(({ name, profile_path, character, id }) => (
          <li key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : defaultImg
              }
              width={150}
              alt={`poster ${name}`}
            />
            <h3>{name}</h3>
            <p>Character: {character}</p>
          </li>
        ))}
    </ul>
  );
};

export default CastList;
