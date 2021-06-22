import React from 'react';

// -------------------------react bootstrap
import Dropdown from 'react-bootstrap/Dropdown';
// -----------------styled component

import { DwitLogo } from '../../1atoms/Logo/Logo';
import { DashboardHeaderNavStyled } from './DashboardHeaderStyled';
// ------------react icons .github
import { CgProfile } from 'react-icons/cg';
const DashboardHeader = () => {
  return (
    <>
      <header>
        <DashboardHeaderNavStyled id="DashboardNav">
          <div>
            <DwitLogo />
          </div>
          <ul>
            <li>
              <a className="poppins_regular" href="#lkj">
                Profile
              </a>
            </li>

            <li>
              <Dropdown>
                <Dropdown.Toggle
                  style={{
                    background: 'transparent',
                    outline: 'none',
                    border: 'none',
                  }}
                  id="dropdown-basic"
                >
                  <CgProfile style={{ fontSize: '3.5rem' }} />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    className="header-nav_dropdown-li poppins_regular "
                    href="#/action-1"
                  >
                    My Profile
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="header-nav_dropdown-li poppins_regular"
                    href="#/action-2"
                  >
                    Profile Settings
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="header-nav_dropdown-li poppins_regular"
                    href="#/action-3"
                  >
                    Notice
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="header-nav_dropdown-li poppins_regular"
                    href="#/action-3"
                  >
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
        </DashboardHeaderNavStyled>
      </header>
    </>
  );
};

export default DashboardHeader;
