import styled from 'styled-components';

export const SearchWrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 1.87781px 6.25935px rgba(0, 0, 0, 0.06);
  border-radius: 100px;
  width: 220px;
  height: 35px;
`;

export const TextWrapper = styled.div`
  display: flex;
  .icon {
    margin-top: 10px;
    font-size: 18px;
    margin-left: 10px;
  }
  input {
    display: flex;
    border: none;
    font-size: 14px;
    padding: 10px;
    background: transparent;
    color: #c4c4c4;
  }
`;
