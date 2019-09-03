import React from 'react';
import { MemberCardContainer, MemberCardAction, ViewProfile } from './cards.styles';
import User from '../User';
import placeholder from '../../assets/placeholder.png';

const MemberCard = ({ id, name, avatar }) => (
  <MemberCardContainer>
    <User img={avatar || placeholder} alt={name} name={name} />
    <MemberCardAction>···</MemberCardAction>
    <ViewProfile>
      <span role="img" aria-label="eyes icon">
        👀
      </span>{' '}
      View profile
    </ViewProfile>
  </MemberCardContainer>
);

export default MemberCard;
