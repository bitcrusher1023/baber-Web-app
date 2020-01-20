import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  background: ${props => props.theme.color1};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 35rem;
  text-align: center;
  background: ${props => props.theme.color2};
  padding: 2rem;
  border-radius: 0.5rem;
  border: 1px solid ${props => props.theme.color3};

  img {
    width: 75%;
    border: 1px solid ${props => props.theme.color3};
    border-radius: 50%;
    margin-bottom: 2rem;
  }

  h1 {
    color: ${props => props.theme.color6};
    margin-bottom: 1rem;
  }
  h3 {
    color: ${props => props.theme.color5};
    font-weight: lighter;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 3rem;

    button {
      margin-top: 0.5rem;
      background: ${props => props.theme.color4};
      font-weight: bold;
      color: ${props => props.theme.color1};
      border: 0;
      border-radius: 0.5rem;
      padding: 1.5rem;
      font-size: 1.6rem;
      transition: all 0.3s;

      &:hover {
        background: ${props => props.theme.color5};
      }
    }

    a {
      color: ${props => props.theme.color6};
      font-size: 1.5rem;
      margin-top: 1.5rem;
    }
  }
`;
