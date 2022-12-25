import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'api-service/api-service';
import RenderList from 'components/RenderList/RenderList';
import Loader from 'components/Loader';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setIsLoading(true);
        const trends = await getTrendingMovies();
        setTrendingMovies(trends);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      {isLoading && <Loader />}
      <RenderList films={trendingMovies} />
    </main>
  );
};
export default Home;
