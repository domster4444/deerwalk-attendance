import React from 'react';
import { useEffect } from 'react';

import { ListGroup } from 'react-bootstrap';

// --------------STYLED COMPONENT
import List from '../../1atoms/List/List';
const RegisteredStudentBody = () => {
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
  }, []);

  // todo:---------------------------------AXIOS ALL STUDENT DATA FETCH
  let listEntries: {
    userName: String;
    userRollNo: number;
    userEmail: String;
    courseEnrolled: String;
  } = {
    userName: 'Kshitiz',
    userRollNo: 369,
    userEmail: 'kshitiz.stha11@gmail.com',
    courseEnrolled: 'CSIT',
  };
  return (
    <>
      <ListGroup>
        <List data={listEntries} />
        <List data={listEntries} />
        <List data={listEntries} />
        <List data={listEntries} />
        <List data={listEntries} />
        <List data={listEntries} />
        <List data={listEntries} />
        <List data={listEntries} />
        <List data={listEntries} />
        <List data={listEntries} />
        <List data={listEntries} />
        <List data={listEntries} />
        <List data={listEntries} />
        <List data={listEntries} />
        <List data={listEntries} />
        <List data={listEntries} />
        <List data={listEntries} />
        <List data={listEntries} />
        <List data={listEntries} />
        <List data={listEntries} />
        <List data={listEntries} />
        <List data={listEntries} />
        <List data={listEntries} />
        <List data={listEntries} />
        <List data={listEntries} />
        <List data={listEntries} />
        <List data={listEntries} />
        <List data={listEntries} />
        <List data={listEntries} />
        <List data={listEntries} />
        <List data={listEntries} />
        <List data={listEntries} />
        <List data={listEntries} />
        <List data={listEntries} />
        <List data={listEntries} />
        <List data={listEntries} />
        <List data={listEntries} />
        <List data={listEntries} />
        <List data={listEntries} />
        <List data={listEntries} />
        <List data={listEntries} />
        <List data={listEntries} />
        <List data={listEntries} />
        <List data={listEntries} />
        <List data={listEntries} />
        <List data={listEntries} />
        <List data={listEntries} />
        <List data={listEntries} />
        <List data={listEntries} />
        <List data={listEntries} />
        <List data={listEntries} />
        <List data={listEntries} />
        <List data={listEntries} />
        <List data={listEntries} />
        <List data={listEntries} />
        <List data={listEntries} />
        <List data={listEntries} />
        <List data={listEntries} />
        <List data={listEntries} />
      </ListGroup>
    </>
  );
};

export default RegisteredStudentBody;
