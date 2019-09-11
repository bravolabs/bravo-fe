import React from 'react';
import { MemberCardsContainer } from './cards.styles';
import LeaderboardCard from './LeaderboardCard';

const MemberCards = ({ leaders }) => (
  <MemberCardsContainer>
    {leaders.map((leader, index) => (
      <LeaderboardCard {...leader} index={index} key={index} />
    ))}
  </MemberCardsContainer>
);

export default MemberCards;
