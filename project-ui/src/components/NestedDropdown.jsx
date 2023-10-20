import React from 'react';
import { Link } from 'react-router-dom';

const NestedDropdown = () => {
  return (
    <ul className="dropdown-menu">
      <li>
        <Link className="dropdown-item" to="#">
          Block Debit Card
        </Link>
      </li>
      <li>
        <Link className="dropdown-item" to="#">
          Block Credit Card
        </Link>
      </li>
      <li>
        <Link className="dropdown-item" to="#">
          Update Debit Card
        </Link>
      </li>
    </ul>
  );
};

export default NestedDropdown;
