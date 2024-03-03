import React, { useState } from 'react';
import Flashcard from './component/Flashcard';
import './App.css'; 

const cardPairs = [
  { question: "Who was the first person to join luffy's crew?", answer: "Zoro" },
  { question: "What is 2 + 2?", answer: "4" },
];

const App = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showQuestion, setShowQuestion] = useState(true);

  const handleNextCard = () => {
    const nextIndex = Math.floor(Math.random() * cardPairs.length);
    setCurrentCardIndex(nextIndex);
    setShowQuestion(true); 
  };

  const handleToggleCard = () => {
    setShowQuestion(!showQuestion); 
  };

  const currentCard = cardPairs[currentCardIndex];

  return (
    <div className="App">
      
      <div className="navbar">
 
      </div>
      
      <div className="content">
      <div className="card-info">
        <h2>One Piece Flashcards </h2>
        <p>Total cards: {cardPairs.length}</p>
        <p>Description: Short description about the flashcard set</p>
      </div>
      <div className="flashcard-container">
        <Flashcard 
          content={showQuestion ? currentCard.question : currentCard.answer}
          onClick={handleToggleCard} 
        />
        <button onClick={handleNextCard}>Next Card</button>
      </div>
    </div>
    </div>
  );
}

export default App;