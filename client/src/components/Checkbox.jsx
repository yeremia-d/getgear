import React from 'react';
import styled from 'styled-components';

const StyledCheckboxContainer = styled.div``;
const StyledCheckbox = styled.input.attrs({type: 'checkbox'})`

`;

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
  const checkboxProps = {
    checked: props.checked,
  };

  return (
    <StyledCheckboxContainer>
      <label>
        <StyledCheckbox {...checkboxProps} />
        {props.children}
      </label>
    </StyledCheckboxContainer>
  );
};

export default Checkbox;
