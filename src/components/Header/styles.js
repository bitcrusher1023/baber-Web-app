import styled from "styled-components";

export const Container = styled.div`
  background: ${props => props.theme.color3};
  padding: 0 3rem;
`;

export const Content = styled.div`
  height: 6.4rem;
  max-width: 90rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      height: 3.5rem;
      margin-right: 2rem;
      padding-right: 2rem;
      border-right: 1px solid ${props => props.theme.color4};
    }

    a {
      font-weight: bold;
      color: ${props => props.theme.color4};
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 2rem;
  padding-left: 2rem;
  border-left: 1px solid ${props => props.theme.color4};

  div {
    text-align: right;
    margin-right: 1rem;

    strong {
      display: block;
      color: ${props => props.theme.color6};
    }

    a {
      display: block;
      margin-top: 0.2rem;
      font-size: 1.2rem;
      color: ${props => props.theme.color5};
    }
  }

  img {
    height: 3.5rem;
    width: 3.5rem;
    border-radius: 50%;
  }
`;
