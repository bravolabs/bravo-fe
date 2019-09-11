import React from 'react';
import { Link } from 'react-router-dom';
import { MemberCardContainer, MemberCardValue } from './cards.styles';
import User from '../User';
import placeholder from '../../assets/placeholder.png';

const MemberCard = ({ id, name, avatar, total }) => (
  <MemberCardContainer>
    <User img={avatar || placeholder} alt={name} name={name} />
    <MemberCardValue>
      <p>💰{total}</p>
    </MemberCardValue>
  </MemberCardContainer>
);

export default MemberCard;
