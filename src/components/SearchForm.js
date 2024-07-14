import React, { useState } from 'react';
import styles from '../utils/styles';

const SearchForm = ({ onSearch }) => {
  const [searchCity, setSearchCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchCity);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form" style={styles.searchForm}>
      <input
        type="text"
        value={searchCity}
        onChange={(e) => setSearchCity(e.target.value)}
        placeholder="Inserisci una città"
        className="search-input"
        style={styles.searchInput}
      />
      <button type="submit" className="search-button" style={styles.searchButton}>🔍</button>
    </form>
  );
};

export default SearchForm;