import styled from 'styled-components';

export const Container = styled.div`
  margin: 280px auto;

  display: flex;
  flex-direction: column;

  width: 800px;
  height: 380px;

  padding: 40px;

  border-radius: 16px;
  background: #ffffff;

  h2 {
    color: #45395d;
    font-weight: 400;
    letter-spacing: 1px;
    font-size: 24px;

    margin-bottom: 60px;
  }
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    width: 320px;
    height: 40px;

    padding: 12px;

    border: none;
    border-bottom: 1px solid #45395d;

    background: inherit;

    color: #45395d;
    font-size: 18px;

    &::placeholder {
      color: #bbb;
      font-size: 16px;
    }
  }

  button {
    margin-top: 16px;
    width: 120px;
    height: 30px;

    border: none;
    border-radius: 4px;

    color: #111;
    background: #eee;

    transition: 0.2s ease-in;
    &:hover {
      color: #fff;
      background: #45395d;
    }
  }
`;

export const Buttons = styled.div`
  margin: 48px auto;
  width: 60%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    margin: 24px auto;

    width: 140px;
    height: 40px;

    border: none;
    border-radius: 24px;

    background: #45395d;
    box-shadow: 0px 2px 4px 1px #00000040;

    a {
      color: #fff;
      font-size: 16px;
      text-decoration: none;
    }

    color: #fff;
    font-size: 16px;
    text-decoration: none;
  }
`;
