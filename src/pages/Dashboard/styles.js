import styled from "styled-components";

export const Container = styled.div`
  max-width: 60rem;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-self: center;
    align-items: center;

    button {
      border: 0;
      background: none;

      svg {
        color: ${props => props.theme.color5};
      }
    }

    strong {
      color: ${props => props.theme.color6};
      font-size: 2.4rem;
      margin: 0 1.5rem;
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5rem;
    margin-top: 3rem;
  }
`;

export const Time = styled.li`
  padding: 2rem;
  border-radius: 0.4rem;
  background: ${props => props.theme.color5};
  opacity: ${props => (props.past ? 0.3 : 1)};

  strong {
    display: block;
    color: ${props => props.theme.color3};
    font-size: 2rem;
    font-weight: normal;
  }

  span {
    display: block;
    margin-top: 3px;
    color: ${props => props.theme.color1};
    font-weight: bold;
    font-size: 1.5rem;
  }
`;
