import React from 'react';
import { MemberCardsContainer } from './cards.styles';
import MemberCard from './MemberCard';

const MemberCards = ({ members, userId }) => (
  <MemberCardsContainer>
    {members.map(member => (
      <MemberCard {...member} key={member.id} />
    ))}
  </MemberCardsContainer>
);

export default MemberCards;
