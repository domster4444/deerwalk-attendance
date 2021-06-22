import React from 'react';
import { ContainerStyled } from './ContainerStyled';

const Container = (props: any) => {
  return (
    <>
      <ContainerStyled>{props.children}</ContainerStyled>
    </>
  );
};

export default Container;
