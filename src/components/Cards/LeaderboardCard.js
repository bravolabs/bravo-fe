import React from 'react';
import { MemberCardContainer, MemberCardValue } from './cards.styles';
import User from '../User';
import placeholder from '../../assets/placeholder.png';

const MemberCard = ({ id, name, avatar, total }) => (
  <MemberCardContainer>
    <User img={avatar || placeholder} alt={name} name={name} />
    <MemberCardValue>💰{total}</MemberCardValue>
  </MemberCardContainer>
);

export default MemberCard;
