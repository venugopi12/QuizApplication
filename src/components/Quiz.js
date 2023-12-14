import React, { useState } from 'react';
import Question from './Question';

const Quiz = ({ quizData }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);

  const handleAnswer = (selectedOption) => {
    const isCorrect = selectedOption === quizData[currentQuestion].correctAnswer;
    setScore((prevScore) => (isCorrect ? prevScore + 1 : prevScore));

    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestion]: selectedOption,
    }));
  };

  const handleNextClick = () => {
    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion < quizData.length ? nextQuestion : -1);
  };

  const handlePrevClick = () => {
    const prevQuestion = currentQuestion - 1;
    setCurrentQuestion(prevQuestion >= 0 ? prevQuestion : 0);
  };

  const handleSubmitClick = () => {
    setCurrentQuestion(-1);
  };

  if (currentQuestion === -1) {
    return (
      <div>
        <h2>Quiz Completed!</h2>
        <p>Your Score: {score}</p>
      </div>
    );
  }

  const isLastQuestion = currentQuestion === quizData.length - 1;
  const isFirstQuestion = currentQuestion === 0;

  return (
    <div>
      <h2>Quiz</h2>
      <Question
        question={quizData[currentQuestion].question}
        options={quizData[currentQuestion].options}
        selectedOption={answers[currentQuestion] || ''}
        onChange={handleAnswer}
        onNextClick={isLastQuestion ? handleSubmitClick : handleNextClick}
        onPrevClick={isFirstQuestion ? null : handlePrevClick}
        buttonLabel={isLastQuestion ? 'Submit' : 'Next Question'}
      />
    </div>
  );
};

export default Quiz;
