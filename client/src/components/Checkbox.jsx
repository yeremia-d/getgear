import React from 'react';
import styled from 'styled-components';

const StyledCheckbox = styled.div``;

/**
 * Checkbox functional component
 * @param {Object} props contains 4 fields
 * isActive: indicated if the checkbox is interactive (can be clicked).
 *           (default is empty = active)
 * text: text of the checkbox
 * onClick: event handler that handles when the component is clicked
 * initialValue: indicates the initial value of the checkbox
 *               (default is empty = unchecked)
 * @return {JSX}
 */
const Checkbox = (props) => {
  return (
    <StyledCheckbox>
      <label>{props.text}</label>
    </StyledCheckbox>
  );
};

export default Checkbox;
