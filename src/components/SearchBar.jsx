// src/components/SearchBar.js
import React, { useState } from 'react';
import '../App.css';

export default function SearchBar({ onSearch }) {
  const [inputValue, setInputValue] = useState('');

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    onSearch(inputValue);
  }

  return (
    <form onSubmit={handleFormSubmit} className="searchbar">
      <input
        type="text"
        placeholder="Search emojis..."
        value={inputValue}
        onChange={handleInputChange}
        className="search-input"
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
}
