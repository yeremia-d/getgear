import React from 'react';

import styled from 'styled-components';
import colors from '../utils/Colors';
import MediaQuery from '../utils/MediaQueries';

const PrimaryButton = styled.button`
  background: ${colors.primary};
  border: none;
  color: ${colors.white};
  display: inline-block;
  font-size: 1rem;
  margin: 0.25rem;
  padding: 0.5rem 1rem;
  transition: background 0.3s ease;

  &:hover {
    background: #FFF;
  }

  ${MediaQuery.tablet`
    background: #FFF; 
  `}

  ${MediaQuery.desktop``}

`;

const SecondaryButton = styled.button``;

const DisabledButton = styled.button``;

const IconButton = styled.button``;
/**
 * Button Component (Functional)
 * @param {Object} props should have 4 fields:
 * type: 'empty' or 'default': a primary button,
 *       'disabled': disabled button
 *       'secondary': secondary button (no border or background)
 *       'icon': icon button (icon only if no text)
 *  text: The text of the button
 *  clickHandler: EventHandler function that handles click event
 *  icon: required if type is icon.
 *        values can be: 'empty', 'filter', 'close', 'search',
 *                       'signature', or 'delete'
 *  @return {JSX}
 */
const Button = (props) => {
  let returnedButton;
  let buttonIcon;

  // Check to see if icon is provided in props
  switch (props.icon) {
    case 'filter':
      buttonIcon = <span></span>;
      break;

    case 'close':
      buttonIcon = <span></span>;
      break;

    case 'search':
      buttonIcon = <span></span>;
      break;

    case 'signature':
      buttonIcon = <span></span>;
      break;

    case 'delete':
      buttonIcon = <span></span>;

    default: buttonIcon = '';
  }

  switch (props.type) {
    case 'disabled':
      returnedButton =
        <DisabledButton onClick={props.clickHandler}>
          {buttonIcon}{props.text}
        </DisabledButton>;
      break;

    case 'secondary':
      returnedButton =
        <SecondaryButton onClick={props.clickHandler}>
          {buttonIcon}{props.text}
        </SecondaryButton>;

    case 'icon':
      returnedButton =
        <IconButton onClick={props.clickHandler}>
          {buttonIcon}{props.text}
        </IconButton>;
      break;

    default: returnedButton =
      <PrimaryButton onClick={props.clickHandler}>
        {buttonIcon}{props.text}
      </PrimaryButton>;
  }

  return returnedButton;
};

export default Button;
