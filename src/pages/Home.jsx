// import { TrendList } from 'components/TrendList';
import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'api-service/api-service';
import { RenderList } from 'components/RenderList';
export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const trends = await getTrendingMovies();
        setTrendingMovies(trends);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTrendingMovies();
  }, []);
  return (
    <main>
      <h1>Trending today</h1>
      <RenderList films={trendingMovies} />
    </main>
  );
};
