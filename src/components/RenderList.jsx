import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const RenderList = ({ films }) => {
  const location = useLocation();
  const listItems = films.map(({ id, title }) => (
    <li key={id}>
      <Link state={{ from: location }} to={`/movies/${id}`}>
        {title}
      </Link>
    </li>
  ));
  return <ul>{listItems}</ul>;
};

RenderList.defaultProps = {
  films: [],
};
RenderList.propTypes = {
  listItems: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }),
};

export default RenderList;
