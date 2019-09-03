import React from 'react';
import { TeamContainer, Title, TeamHead, HeadText } from './team.styles';

const Team = () => (
  <TeamContainer>
    <Title>Team</Title>
    <TeamHead>
      <HeadText>Name</HeadText>
      <HeadText>Actions</HeadText>
    </TeamHead>
  </TeamContainer>
);

export default Team;
