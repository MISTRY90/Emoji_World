import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import '../App.css';

export default function EmojiCard({ emoji, onCopy }) {
  return (
    <Card
      className="emoji-card"
      onClick={() => onCopy(emoji)}
      sx={{ cursor: 'pointer', textAlign: 'center' }}
    >
      <CardContent>
        <Typography variant="h3">{emoji}</Typography>
        {/* Removed the description text */}
      </CardContent>
    </Card>
  );
}