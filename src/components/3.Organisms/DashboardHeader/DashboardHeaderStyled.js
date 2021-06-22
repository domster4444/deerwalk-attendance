import styled from 'styled-components';

export const DashboardHeaderNavStyled = styled.header`
  background-color: rgb(15, 82, 136);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 3rem;
  margin-top: -1.3rem;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  img {
    height: 4rem;
  }
  //?nav{ --
  ul {
    justify-content: flex-end;
    display: flex;
    align-items: center;
    list-style: none;
    font-size: 1.8rem;
    li {
      cursor: pointer;
      color: white;
      margin: 0.5rem 2rem;
      a {
        /* color: white; */
        text-decoration: none;

        &:hover,
        &:focus {
          color: black;
        }
        &:visited {
          text-decoration: none;
        }
      }
    }
    /* react bootstrap's dropdown shift a bit downward */
    .dropdown-menu.show {
      margin-top: 0.4rem;
    }
    /*  remove small dropdown ico */
    .dropdown-toggle::after {
      display: none;
    }
    /* --------------DROPDOWN (ProfileMenu) Lists li ele  */
    .header-nav_dropdown-li {
      font-size: 1.6rem;
      padding: 1rem 3.2rem;
      transition: all ease-in-out 300ms;
      :hover {
        transition: background ease-in-out 0ms;

        background: rgb(15, 82, 136);
        color: white;
      }
    }
  }
`;
