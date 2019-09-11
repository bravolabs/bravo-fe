import React from 'react';
import { MemberCardsContainer } from './cards.styles';
import LeaderboardCard from './LeaderboardCard';

const MemberCards = ({ leaders }) => (
  <MemberCardsContainer>
    {leaders.map(leader => (
      <LeaderboardCard {...leader} key={leader.id} />
    ))}
  </MemberCardsContainer>
);

export default MemberCards;
