import React from 'react';
// -------------Styled component
import { LinkStyled } from './LinkStyled';
export const ProceedLink = (props: any) => {
  return (
    <>
      <LinkStyled>{props.content}</LinkStyled>
    </>
  );
};
