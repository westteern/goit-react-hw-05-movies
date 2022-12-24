import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'api-service/api-service';

const Reviews = () => {
  const { id } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    const fetchMovieReviews = async id => {
      try {
        const reviews = await getMovieReviews(id);
        setMovieReviews(reviews.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovieReviews(id);
  }, [id]);
  const reviewsItem = movieReviews.map(({ id, author, content }) => (
    <li key={id}>
      <h3>Author: {author}</h3>
      <p>{content}</p>
    </li>
  ));

  return (
    <section>
      <div>
        <ul>
          {reviewsItem.length ? (
            reviewsItem
          ) : (
            <p>We don't have any reviews for this movie</p>
          )}
        </ul>
      </div>
    </section>
  );
};

Reviews.propTypes = {
  element: PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }),
};

export default Reviews;
