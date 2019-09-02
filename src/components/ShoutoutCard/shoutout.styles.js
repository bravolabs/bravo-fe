import styled from 'styled-components';
import { Card } from '../../styling/atoms/Card';
import { BodyText } from '../../styling/atoms/Fonts';

export const ShoutoutCardContainer = styled(Card)`
    width: 1000px;
    height: 20rem;
    padding: 4rem;
    margin: ${props => (props.margin ? props.margin : '18rem auto')};
    border: 1px solid #F1F2F6;
    box-sizing: border-box;
    box-shadow: 0px 2px 2px #F2F3F7;
    border-radius: 8px;
`;

export const AvatarsContainer = styled.div`
    display: flex;
    width: 100%;
    height: 4rem;
`;

export const Emoji = styled.img`
    width: 20px;
    height: 20px;
    margin: auto 24px;
`;

export const Time = styled.div`
    margin: auto;
    margin-right: 0;
    width: 80px;
    height: 2rem;
    font-weight: 300;
    font-size: 1.4rem;
    line-height: 1.6rem;
    color: rgba(0, 0, 0, 0.652);
`;

export const ShoutoutText = styled(BodyText)`
    margin-top: 1.5rem;
    width: 800px;
    height: 8rem;
    line-height: 2.2rem;
`;