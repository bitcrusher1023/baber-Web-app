import styled from "styled-components";

export const Content = styled.div`
  position: relative;

  input {
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    border: 0;
    border-radius: 0.5rem;
    padding: 1.5rem;
    color: ${props => props.theme.color6};
    margin-bottom: 2.5rem;
    transition: all 0.3s;
  }

  span {
    position: absolute;
    left: 0.5rem;
    top: 5.2rem;
    color: ${props => props.theme.color7};
    margin-bottom: 1rem;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  }
`;
