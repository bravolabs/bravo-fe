import React from 'react';
import { TeamContainer, Title, TeamHead, HeadText } from './team.styles';
import MemberCards from '../Cards/MemberCards';

const members = [
  {
    id: 1,
    name: 'Samar Vir',
    avatar: null,
  },
  {
    id: 2,
    name: 'Maxime Salomon',
    avatar: null,
  },
  {
    id: 3,
    name: 'Aaron Thompson',
    avatar: null,
  },
  {
    id: 4,
    name: 'Borja Soler',
    avatar: null,
  },
  {
    id: 5,
    name: 'Johnson Ogwuru',
    avatar: null,
  },
  {
    id: 6,
    name: 'Noble Obioma',
    avatar: null,
  },
  {
    id: 7,
    name: 'Petar Vlaisavljevic',
    avatar: null,
  },
  {
    id: 8,
    name: 'James Eneh',
    avatar: null,
  },
];

const Team = () => (
  <TeamContainer>
    <Title>Team</Title>
    <TeamHead>
      <HeadText>Name</HeadText>
      <HeadText>Actions</HeadText>
    </TeamHead>
    <MemberCards members={members} />
  </TeamContainer>
);

export default Team;
