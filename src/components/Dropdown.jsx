// src/components/Dropdown.jsx
import React from 'react';
import './Dropdown.css';

const Dropdown = ({ name, value, options, onChange, label }) => {
  return (
    <div className="dropdown-container">
      {label && <label htmlFor={name}>{label}</label>}
      <select name={name} id={name} value={value} onChange={onChange}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
