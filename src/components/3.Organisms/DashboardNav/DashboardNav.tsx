import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const DashboardNav = (props: any) => {
  // ?--variables
  const history = useHistory();
  // TODO:--------------------------------------- LOGIC FUNCTION start
  const logout = () => {
    let logoutSurityprompt = prompt(
      'you sure wanna log out from this beautiful site'
    );

    if (logoutSurityprompt) {
      // Note : first change login state to false before pushing back to history
      props.setLogState(false);

      history.push('/');
    }
  };
  //TODO: --------------------------------------- LOGICAL FUNCTION end

  useEffect(() => {
    setTimeout(() => {
      let btn = document.querySelector('#btn') as HTMLButtonElement;
      let sidebar = document.querySelector('.sidebar') as HTMLDivElement;

      btn.onclick = function () {
        sidebar.classList.toggle('active');
        if (btn.classList.contains('bx-menu')) {
          btn.classList.replace('bx-menu', 'bx-menu-alt-right');
        } else {
          btn.classList.replace('bx-menu-alt-right', 'bx-menu');
        }
      };
      // anyNodeOnClickOpenSideBar.onclick = function () {
      //   sidebar.classList.toggle('active');
      // };
    });
  }, []);
  return (
    <>
      <div className="sidebar">
        <div className="logo_content">
          <div className="logo">
            <i className="bx bxl-c-plus-plus"></i>
            <div className="logo_name">CodingLab</div>
          </div>
          <i className="bx bx-menu cursor" id="btn"></i>
        </div>
        <ul className="nav_list">
          <li>
            <Link to="/dashboardpage">
              <i className="bx bx-grid-alt"></i>
              <span className="links_name">Dashboard</span>
            </Link>
            <span className="tooltip">Dashboard</span>
          </li>

          <li>
            <Link to="/registerstudent">
              <i className="bx bx-cart-alt"></i>
              <span className="links_name">Registered Students</span>
            </Link>
            <span className="tooltip">Registered Students</span>
          </li>
          <li>
            <Link to="/presentstudent">
              <i className="bx bx-chat"></i>
              <span className="links_name">Present Students</span>
            </Link>
            <span className="tooltip">Present Students</span>
          </li>
          <li>
            <Link to="/absentstudent">
              <i className="bx bx-pie-chart-alt-2"></i>
              <span className="links_name">Absent Students</span>
            </Link>
            <span className="tooltip">Absent Students</span>
          </li>
          <li>
            <Link to="/allstudent">
              <i className="bx bx-folder"></i>
              <span className="links_name">All Students</span>
            </Link>
            <span className="tooltip">Files</span>
          </li>

          <li>
            <Link to="/myprofile">
              <i className="bx bx-user"></i>
              <span className="links_name">My Profile</span>
            </Link>
            <span className="tooltip">Profile</span>
          </li>
          <li>
            <Link to="/aboutus">
              <i className="bx bx-heart"></i>
              <span className="links_name">About Us</span>
            </Link>
            <span className="tooltip">About Us</span>
          </li>
          <li>
            <a href="#" onClick={logout}>
              <i className="bx bx-cog"></i>
              <span className="links_name">Log Out</span>
            </a>
            <span className="tooltip">Log Out</span>
          </li>
        </ul>
        <div className="profile_content"></div>
      </div>
    </>
  );
};

export default DashboardNav;
