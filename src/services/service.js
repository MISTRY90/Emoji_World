export const fetchEmojis = async () => {
  try {
    const response = await fetch(
      'https://emoji-api.com/emojis?access_key=6944bbe8f74f1394d40c585a8394a056bc97574a'
    );
    if (!response.ok) throw new Error('Failed to fetch emojis');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching emojis:', error);
    return [];
  }
};
