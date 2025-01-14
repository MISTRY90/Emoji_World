import EmojiCard from "./EmojiCard";
import '../App.css';

export default function EmojiGrid({ emojis, onCopy }) {
  if (!emojis.length) {
    return <div>No emojis found. Try a different search term.</div>;
  }

  return (
    <div className="emoji-grid">
      {emojis.map((emoji, index) => {
        // Extract emoji from Unicode value
        const emojiChar = String.fromCodePoint(parseInt(emoji.unicode[0].replace('U+', ''), 16));

        return (
          <EmojiCard
            key={emoji.name || index}
            emoji={emojiChar} // Pass rendered emoji directly
            name={emoji.name}
            onCopy={onCopy}
          />
        );
      })}
    </div>
  );
}
