import React from 'react';

const Result = ({ userAnswers, questions, score, onReplay, onRestart }) => {
  const calculateScore = () => {
    return (score / questions.length) * 100;
  };

  return (
    <div className="Result">
      <h2>Your Result</h2>
      <p>{`You scored ${calculateScore()}%`}</p>
      {onReplay && (
        <div>
          <button onClick={onReplay}>Restart</button>
          
        </div>
      )}
     
    </div>
  );
};

export default Result;
