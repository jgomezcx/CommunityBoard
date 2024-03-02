// src/App.jsx
import React from 'react';
import Cards from './Cards';
import './App.css'; // Make sure to create an App.css if it doesn't exist

function Header() {
  return (
    <header className="header">
      <div class="header-image-container">
        <img src="/images/header-image.png" alt="Logo" className="header-logo" />
      </div>
      <h1 className="header-title">Coding Tools Community</h1>
    </header>
  );
}

function App() {
  // Array of card data
  
  const cardData = [
    {
      title: 'Learn git visualy as an interative game',
      subject: 'Git',
      imageUrl: '/images/gitBranch.png',
      Url: 'https://learngitbranching.js.org/'
    },
    {
      title: 'Quick resources for Code snippets!',
      subject: 'JS, CSS, React Hooks, Git, node.js, etc..',
      imageUrl: '/images/30s-logo.png',
      Url: 'https://www.30secondsofcode.org/'
    },
    {
      title: 'Coding Interviews technical problems',
      subject: 'interview leetcode',
      imageUrl: '/images/neetcode.png',
      Url: 'https://neetcode.io/'
    },
    {
      title: 'Open source UI elements',
      subject: 'UI/UX',
      imageUrl: '/images/uiverse.png',
      Url: 'https://uiverse.io/'
    },
    {
      title: 'Data structures and algorithms visuals',
      subject: 'Data structures and algorithms',
      imageUrl: '/images/visu.png',
      Url: 'https://visualgo.net/en'
    },
    {
      title: 'free loaders and spinners',
      subject: 'loading/spinnng icons',
      imageUrl: '/images/uiball.png',
      Url: 'https://uiball.com/ldrs/'
    },
    {
      title: 'Image icons',
      subject: 'frontend interface',
      imageUrl: '/images/mage.png',
      Url: 'https://mageicons.com/'
    },
    {
      title: 'Free animates icons',
      subject: 'Frontend icons',
      imageUrl: '/images/lordicon.png',
      Url: 'https://lordicon.com/'
    },
    {
      title: 'Best free fonts',
      subject: 'CSS fonts',
      imageUrl: '/images/fontshare.png',
      Url: 'https://www.fontshare.com/'
    },
    {
      title: 'best CSS color matcher',
      subject: 'CSS color combination visualizer',
      imageUrl: '/images/Randoma.png',
      Url: 'https://randoma11y.com/'
    },
    // ... Add more card data objects here
  ];

  return (
    <div className="App" style={{ backgroundColor: '#566573 ' }}>
      <Header />

      <div className="card-container">
        {cardData.map((card, index) => (
          <Cards
            key={index}
            title={card.title}
            subject={card.subject}
            imageUrl={card.imageUrl}
            Url={card.Url}
          />
        ))}
      </div>
      
    </div>
  );
}

export default App;
