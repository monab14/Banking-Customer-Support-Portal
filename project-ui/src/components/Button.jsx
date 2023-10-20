import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
          <Link
            className="dropdown-item"
            to="#"
            onClick={() => handleOptionSelect('Solved', 'green')}
            style={{ color: 'green' }}
          >
            Solved
          </Link>
        </li>
        <li>
          <Link
            className="dropdown-item"
            to="#"
            onClick={() => handleOptionSelect('In Process', 'blue')}
            style={{ color: 'blue' }}
          >
            In Process
          </Link>
        </li>
        <li>
          <Link
            className="dropdown-item"
            to="#"
            onClick={() => handleOptionSelect('Not Solved', 'red')}
            style={{ color: 'red' }}
          >
            Not Solved
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Button;
