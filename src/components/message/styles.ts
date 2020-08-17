import styled from 'styled-components';

export const Container = styled.div`
  width: 800px;
  padding: 0 20px;
  display: flex;
  flex-direction: row;

  p {
    width: 600px;
    margin: 0 0 30px 30px;

    font-size: 24px;
    font-weight: 300;
    line-height: 34px;
  }

  & + div {
    padding-top: 20px;
    border-top: 2px solid #7695af;
  }
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 140px;
    width: 140px;

    border: 3px solid #fff;
    border-radius: 50%;
  }

  span {
    width: 140px;
    margin: 20px 0;
    font-size: 18px;
    text-align: center;
  }
`;
