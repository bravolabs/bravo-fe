import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 60px;
  border-radius: 8px;
  box-sizing: border-box;
  box-shadow: 0px 2px 2px #f2f3f7;
  background-color: white;
  margin-bottom: 20px;

  &.disabled {
    display: none;
  }

  button,
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    height: 5rem;
    background: none;
    border: none;
    outline: none;
    font-size: 2rem;
    font-weight: 300;
    color: #4265ed;
    text-decoration: none;
  }
  button {
    width: 35%;
    &:disabled {
      color: #e0e0e0;
    }
  }
  span {
    width: 20%;
  }
`;
