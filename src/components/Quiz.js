// Quiz.js
import React, { useState } from 'react';
import Question from './Question';

const Quiz = ({ quizData }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showSummary, setShowSummary] = useState(false);

  const handleAnswer = (selectedOptions) => {
    // Update the answers state
    setAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      if (quizData[currentQuestion]) {
        updatedAnswers[currentQuestion] = {
          question: quizData[currentQuestion].question,
          selectedOptions: [...selectedOptions],
          correctAnswer: quizData[currentQuestion].correctAnswer,
        };
      }
      return updatedAnswers;
    });
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
    setShowSummary(true);
  };

  if (showSummary) {
    return (
      <div className="container">
        <h2>Quiz Completed!</h2>
        <h3>Summary:</h3>
        <ul>
          {answers.map((answer, index) => (
            <li key={index}>
              {answer && ( // Add a check for the existence of answer
                <>
                  <strong>Question:</strong> {answer.question}<br />
                  <strong>Your Answer:</strong> {answer.selectedOptions.join(', ')}<br />
                  <strong>Correct Answer:</strong> {answer.correctAnswer.join(', ')}
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  const isLastQuestion = currentQuestion === quizData.length - 1;
  const isFirstQuestion = currentQuestion === 0;

  return (
    <div className="container">
      <h2>Quiz</h2>
      {quizData[currentQuestion] ? (
        <Question
          question={quizData[currentQuestion].question}
          options={quizData[currentQuestion].options}
          selectedOptions={answers[currentQuestion]?.selectedOptions || []}
          onChange={handleAnswer}
          onNextClick={isLastQuestion ? handleSubmitClick : handleNextClick}
          onPrevClick={isFirstQuestion ? null : handlePrevClick}
          buttonLabel={isLastQuestion ? 'Submit' : 'Next Question'}
          questionType={quizData[currentQuestion].questionType}
        />
      ) : (
        <p>No question found for index {currentQuestion}</p>
      )}
    </div>
  );
};

export default Quiz;
