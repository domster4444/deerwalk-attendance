import styled from 'styled-components';
export const ProceedBtnStyled = styled.button`
  outline: none;
  border-radius: 0.5rem;
  border: 1px solid rgb(53, 115, 163);
  font-size: 2rem;
  padding: 0.8rem 2rem;
  color: rgb(53, 115, 163);
  transition: hover ease-in-out 500ms;

  &:hover {
    /* transition: box-shadow ease-in-out 200ms; */
    /* box-shadow: 0px 0px 4px 4px lightblue; */
    background-color: rgb(53, 115, 163);
    color: white;
  }
  &:active {
    transform: scale(1.05);
  }
`;
