// src/api/emoji.js
export const fetchEmojis = async () => {
    try {
      const response = await fetch('https://raw.githack.com/OpenMoji/openmoji/master/data/openmoji.json');
      if (!response.ok) throw new Error('Failed to fetch emojis');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching emojis:', error);
      return [];
    }
  };