import React from 'react';
import { MemberCardContainer, MemberCardAction } from './cards.styles';
import User from '../User';
import placeholder from '../../assets/placeholder.png';

const MemberCard = ({ id, name, avatar }) => (
  <MemberCardContainer>
    <User img={avatar || placeholder} alt={name} name={name} />
    <MemberCardAction>View Profile</MemberCardAction>
  </MemberCardContainer>
);

export default MemberCard;
