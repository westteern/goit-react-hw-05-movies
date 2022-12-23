import { Route, Routes, Link } from 'react-router-dom';
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
export const App = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="movies" element={<Movies />}></Route>
      </Routes>
    </div>
  );
};
