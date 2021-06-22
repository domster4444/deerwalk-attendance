import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useHistory } from 'react-router-dom';

import axios from 'axios';

// ----------react bootstrap
import Form from 'react-bootstrap/Form';

// -------------styled component
import { ProceedLink } from '../../1atoms/Link/Link';
import { ProceedBtn } from '../../1atoms/Button/Button';
// --------------------------IMG FOLDER IMPORT
import { BlueDwitLogo } from '../../1atoms/Logo/Logo';
const LoginPage = (props: any) => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [courseEnrolled, setCourseEnrolled] = useState('CSIT');
  const [password, setPassword] = useState('');

  //*       *****************Util FUNCTIONALs***************
  const resetFormDomStateVal = () => {
    // ------------EMPTYING FIELD OF LOGIN---start---------
    setEmail('');
    setCourseEnrolled('CSIT');
    setPassword('');
    const emailField = document.getElementById(
      'emailField'
    ) as HTMLInputElement;
    const passField = document.getElementById('passField') as HTMLInputElement;
    emailField.value = '';
    passField.value = '';
    // ------------EMPTYING FIELD OF LOGIN---end---------
  };

  // ---------------------------GLOBAL  Form Data Handler ----------------------
  let globalLoginFormDataHandler = (e: any) => {
    let targetName = e.target.name;
    let targetValue = e.target.value;
    if (targetName === 'email') {
      setEmail(targetValue);
    } else if (targetName === 'course-enrolled') {
      setCourseEnrolled(targetValue);
    } else if (targetName === 'password') {
      setPassword(targetValue);
    }
  };

  let formSubmitHandler = (e: any) => {
    e.preventDefault();
    console.log(`
    
    email:${email}
    course enrolled:${courseEnrolled}
    password:${password}
  `);

    // ---------------------------------POST TO SERVER------------------------axios
    axios.interceptors.request.use(
      (config) => {
        console.log(
          `${config.method} request send to ${
            config.url
          } at ${new Date().getDate()}`
        );
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    //TODO:Axios instance
    const registerStudentInstance = axios.create({
      baseURL: 'http://localhost:5000',
    });
    let postLoggedInStudent = () => {
      registerStudentInstance
        .post('/api/login', {
          data: {
            email: email,
            courseEnrolled: courseEnrolled,
            password: password,
          },
        })
        .then((res) => {
          console.log(res);
          console.log(res.data.accountHolder);
          console.log(res.data.accountHolderEmail);
          console.log(res.data.accountHolderEnrolledCourse);
          console.log(res.data.accountHolderRollNo);
          console.log(res.data.message);
          // --------------------------------------------------EMPTY FIELD STATE AND DOM VALUE
          resetFormDomStateVal();
          //------------------------------------------>updating  userData state val after login success on response of their data
          props.setUserName(res.data.accountHolder);
          props.setUserEmail(res.data.accountHolderEmail);
          props.setUserField(res.data.accountHolderEnrolledCourse);
          props.setUserRollNo(res.data.accountHolderRollNo);

          if (res.data.message === 'login success') {
            props.setLogState(true);

            history.push('/dashboardpage');
            (() => {
              toast.success('Successfully Logged In');
            })();

            // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!history.push('/dashboardpage');
          } else {
            //!throw new err and pass to .catch which catches error sent from server with status
            toast.error('username/password not matched');
          }
        })
        .catch((error) => {
          toast('something went wrong while loggin in');
        });
    };
    postLoggedInStudent();
    // ---Post to server end
  };

  return (
    <>
      <main id="login-page">
        <section id="login-card">
          <form action="" onSubmit={formSubmitHandler}>
            <header>
              <BlueDwitLogo />
              <h1 className="poppins_medium">LOGIN</h1>

              {/* LOGO  */}
              {/* LOGIN TEXT  */}
            </header>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                id="emailField"
                required
                name="email"
                type="email"
                placeholder="Enter email"
                onChange={globalLoginFormDataHandler}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Course Enrolled</Form.Label>
              <Form.Control
                required
                name="course-enrolled"
                as="select"
                onChange={globalLoginFormDataHandler}
              >
                <option selected>CSIT</option>
                <option>BCA</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                id="passField"
                required
                name="password"
                type="password"
                placeholder="Password"
                onChange={globalLoginFormDataHandler}
              />
            </Form.Group>

            <ProceedBtn name="Login" type="submit" />

            <br />
            <Link to="/register">
              <ProceedLink content="Dont Have Account?" />
            </Link>
          </form>
        </section>
      </main>
    </>
  );
};

export default LoginPage;
