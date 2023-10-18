import React, { useState } from 'react';

const Button = ({ onSelectOption }) => {
  const [selectedOption, setSelectedOption] = useState('Select an Option');
  const [selectedOptionColor, setSelectedOptionColor] = useState('black');

  const handleOptionSelect = (option, color) => {
    setSelectedOption(option);
    setSelectedOptionColor(color);
    onSelectOption(option, color);
  };

  return (
    <div className="dropdown">
      <button
        className={`btn btn-secondary dropdown-toggle`}
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        style={{ backgroundColor: selectedOptionColor }}
      >
        {selectedOption}
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li>
          <a
            className="dropdown-item"
            href="#"
            onClick={() => handleOptionSelect('Solved', 'green')}
            style={{ color: 'green' }}
          >
            Solved
          </a>
        </li>
        <li>
          <a
            className="dropdown-item"
            href="#"
            onClick={() => handleOptionSelect('In Process', 'blue')}
            style={{ color: 'blue' }}
          >
            In Process
          </a>
        </li>
        <li>
          <a
            className="dropdown-item"
            href="#"
            onClick={() => handleOptionSelect('Not Solved', 'red')}
            style={{ color: 'red' }}
          >
            Not Solved
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Button;
