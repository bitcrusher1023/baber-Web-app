import styled from "styled-components";

export const Container = styled.div`
  max-width: 60rem;
  margin: 5rem auto;
  background: ${props => props.theme.color2};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border-radius: 0.5rem;
  border: 1px solid ${props => props.theme.color3};

  h1 {
    color: ${props => props.theme.color6};
    margin-bottom: 1rem;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
    width: 80%;

    hr {
      border: 0;
      height: 0.1rem;
      background: ${props => props.theme.color3};
      margin-bottom: 2.5rem;
    }

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
    }
  }

  > button {
      width: 80%;
      margin-top: 2rem;
      background: ${props => props.theme.color8};
      font-weight: bold;
      color: ${props => props.theme.color1};
      border: 0;
      border-radius: 0.5rem;
      padding: 1.5rem;
      font-size: 1.6rem;
      transition: all 0.3s;

      &:hover {
        background: ${props => props.theme.color7};
      }
`;

export const ProfileAvatar = styled.div`
  display: block;
  text-align: center;
  /* margin-bottom: 3rem; */

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      height: 12rem;
      width: 12rem;
      border-radius: 50%;
      border: 0.3rem solid ${props => props.theme.color7};
      background: ${props => props.theme.color3};
    }

    input {
      display: none;
    }
  }
`;
