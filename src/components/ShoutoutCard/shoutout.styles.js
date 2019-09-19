import styled from 'styled-components';
import { Card } from '../../styling/atoms/Card';
import { BodyText } from '../../styling/atoms/Fonts';
import Breakpoints from '../../styling/variables/Breakpoints';
import colors from '../../styling/variables/UIColors';

export const ShoutoutCardContainer = styled(Card)`
  width: 100%;
  min-height: 200px;
  border-radius: 8px;
  box-shadow: 0px 1.87781px 6.25935px rgba(0, 0, 0, 0.06);
  transition: 0.5s ease-in-out;
  margin-bottom: 20px;

  ${props =>
    props.hover &&
    `&:hover {
    box-shadow: 0px 3.75561px 12.5187px rgba(0, 0, 0, 0.12);
    border: 1px solid ${colors.brand};
  }`}

  @media (max-width: ${Breakpoints.medium}px) {
    width: auto;
    padding: 24px;
    min-height: initial;
    margin-left: 16px;
    margin-right: 16px;
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
  font-weight: 300;
  font-size: 1.4rem;
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
