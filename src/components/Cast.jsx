import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'api-service/api-service';

const Cast = () => {
  const { id } = useParams();
  const [movieCasts, setMovieCasts] = useState([]);

  useEffect(() => {
    const fetchMovieCredits = async id => {
      try {
        const credits = await getMovieCredits(id);
        setMovieCasts(credits.cast);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovieCredits(id);
  }, [id]);

  const castItem = movieCasts.map(({ name, character, profile_path, id }) => (
    <li key={id}>
      <img
        src={
          !profile_path
            ? 'https://via.placeholder.com/200x300?text=Photo+Not+Found'
            : `https://image.tmdb.org/t/p/w200/${profile_path}`
        }
        alt={name}
      />
      <p>{name}</p>
      <p>Character: {character}</p>
    </li>
  ));
  return (
    <section>
      <div>
        <ul>
          {castItem.length ? (
            castItem
          ) : (
            <p>Sorry, but no cast list was found for this movie.</p>
          )}
        </ul>
      </div>
    </section>
  );
};

Cast.propTypes = {
  castItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
    profile_path: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }),
};

export default Cast;
