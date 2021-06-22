import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
// ---------------dashboard---------

import DashboardHeader from '../../3.Organisms/DashboardHeader/DashboardHeader';
import DashboardNav from '../../3.Organisms/DashboardNav/DashboardNav';
import AboutUsBody from './AboutUsBody';
import AbsentStudentBody from './AbsentStudentBody';
import AllStudentBody from './AllStudentBody';
// ------BODY
import DashboardBody from './DashboardBody';
import MyProfileBody from './MyProfileBody';
import PresentStudentBody from './PresentStudentBody';
import RegisteredStudentBody from './RegisteredStudentBody';

const DashboardPage = (props: any) => {
  return (
    <>
      <BrowserRouter>
        <DashboardNav
          stateoflogin={props.stateoflogin}
          setLogState={props.setLogState}
        />

        <div className="home_content">
          <div className="text">
            <DashboardHeader />
            {/*//? --------------BODY OF DASHBOARD  */}
            <Switch>
              <Route
                path="/dashboardpage"
                component={() => <DashboardBody />}
              />
              <Route
                path="/registerstudent"
                component={() => <RegisteredStudentBody />}
              />
              <Route
                path="/presentstudent"
                component={() => <PresentStudentBody />}
              />
              <Route
                path="/absentstudent"
                component={() => <AbsentStudentBody />}
              />
              <Route path="/allstudent" component={() => <AllStudentBody />} />
              <Route path="/myprofile" component={() => <MyProfileBody />} />
              <Route path="/aboutus" component={() => <AboutUsBody />} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default DashboardPage;
