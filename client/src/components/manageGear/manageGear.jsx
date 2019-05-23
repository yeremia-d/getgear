import React, {Component} from 'react';
import Sidebar from '../common/Sidebar';

import {Grommet, Grid} from 'grommet';

import {
  AppFrameStyles,
  SidebarFrameStyles,
  ContentFrameStyles,
} from '../styles/appFrameStyles';


/**
 * UI Component that handles the gear management
 * function for the system.
 */
class ManageGearUI extends Component {
  /**
   * Constructor for the class ManageGearUI
   */
  constructor() {
    super();
  }

  /**
   * Render function for the
   * manageGearUI class
   * @return {JSX}
   */
  render() {
    return (
      <Grommet>
        <Grid
          rows={['small', 'small']}
          columns={['small', 'small']}
          gap="small"
          areas={[
            {name: 'sidebar', start: [0, 0], end: [1, 0]},
            {name: 'pagetitle', start: [0, 1], end: [1, 2]},
            {name: 'content', start: [1, 1], end: [2, 2]},
          ]}
        >

        </Grid>
      </Grommet>
    );
  }
}

export default ManageGearUI;
