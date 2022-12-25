import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovie } from 'api-service/api-service';
import { ToastContainer } from 'react-toastify';
import SearchBox from '../components/SearchBox/SearchBox';
import RenderList from 'components/RenderList/RenderList';
import Loader from 'components/Loader';

const Movies = () => {
  const [searchMovie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    const fetchSearchMovies = async () => {
      try {
        setIsLoading(true);
        const searchs = await getSearchMovie(query);
        setMovie(searchs);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    if (query) {
      fetchSearchMovies();
    }
  }, [query]);

  const updateQueryString = query => {
    setSearchParams({ query });
  };

  return (
    <main>
      <SearchBox onSubmit={updateQueryString} />
      {isLoading && <Loader />}
      <RenderList films={searchMovie} />
      <ToastContainer autoClose={2000} />
    </main>
  );
};

export default Movies;
