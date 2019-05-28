import React, {Component} from 'react';
import Button from '../../components/Buttons';
import Checkbox from '../../components/Checkbox';

/**
 * Login screen component
 * Checkes if user is logged in:
 * If user is logged in, show UI that gives an
 * option of signing out or manage gear
 */
class LoginUI extends Component {
  /**
   * Constructs the login screen
   */
  constructor() {
    super();
  }

  /**
  * Render function for the login component.
  * @return {JSX}
  */
  render() {
    return (
      <div>
        Login Component
        <Button onClick={()=>alert()}>Hi</Button>
        <Button>There</Button>
        <Checkbox>Hi</Checkbox>
      </div>
    );
  }
};

export default LoginUI;
