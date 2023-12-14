import React from 'react';

const Question = ({ question, options, selectedOption, onChange, onNextClick, onPrevClick,buttonLabel }) => {
  return (
    <div>
      <h3>{question}</h3>
      <form>
        {options.map((option, index) => (
          <div key={index}>
            <label>
              <input
                type="radio"
                value={option}
                checked={selectedOption === option}
                onChange={() => onChange(option)}
              />
              {option}
            </label>
          </div>
        ))}
      </form>
      <button onClick={onPrevClick} disabled={onPrevClick ? false : true}>Previous</button>
      <button onClick={onNextClick}>{buttonLabel}</button>
    </div>
  );
};

export default Question;
