import React from 'react';
import Quiz from './components/Quiz';

const App = () => {
  const quizData = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'Berlin', 'Madrid', 'Rome'],
      correctAnswer: 'Paris',
      questionType:"radio",
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Earth', 'Mars', 'Venus', 'Jupiter'],
      correctAnswer: 'Mars',
      questionType:'radio'
    },
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'Berlin', 'Madrid', 'Rome'],
      correctAnswer: 'Paris',
      questionType:'radio'
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: [],
      correctAnswer: ["Hello"],
      questionType:'text'
    },
    {
      question: 'What is the capital of France?',
      options: [],
      correctAnswer: ["Hai"],
      questionType:'text'
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: [],
      correctAnswer: ["Hey"],
      questionType:'text'
    },
    // Add more questions as needed
  ];

  return (
    <div>
      <h1>Quiz App</h1>
      <Quiz quizData={quizData} />
    </div>
  );
};

export default App;
