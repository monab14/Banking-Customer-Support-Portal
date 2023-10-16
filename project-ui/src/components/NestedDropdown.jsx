import React from 'react';

const NestedDropdown = () => {
  return (
    <ul className="dropdown-menu">
      <li>
        <a className="dropdown-item" href="#">
          Block Debit Card
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="#">
          Block Credit Card
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="#">
          Update Debit Card
        </a>
      </li>
    </ul>
  );
};

export default NestedDropdown;
