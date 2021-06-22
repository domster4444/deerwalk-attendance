import styled from 'styled-components';

export const InfoCardStyled = styled.div`
  background: white;
  box-shadow: 0px 0px 6px 6px #e9e9e9;
  cursor: pointer;
  margin: 0.5rem;
  max-width: 20rem;

  padding: 1rem 2rem;
  transition: all ease-in-out 100ms;

  @media only screen and (max-width: 1235px) {
    max-width: 15rem;
  }
  h2 {
    @media only screen and (max-width: 1235px) {
      font-size: 1.4rem;
    }
  }

  &:hover {
    margin: 1rem;
    transition: all ease-in-out 200ms;
    transform: scale(1.05);
  }
  &:active {
    transform: scale(1);
  }
  border-radius: 1rem;
`;
export const InfoCardHeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  h2 {
    @media only screen and (max-width: 1235px) {
      font-size: 1.4rem;
    }
  }
  img {
    margin: 0.5rem;
    height: 5rem;
    @media only screen and (max-width: 1235px) {
      height: 3rem;
    }
  }
`;
