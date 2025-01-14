import { useState, useEffect } from "react";
import Header from "./components/Header";
import { getEmoji } from "./services/service";
import "./App.css";
import EmojiGrid from "./components/Emojigrid";

function App() {
  const [emojis, setEmojis] = useState([]);
  const [search, setSearch] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getEmoji();
        const filteredEmojis = data.filter((emoji) =>
          emoji.name.toLowerCase().includes(search.toLowerCase())
        );
        setEmojis(filteredEmojis);
      } catch (error) {
        console.error(error.message);
      }
    };
    if (isSubmitted) {
      fetchData();
    }
  }, [search, isSubmitted]);


  function handleSearchSubmit(query) {
    setSearch(query);
    setIsSubmitted(true);
  }

  function handleCopy(emoji) {
    navigator.clipboard.writeText(emoji);
    alert(`Copied emoji: ${emoji}`);
  }
  return (
    <div className="app">
      <Header onSubmit={handleSearchSubmit} />
      {isSubmitted && (
          <EmojiGrid emojis={emojis} onCopy={handleCopy} />
      )}
    </div>
  );
}

export default App;
