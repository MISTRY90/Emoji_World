import React from 'react';
import SearchBar from './SearchBar';
import '../App.css';

export default function Header({ onSubmit }) {
  return (
    <header className="header">
      <h1>Emoji World</h1>
      <SearchBar onSearch={onSubmit} />
    </header>
  );
}