import styled from 'styled-components';
import { ComponentTitle } from '../../styling/atoms/Fonts';

export const ShoutoutUserAvatar = styled.img`
    margin: auto 12px auto 0;
    width: 32px;
    height: 32px;
    border-radius: 50%;
`;

export const Username = styled(ComponentTitle)`
    margin: auto 0;
    vertical-align: center;
    width: fit-content;
    height: 2rem;
    line-height: 1.9rem;
`;