import styled from 'styled-components';

export const ModalContainer = styled.div`
  width: 500px;
  height: 400px;
  display: flex;
  flex-direction: column;
`;
export const Imagecontainer = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 250px;
  }
`;

export const TextContainer = styled.div`
  height: 40%;
  width: 100%;
  background-color: #4264ed;
  padding: 20px;
  line-height: 1.7;
  h3,
  p {
    color: #ffffff;
  }
  h3 {
    font-weight: bold;
    margin-bottom: 10px;
  }
`;
