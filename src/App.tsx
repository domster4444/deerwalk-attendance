//  Library IMPORT---------------------------------------
import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

// ------------react bootstrap
//?? import Button from 'react-bootstrap/Button';
// ------MAIN.CSS FROM SCSS--------------------------------
import './scss/main.css';
// ----STYLED COMPOENENT IMPORT-----------------------------------
//?? import { GhostBtn } from './components/1atoms/Button/Button';
//-------COMPONENT IMPORT
import LoginPage from './components/5pages/LoginPage/LoginPage';
import RegisterPage from './components/5pages/RegisterPage/RegisterPage';
import PrivateRoute from './PrivateRoute';

// --------------------------CONTEXT API -----------------
import { Provider } from './LoginContext';

// ?-----------------------REACT TOSTIFY
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// ****************************USE STATE************************
function App() {
  const [studentField, setStudentField] = useState('');
  const [studentName, setStudentName] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  let dynamicData: {
    studentField: String;
    studentName: String;
    studentEmail: String;
    isLoggedIn: boolean;
  } = {
    studentField: studentField,
    studentName: studentName,
    studentEmail: studentEmail,
    isLoggedIn: isLoggedIn,
  };

  useEffect(() => {
    console.log(
      `--------${isLoggedIn}-------SOMEONE JUST CHANGED THE isLoggedInState-----------to------`
    );
  }, [isLoggedIn]);
  return (
    <>
      <Provider value={dynamicData}>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              component={() => {
                return (
                  <LoginPage
                    stateoflogin={isLoggedIn}
                    setLogState={setIsLoggedIn}
                  />
                );
              }}
            />
            <Route path="/register" component={() => <RegisterPage />} />

            <PrivateRoute
              stateoflogin={isLoggedIn}
              setLogState={setIsLoggedIn}
            />

            {/*// !----------PAGE NOT FOUND ROUTE -------     */}
          </Switch>
        </BrowserRouter>
      </Provider>
      <ToastContainer />
    </>
  );
}

export default App;
