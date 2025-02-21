// src/App.js
import React, { useEffect, useState } from 'react';
import { Container, CircularProgress } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Header from './components/Header';
import EmojiGrid from './components/EmojiGrid';
import theme from './themes';
import { fetchEmojis } from './services/service';
import Fuse from 'fuse.js';
import './App.css';

function App() {
  const [emojis, setEmojis] = useState([]);
  const [filteredEmojis, setFilteredEmojis] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fuse, setFuse] = useState(null);

  // Fetch emojis from the API
  useEffect(() => {
    const loadEmojis = async () => {
      const data = await fetchEmojis();
      setEmojis(data);
      setFilteredEmojis(data.slice(0, 30));
      setLoading(false);
    };
    loadEmojis();
  }, []);

  // Initialize Fuse when emojis data is available
  // Initialize Fuse with updated options
useEffect(() => {
  if (emojis.length > 0) {
    const options = {
      keys: [
        { name: 'unicodeName', weight: 0.7 },
        { name: 'slug', weight: 0.3 },
      ],
      threshold: 0.2,
      includeScore: true,
      ignoreLocation: true,
      minMatchCharLength: 2,
    };
    setFuse(new Fuse(emojis, options));
  }
}, [emojis]);

// Updated handleSearch function
const handleSearch = (query) => {
  const normalizedQuery = query.trim().toLowerCase();

  if (normalizedQuery === '') {
    setFilteredEmojis(emojis);
  } else if (fuse) {
    const results = fuse.search(normalizedQuery);

    // Prioritize exact matches
    const exactMatches = results.filter((result) => {
      const name = result.item.unicodeName.toLowerCase();
      const slug = result.item.slug.toLowerCase();
      return name.includes(normalizedQuery) || slug.includes(normalizedQuery);
    });

    // Sort remaining results by score
    const otherResults = results
      .filter((result) => !exactMatches.includes(result))
      .sort((a, b) => a.score - b.score);

    // Combine exact matches and other results
    const sortedResults = [...exactMatches, ...otherResults].map((result) => result.item);
    setFilteredEmojis(sortedResults);
  }
};

  // Callback to copy the emoji to the clipboard
  const handleCopy = (emojiChar) => {
    navigator.clipboard.writeText(emojiChar);
    alert(`Copied ${emojiChar} to clipboard!`);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <Header onSubmit={handleSearch} />
        {loading ? (
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <CircularProgress />
          </div>
        ) : (
          <EmojiGrid emojis={filteredEmojis} onCopy={handleCopy} />
        )}
      </Container>
    </ThemeProvider>
  );
}

export default App;
