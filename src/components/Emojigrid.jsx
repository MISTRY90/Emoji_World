import React from 'react';
import Masonry from '@mui/lab/Masonry';
import EmojiCard from './EmojiCard';
import '../App.css';

export default function EmojiGrid({ emojis, onCopy }) {
  if (!emojis || emojis.length === 0) {
    return (
      <div className="no-results">
        No emojis found. Try a different search term.
      </div>
    );
  }

  return (
    <Masonry columns={{ xs: 3, sm: 4, md: 5, lg: 6 }} spacing={2} className="emoji-grid">
      {emojis.map((emoji, index) => (
        <EmojiCard
          key={emoji.codePoint || index}
          emoji={emoji.character}
          onCopy={onCopy}
        />
      ))}
    </Masonry>
  );
}