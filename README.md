# Emoji World - Emoji Search and Copy React App 😄 🦮 🍑 🎊

Emoji World is a React-based web application that allows users to search, view, and copy emojis. It fetches emoji data from an external API and displays emojis with their names in a user-friendly grid. Users can search for emojis by name and click on them to copy the emoji to their clipboard.

## Features
- **Search Functionality**: Users can search for emojis by name in a search bar.
- **Emoji Grid**: Display emojis in a responsive grid layout, with each emoji displayed alongside its name.
- **Copy Emoji**: Clicking on an emoji copies it to the user's clipboard.
- **Responsive Design**: The app is designed to work seamlessly on different screen sizes, from mobile devices to desktop.

## Tech Stack
- **Frontend**: React, JSX, CSS (with custom styling)
- **API**: Emojihub API to fetch emoji data
- **State Management**: React hooks (`useState`, `useEffect`)
- **Clipboard Operations**: `navigator.clipboard.writeText` for copying emojis

## How to Run the Project Locally

### Prerequisites
- **Node.js** (v12 or later)
- **npm** or **yarn**

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/emoji-world.git
   cd emoji-world
   
2. **Install dependencies**:
   ```bash
      npm install
      # or
      yarn install

3. **Start the development server**:
   ```bash
   npm start
   #or
   yarn start

5. **Open the app in your browser at http://localhost:3000**.

### Folder Structure

    src/: Contains the main source code for the app
        components/: Contains all the React components (e.g., Header, SearchBar, EmojiGrid, EmojiCard)
        services/: Contains the API call (service.js)
        App.js: Main app component that controls state and passes data to child components
        App.css: Custom CSS for styling the app
