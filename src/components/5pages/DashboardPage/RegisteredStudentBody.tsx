import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import { ListGroup } from 'react-bootstrap';

// --------------STYLED COMPONENT
import List from '../../1atoms/List/List';
const RegisteredStudentBody = () => {
  const [allCSITRegistered, setAllCSITRegistered] = useState([]);
  useEffect(() => {
    let register_std_list = document.querySelectorAll(
      '.registered-user-listgroup'
    );
    let register_std_list_arr = Array.from(register_std_list);
    for (let i = 0; i < register_std_list_arr.length; i++) {
      console.log(i);
      register_std_list[i].addEventListener('click', () => {
        register_std_list[i].classList.toggle(
          'open-user-regis-list-to-fullest'
        );
      });
    }

    // ---------------------------------AXIOS GET ALL  CSIT REGISTERED STUDENTS
    axios
      .get('http://localhost:5000/api/csitregistered')
      .then((res) => {
        console.log(res.data);
        setAllCSITRegistered(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <ListGroup>
        <List
          userName={'kshitiz'}
          userRollNo={369}
          userEmail={'kshitiz.stha11@gmail.com'}
          courseEnrolled={'CSIT'}
        />
      </ListGroup>
    </>
  );
};

export default RegisteredStudentBody;
