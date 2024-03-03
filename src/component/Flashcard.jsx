import React from 'react';
import './Flashcard.css';

const Flashcard = ({ content, onClick }) => {
    return (
      <div className="flashcard" onClick={onClick}>
        <div className="content">{content}</div>
      </div>
    );
  }

export default Flashcard;