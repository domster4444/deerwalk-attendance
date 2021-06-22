import React from 'react';
import dwitLogoImg from '../../../img/logo/whiteDwitLogo.png';
import blueDwitLogoImg from '../../../img/logo/BlueDeerwalkLogo.png';

import { DeerwalkStyled } from './DeerwalkStyled';
export const DwitLogo = () => {
  return (
    <>
      <DeerwalkStyled src={dwitLogoImg} alt="Logo of Deerwalk" />
    </>
  );
};
export const BlueDwitLogo = () => {
  return (
    <>
      <DeerwalkStyled src={blueDwitLogoImg} alt="Logo of Deerwalk" />
    </>
  );
};
