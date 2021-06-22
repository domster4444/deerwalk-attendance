import React from 'react';
import InfoCard from '../../../components/2molecules/InfoCard/InfoCard';
// -----------imgs
import absentStudentLogo from '../../../img/logo/absentLogo.png';
import studentLogo from '../../../img/logo/studentLogo.png';
import Container from '../../../components/3.Organisms/Container/Container';

const DashboardBody = () => {
  return (
    <>
      <Container>
        <InfoCard
          className="cardInfo"
          title="Present Students"
          logo={studentLogo}
        />
        <InfoCard
          className="cardInfo"
          title="Absent Students"
          logo={absentStudentLogo}
        />
        <InfoCard
          className="cardInfo"
          title="Absent Students"
          logo={absentStudentLogo}
        />
        <InfoCard
          className="cardInfo"
          title="Absent Students"
          logo={absentStudentLogo}
        />
        <InfoCard
          className="cardInfo"
          title="Absent Students"
          logo={absentStudentLogo}
        />
      </Container>
    </>
  );
};

export default DashboardBody;
