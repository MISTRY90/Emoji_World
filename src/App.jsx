import React, { useEffect, useState } from 'react';
import { Container, Grid, CircularProgress, Typography, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { fetchEmojis } from './services/service';

function App() {
  const [emojis, setEmojis] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const loadEmojis = async () => {
      const data = await fetchEmojis();
      setEmojis(data);
      setLoading(false);
    };
    loadEmojis();
  }, []);

  const filteredEmojis = emojis.filter((emoji) =>
    emoji.annotation.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Emoji World
      </Typography>

      <TextField
        fullWidth
        placeholder="Search emojis..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        sx={{ mb: 4 }}
      />

      {loading ? (
        <CircularProgress sx={{ display: 'block', margin: '0 auto' }} />
      ) : filteredEmojis.length === 0 ? (
        <Typography variant="body1" align="center" sx={{ mt: 4 }}>
          No emojis found for "{searchQuery}". Try another search!
        </Typography>
      ) : (
        <Grid container spacing={2}>
          {filteredEmojis.map((emoji) => (
            <Grid item xs={4} sm={3} md={2} key={emoji.hexcode}>
              <Typography variant="h4" align="center">
                {String.fromCodePoint(parseInt(emoji.hexcode, 16))}
              </Typography>
              <Typography variant="caption" align="center" display="block">
                {emoji.annotation}
              </Typography>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default App;