import React, { useState } from 'react';
import Flashcard from './component/Flashcard';
import './App.css';

const cardPairs = [
  { question: "Who was the first person to join Luffy's crew?", answer: "Zoro" },
  { question: "What is the name of the Straw Hats' first ship?", answer: "Going Merry" },
  { question: "How many berries did Nami have to gather for Arlong, in order to free Cocoyasi Village?", answer: "100,000,000" },
  { question: "Who is Ace's biological father?", answer: "Gol D. Roger" },
  { question: "What is the name of Kizaru's fruit?", answer: "Glint-Glint Fruit" },
];

const App = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [userGuess, setUserGuess] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);
  const currentCard = cardPairs[currentCardIndex];

  const handleNextCard = () => {
    const nextIndex = Math.floor(Math.random() * cardPairs.length);
    setCurrentCardIndex(nextIndex);
    setUserGuess('');
    setShowAnswer(false);
  };

  const handleToggleCard = () => {
    setShowAnswer(!showAnswer);
  };

  const handleGuessSubmission = () => {
    if (userGuess.toLowerCase() === currentCard.answer.toLowerCase()) {
      alert('Correct!');
      const updatedStreak = currentStreak + 1;
      setCurrentStreak(updatedStreak);
      if (updatedStreak > longestStreak) {
        setLongestStreak(updatedStreak);
      }
    } else {
      alert('Incorrect. Try again.');
      setCurrentStreak(0);
    }
    setShowAnswer(true);
  };

  const handlePreviousCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    setUserGuess('');
    setShowAnswer(false);
  };

  return (
    <div className="App">
      <div className="navbar">
      </div>
      <div className="content">
        <div className="card-info">
          <h2>One Piece Flashcards</h2>
          <p>Total cards: {cardPairs.length}</p>
          <p>Description: Short description about the flashcard set</p>
          <p>Current Streak: {currentStreak}</p>
          <p>Longest Streak: {longestStreak}</p>
        </div>
        <div className="flashcard-container">
          <Flashcard
            content={showAnswer ? currentCard.answer : currentCard.question}
            onClick={handleToggleCard}
          />
          <div className="user-input">
            <input
              type="text"
              value={userGuess}
              onChange={(e) => setUserGuess(e.target.value)}
              placeholder="Enter your guess"
            />
            <button onClick={handleGuessSubmission}>Submit</button>
          </div>
        </div>
      </div>
      <div className="navigation-buttons">
        <button onClick={handlePreviousCard} disabled={currentCardIndex === 0}>Previous</button>
        <button onClick={handleNextCard}>Next</button>
      </div>
    </div>
  );
}

export default App;