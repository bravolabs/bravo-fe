import React from 'react';
import { MemberCardContainer, MemberCardAction, ViewProfile } from './cards.styles';
import User from '../User';
import placeholder from '../../assets/placeholder.png';
const handleActionClick = id => {
  const target = document.querySelector(`#${id}`);
  const val = target.style.display;
  if (val === 'none' || val === '') {
    target.style.display = 'block';
  } else {
    target.style.display = 'none';
  }
};

const handleFocusOut = id => {
  document.querySelector(`#${id}`).style.display = 'none';
};

const MemberCard = ({ id, name, avatar }) => (
  <MemberCardContainer>
    <User img={avatar || placeholder} alt={name} name={name} />
    <MemberCardAction
      onClick={() => handleActionClick(`profile-${id}`)}
      onBlur={() => handleFocusOut(`profile-${id}`)}>
      View Profile
    </MemberCardAction>
  </MemberCardContainer>
);

export default MemberCard;
