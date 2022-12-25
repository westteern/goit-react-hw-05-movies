import { getMovieDetails } from 'api-service/api-service';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loader from 'components/Loader';
import MovieCard from 'components/MovieCard/MovieCard';

const MovieDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || '/';
  const [movieDetails, setMovieDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async id => {
      try {
        setIsLoading(true);
        const movieData = await getMovieDetails(id);
        setMovieDetails(movieData);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieDetails(id);
  }, [id]);

  const {
    original_title,
    genres,
    overview,
    poster_path,
    vote_average,
    release_date,
  } = movieDetails;

  const genreFormatting = genres
    ? genres.map(genre => genre.name).join(', ')
    : null;
  let poster = !poster_path
    ? 'https://via.placeholder.com/300x450?text=Poster+Not+Found'
    : `https://image.tmdb.org/t/p/w300/${poster_path}`;
  const vote = ((vote_average * 100) / 10).toFixed();
  const releaseDate = release_date ? release_date.slice(0, 4) : null;
  const goBack = () => navigate(from);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <MovieCard
          title={original_title}
          year={releaseDate}
          poster={poster}
          vote={vote}
          overview={overview}
          genres={genreFormatting}
          goBack={goBack}
          from={from}
        />
      )}
    </>
  );
};

export default MovieDetails;
