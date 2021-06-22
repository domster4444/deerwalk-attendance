import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
// ----------react bootstrap
import Form from 'react-bootstrap/Form';

// -------------styled component
import { ProceedLink } from '../../1atoms/Link/Link';
import { ProceedBtn } from '../../1atoms/Button/Button';
// --------------------------IMG FOLDER IMPORT
import { BlueDwitLogo } from '../../1atoms/Logo/Logo';
const RegisterPage = () => {
  //-------------------------------------------form value state controller---------------
  const [fullname, setFullName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [courseEnrolled, setCourseEnrolled] = useState('CSIT');
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');

  // ------------------------------------------------------FORM---------------------------------------
  let globalFormDataHandler = (e: any) => {
    let targetName = e.target.name;
    let targetValue = e.target.value;
    if (targetName === 'fullname') {
      setFullName(targetValue);
    } else if (targetName === 'rollno') {
      setRollNo(targetValue);
    } else if (targetName === 'course-enrolled') {
      setCourseEnrolled(targetValue);
    } else if (targetName === 'email') {
      setEmail(targetValue);
    } else if (targetName === 'password1') {
      setPassword1(targetValue);
    } else if (targetName === 'password2') {
      setPassword2(targetValue);
    }
  };

  // ---------------------------------------Once At First Render-------------------------
  useEffect(() => {
    let confirmPassword = document.getElementById(
      'passwordCheck'
    ) as HTMLInputElement;
    if (password1 !== password2) {
      confirmPassword.style.border = '1px solid red';
    }
    if (password1 === password2) {
      confirmPassword.style.border = '1px solid transparent';
    }
  }, [password1, password2]);

  let submitHandler = (e: any) => {
    e.preventDefault();
    console.log(`

Full Name:${fullname} 
 Roll No :${rollNo}                       
 Course Enrolled :${courseEnrolled}                       
 Email:${email}                       
 Password:${password1}                       
 Password:${password2}                       

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
    let postRegisteredStudent = () => {
      registerStudentInstance
        .post('/api/register', {
          data: {
            fullName: fullname,
            rollNo: rollNo,
            courseEnrolled: courseEnrolled,
            email: email,
            password1: password1,
            password2: password2,
          },
        })
        .then((res) => {
          console.log(res);

          let fullNameField = document.getElementById(
            'fullNameField'
          ) as HTMLInputElement;
          let rollNoField = document.getElementById(
            'rollNoField'
          ) as HTMLInputElement;
          let emailAddressField = document.getElementById(
            'emailAddressField'
          ) as HTMLInputElement;
          let password1Field = document.getElementById(
            'password1Field'
          ) as HTMLInputElement;
          let passwordCheckField = document.getElementById(
            'passwordCheck'
          ) as HTMLInputElement;
          fullNameField.value = '';
          rollNoField.value = '';
          emailAddressField.value = '';
          password1Field.value = '';
          passwordCheckField.value = '';
          setFullName('');
          setRollNo('');
          setEmail('');
          setCourseEnrolled('');
          setPassword1('');
          setPassword2('');
        })
        .catch((error) => {
          console.log(error);
        });
    };
    postRegisteredStudent();
    // ---Post to server end
  };

  return (
    <>
      <main id="register-page">
        <section id="register-card">
          <form action="" onSubmit={submitHandler}>
            <header>
              <BlueDwitLogo />
              <h1 className="poppins_medium">Register</h1>

              {/* LOGO  */}
              {/* LOGIN TEXT  */}
            </header>

            <Form.Label>Full Name</Form.Label>
            <Form.Control
              id="fullNameField"
              required
              placeholder="Enter Your Full Name"
              name="fullname"
              onChange={globalFormDataHandler}
            />

            <Form.Label>Roll No</Form.Label>
            <Form.Control
              id="rollNoField"
              name="rollno"
              type="number"
              placeholder="Enter Your Roll no."
              onChange={globalFormDataHandler}
            />

            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Course Enrolled</Form.Label>
              <Form.Control
                required
                name="course-enrolled"
                as="select"
                onChange={globalFormDataHandler}
              >
                <option selected>CSIT</option>
                <option>BCA</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                id="emailAddressField"
                required
                name="email"
                type="email"
                placeholder="Enter email"
                onChange={globalFormDataHandler}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                id="password1Field"
                required
                name="password1"
                type="password"
                placeholder="Password"
                onChange={globalFormDataHandler}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                required
                id="passwordCheck"
                name="password2"
                type="password"
                placeholder="Password"
                onChange={globalFormDataHandler}
              />
            </Form.Group>

            <ProceedBtn name="Register" type="submit" />

            <br />

            <Link to="/">
              <ProceedLink content="Already Have Account?" />
            </Link>
          </form>
        </section>
      </main>
    </>
  );
};

export default RegisterPage;
