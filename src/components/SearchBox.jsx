import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BiSearch } from 'react-icons/bi';

const SearchBox = ({ onSubmit }) => {
  const [searchQuery, setsearchQuery] = useState('');

  const handleInput = e => {
    const inputValue = e.currentTarget.value.toLowerCase();
    setsearchQuery(inputValue);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      toast.info('This field can`t be empty');
      return;
    }
    onSubmit(searchQuery);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInput}
          value={searchQuery}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit">
          <BiSearch
            style={{
              width: '20',
              height: '20',
              verticalAlign: 'middle',
            }}
          />
        </button>
        {/* <span>Search</span> */}
      </form>
    </div>
  );
};

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBox;
