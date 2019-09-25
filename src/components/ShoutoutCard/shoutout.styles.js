import styled from 'styled-components';
import { Card } from '../../styling/atoms/Card';
import { BodyText } from '../../styling/atoms/Fonts';
import Breakpoints from '../../styling/variables/Breakpoints';

export const ShoutoutCardContainer = styled(Card)`
  position: relative;
  max-width: 900px;
  width: 100%;
  min-height: 200px;
  padding: 40px;
  margin-bottom: 3.2rem;
  border: 1px solid #f1f2f6;
  box-sizing: border-box;
  box-shadow: 0px 2px 2px #f2f3f7;
  background-color: white;
  border-radius: 8px;
  cursor: pointer;

  @media (max-width: ${Breakpoints.medium}px) {
    width: auto;
    padding: 24px;
    min-height: initial;
    margin-left: 16px;
    margin-right: 16px;
  }
`;

export const ViewContainer = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  border-radius: inherit;
  z-index: 99;
  background: rgba(255, 255, 255, 0.8);
`;

export const ViewButton = styled.button`
  background: #ffffff;
  color: #4265ed;
  border: 1px solid #4265ed;
  outline: none;
  padding: 5px;
  box-sizing: border-box;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  &:hover {
    background: #4265ed;
    color: #ffffff;
  }
  a {
    color: inherit;
    text-decoration: none;
    &:link {
      color: inherit;
    }
    &:visited {
      color: inherit;
    }
    &:active {
      color: inherit;
    }
  }
`;

export const AvatarsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 4rem;

  @media (max-width: ${Breakpoints.medium}px) {
    position: relative;
    height: initial;
    justify-content: space-between;
    .user {
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      max-width: 40%;
      > img {
        margin: 0;
        margin-bottom: 8px;
      }
      > h3 {
        text-align: center;
        height: auto;
        margin: 0;
        font-weight: 600;
      }
    }
  }
`;

export const Emoji = styled.img`
  width: 20px;
  height: 20px;
  margin: auto 24px;

  @media (max-width: ${Breakpoints.medium}px) {
    margin: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Time = styled.div`
  margin: auto;
  margin-right: 0;
  width: 100px;
  height: 2rem;
  font-weight: 300;
  font-size: 1.4rem;
  line-height: 1.6rem;
  color: rgba(0, 0, 0, 0.652);

  &.mobile-time {
    display: none;
  }

  @media (max-width: ${Breakpoints.medium}px) {
    &.mobile-time {
      display: initial;
      float: right;
      width: auto;
    }
    &.time {
      display: none;
    }
  }
`;

export const ShoutoutText = styled(BodyText)`
  margin-top: 1.6rem;
  width: 100%;
  height: 8rem;
  line-height: 2.2rem;

  @media (max-width: ${Breakpoints.medium}px) {
    height: auto;
    margin-bottom: 2.4rem;
  }
`;
