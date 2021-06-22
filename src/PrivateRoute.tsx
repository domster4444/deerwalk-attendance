import React from 'react';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Route } from 'react-router-dom';
import DashboardPage from './components/5pages/DashboardPage/DashboardPage';
// -----------------CONTEXT API---------------------
import { Consumer } from './LoginContext';
export default function PrivateRoute(props: any) {
  return (
    <>
      <Consumer>
        {({ isLoggedIn }: any) => {
          if (isLoggedIn === true) {
            return (
              <>
                <Route
                  path="/dashboardpage"
                  component={() => {
                    return (
                      <DashboardPage
                        stateoflogin={props.stateoflogin}
                        setLogState={props.setLogState}
                      />
                    );
                  }}
                />
              </>
            );
          } else {
            toast('Please Log In Again ');
            return (
              <>
                {/* //!<Redirect to="/"></Redirect> */}
                <h1>Private route not accessable </h1>
              </>
            );
          }
        }}
      </Consumer>
    </>
  );
}
