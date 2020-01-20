import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  background: #222;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 350px;
  text-align: center;
  background: #333;
  padding: 20px;
  border-radius: 5px;

  img {
    width: 75%;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.5);
      border: 0;
      border-radius: 5px;
      padding: 15px;
      color: #fff;
      margin-bottom: 10px;
    }

    button {
      margin-top: 5px;
      background: #fed35b;
      font-weight: bold;
      color: #000;
      border: 0;
      border-radius: 5px;
      padding: 15px;
      font-size: 16px;
      transition: all 0.3s;

      &:hover {
        background: #f4c730;
      }
    }

    a {
      color: #fff;
      font-size: 15px;
      margin-top: 15px;
    }
  }
`;
