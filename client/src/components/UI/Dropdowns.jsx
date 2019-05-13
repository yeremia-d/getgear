import React from 'react';

// Form dropdown that takes in object that contains the value
// Also takes an onChange function handler
const Dropdown = (props) => {
  const options = props.options.map((option) => {
    <option value={option.value}>{option.name}</option>
  });

  return (
    <select onChange={props.onChangeHandler}>
      {options}
    </select>
  );
};

export default Dropdown;
