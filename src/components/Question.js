import React from 'react';

const Question = ({ question, options, selectedOptions, onChange, onNextClick, onPrevClick, buttonLabel, questionType }) => {
  return (
    <div>
      <h3>{question}</h3>
      {questionType === 'text' ? (
        <textarea
          value={selectedOptions[0] || ''}
          onChange={(e) => onChange([e.target.value])}
          placeholder="Type your answer here"
          rows="5"
          cols="50"
        />
      ) : (
        <form>
          {options && options.map((option, index) => (
            <div key={index}>
              <label>
                <input
                  type="radio"
                  value={option}
                  checked={selectedOptions[0] === option}
                  onChange={() => onChange([option])}
                />
                {option}
              </label>
            </div>
          ))}
        </form>
      )}
      <button onClick={onPrevClick} disabled={onPrevClick ? false : true}>Previous</button>
      <button onClick={onNextClick}>{buttonLabel}</button>
    </div>
  );
};

export default Question;
