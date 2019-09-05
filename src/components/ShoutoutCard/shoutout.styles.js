import styled from 'styled-components';
import { Card } from '../../styling/atoms/Card';
import { BodyText } from '../../styling/atoms/Fonts';

export const ShoutoutCardContainer = styled(Card)`
    max-width: 1000px;
    width: 80%;
    min-height: 200px;
    padding: 40px;
    margin-left: 120px;
    margin-top: 120px;
    border: 1px solid #F1F2F6;
    box-sizing: border-box;
    box-shadow: 0px 2px 2px #F2F3F7;
    background-color: white;
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