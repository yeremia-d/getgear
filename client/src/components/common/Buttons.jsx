import React from 'react';

/**
 * Button Component (Functional)
 * @param {Object} props should have 3 fields:
 * type: 'empty' or 'default': a primary button,
 *       'disabled': disabled button
 *       'secondary': secondary button (no border or background)
 *       'icon-[icon]': which denotes and icon button where [icon] can
 *                      be 'filter', 'close', 'search', 'signature', or 'delete'
 *  Text: The text of the button
 *  OnClick: EventHandler function that handles click event
 *  @return {JSX}
 */
const Button = (props) => {
  let returnedButton;

  switch (props.type) {
    case 'disabled':
      returnedButton = <button></button>;
      break;

    case 'secondary':
      returnedButton = <button></button>;

    case 'icon-close':
      break;

    case 'icon-filter':
      break;

    case 'icon-delete':
      break;

    case 'icon-search':
      break;

    case 'icon-signature':
      break;

    default:
  }

  return returnedButton;
};

export default Button;
