import React from 'react';
import { MemberCardContainer, MemberCardValue, Position } from './cards.styles';
import User from '../User';
import placeholder from '../../assets/placeholder.png';

const MemberCard = ({ id, name, avatar, total, index }) => (
  <MemberCardContainer>
    <Position>
      <p>{index + 1}.</p>
    </Position>
    <User img={avatar || placeholder} alt={name} name={name} />
    <MemberCardValue>💰{total}</MemberCardValue>
  </MemberCardContainer>
);

export default MemberCard;
