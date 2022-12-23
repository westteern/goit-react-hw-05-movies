import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovie } from 'api-service/api-service';
import { SearchBox } from '../components/SearchBox';
import { RenderList } from 'components/RenderList';

export const Movies = () => {
  const [searchMovie, setMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    const fetchSearchMovies = async () => {
      try {
        const searchs = await getSearchMovie(query);
        setMovie(searchs);
      } catch (error) {
        console.log(error);
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
      <RenderList films={searchMovie} />
    </main>
  );
};
