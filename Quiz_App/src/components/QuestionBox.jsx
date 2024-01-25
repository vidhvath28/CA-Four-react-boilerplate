import React from 'react';

const QuestionBox = ({ question, onAnswer, currentQuestion, totalQuestions, darkMode }) => {
    const highlightQuestion = () => {
      document.querySelector('.question-text').style.color = 'red';
    };
  
    const removeHighlight = () => {
      document.querySelector('.question-text').style.color = darkMode ? 'darkblue' : 'blue';
    };
  
    return (
      <div className={`QuestionBox ${darkMode ? 'dark' : 'light'}`}>
        <div className="question-number">Question: {currentQuestion} out of {totalQuestions}</div>
        <div className="question-text">{question.text}</div>
        <div className="options">
          {question.options.map((option) => (
            <button key={option.id} onClick={() => onAnswer(option)}>
              {option.text}
            </button>
          ))}
        </div>
        <button onClick={highlightQuestion}>Highlight</button>
        <button onClick={removeHighlight}>Remove Highlight</button>
      </div>
    );
  };
  
  export default QuestionBox;
  