import '../App.css';

export default function EmojiCard({ name, emoji, onCopy }) {
  return (
    <div className="emoji-card" onClick={() => onCopy(emoji)}>
      <span className="emoji">{emoji}</span>
      <p className="emoji-name">{name}</p>
    </div>
  );
}
