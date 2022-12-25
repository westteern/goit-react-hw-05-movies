import PropTypes from 'prop-types';
import { getMovieDetails } from 'api-service/api-service';
import {
  useParams,
  useNavigate,
  useLocation,
  Link,
  Outlet,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loader from 'components/Loader';

const MovieDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || '/';
  const [movieDetails, setMovieDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = id => {
      try {
        setIsLoading(true);
        getMovieDetails(id).then(r => setMovieDetails(r));
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieDetails(id);
  }, [id]);

  const { original_title, genres, overview, poster_path, vote_average } =
    movieDetails;
  const genreFormatting = genres
    ? genres.map(genre => genre.name).join(', ')
    : null;
  let poster = !poster_path
    ? 'https://via.placeholder.com/300x450?text=Poster+Not+Found'
    : `https://image.tmdb.org/t/p/w300/${poster_path}`;

  const vote = ((vote_average * 100) / 10).toFixed();
  const goBack = () => navigate(from);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && movieDetails && (
        <main>
          <button onClick={goBack}>Go back</button>
          <div>
            <img src={poster} alt={original_title} />
            <h1>{original_title}</h1>
            <p>User Score: {vote} %</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            <p>{genreFormatting}</p>
          </div>
          <h3>Aditional information</h3>
          <ul>
            <li>
              <Link state={{ from }} to="cast">
                Cast
              </Link>
            </li>
            <li>
              <Link state={{ from }} to="reviews">
                Reviews
              </Link>
            </li>
          </ul>
          <Outlet />
        </main>
      )}
    </>
  );
};

MovieDetails.propTypes = {
  movieById: PropTypes.shape({
    original_title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number,
    overview: PropTypes.array,
    genres: PropTypes.array,
  }),
};
export default MovieDetails;
