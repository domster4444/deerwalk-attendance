import React from 'react';
import { InfoCardStyled } from './InfoCardStyled';
import { InfoCardHeaderStyled } from './InfoCardStyled';
const InfoCard = (props: any) => {
  return (
    <>
      <InfoCardStyled>
        <InfoCardHeaderStyled>
          <h2>{props.title}</h2>
          <img src={props.logo} alt="" />
        </InfoCardHeaderStyled>

        <h2 className="poppins_bold">1150</h2>
      </InfoCardStyled>
    </>
  );
};

export default InfoCard;
