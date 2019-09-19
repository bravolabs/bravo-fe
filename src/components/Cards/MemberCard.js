import React from 'react';
import { Link } from 'react-router-dom';
import { MemberCardContainer, MemberCardAction } from './cards.styles';
import User from '../User';
import placeholder from '../../assets/placeholder.png';

const MemberCard = ({ id, name, avatar }) => (
  <MemberCardContainer>
    <User avatar={avatar || placeholder} name={name} />
    <MemberCardAction>
      <Link to={`/members/${id}`}>View Profile</Link>
    </MemberCardAction>
  </MemberCardContainer>
);

export default MemberCard;
