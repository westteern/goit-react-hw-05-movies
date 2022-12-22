import { fetchTrendingMovies } from 'api-service/apiService';
import { useEffect } from 'react';

export const App = () => {
  useEffect(() => {
    fetchTrendingMovies();
  });
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      React homework template
    </div>
  );
};
