import React from 'react';
import { MemberCardsContainer } from './cards.styles';
import LeaderboardCard from './LeaderboardCard';

const MemberCards = ({ leaders }) => (
  <MemberCardsContainer>
    {leaders.map((leader, index) => (
      <LeaderboardCard {...leader} index={index} key={leader.slack_mem_id} />
    ))}
  </MemberCardsContainer>
);

export default MemberCards;
