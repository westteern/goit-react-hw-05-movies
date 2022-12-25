import { Link, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Img, Wrapper, InfoList, GoBackBtn } from './MovieCard.styled';
import { BiLeftArrowAlt } from 'react-icons/bi';

const MovieCard = ({
  goBack,
  poster,
  title,
  vote,
  overview,
  genres,
  from,
  year,
}) => {
  return (
    <main>
      <GoBackBtn type="button" onClick={goBack}>
        <BiLeftArrowAlt
          style={{
            width: '15',
            height: '15',
            verticalAlign: 'middle',
          }}
        />
        Go back
      </GoBackBtn>
      <Wrapper>
        <Img src={poster} alt={title} />
        <div>
          <h2>
            {title}({year})
          </h2>
          <p>User Score: {vote} %</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres}</p>
        </div>
      </Wrapper>
      <InfoList>
        <p>Aditional information</p>
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
      </InfoList>
      <Outlet />
    </main>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string,
  poster: PropTypes.string.isRequired,
  vote: PropTypes.string,
  overview: PropTypes.string,
  genres: PropTypes.string,
  goBack: PropTypes.func.isRequired,
  year: PropTypes.string,
  from: PropTypes.object,
};

export default MovieCard;
