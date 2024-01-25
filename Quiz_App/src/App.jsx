import React, { useState } from 'react';
import questions from './questions';
import QuestionBox from './components/QuestionBox';
import Result from './components/Result';
import './App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
  const [quizFinished, setQuizFinished] = useState(false);
  const [score, setScore] = useState(0);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleAnswer = (selectedOption) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = selectedOption;
    setUserAnswers(newAnswers);

    if (selectedOption.isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const handleReplay = () => {
    setCurrentQuestion(0);
    setUserAnswers(Array(questions.length).fill(null));
    setQuizFinished(false);
    setScore(0);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setUserAnswers(Array(questions.length).fill(null));
    setQuizFinished(false);
    setScore(0);
  };

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <button onClick={toggleDarkMode}>{darkMode ? 'Light' : 'Dark'}</button>
      {quizFinished ? (
        <Result userAnswers={userAnswers} questions={questions} score={score} onReplay={handleReplay} onRestart={handleRestart} />
      ) : (
        <QuestionBox
          question={questions[currentQuestion]}
          onAnswer={handleAnswer}
          currentQuestion={currentQuestion + 1}
          totalQuestions={questions.length}
          darkMode={darkMode}
        />
      )}
    </div>
  );
};

export default App;
