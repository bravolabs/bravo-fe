import React from 'react';
import { connect } from 'react-redux';
import { TeamContainer, Title, TeamHead, HeadText } from './team.styles';
import MemberCards from '../Cards/MemberCards';
import { fetchTeamInfo } from '../../actions/team';

import Loader from '../Loader';
import DisplayCard from '../Cards/DisplayCard';

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

const Team = ({ team }) => (
  <React.Fragment>
    {team.isFetchingTeam && <DisplayCard header={<Loader />} text="Loading your Team..." />}
    {team.members && (
      <TeamContainer>
        <Title>Team</Title>
        <TeamHead>
          <HeadText marginLeft={true}>Name</HeadText>
          <HeadText>Actions</HeadText>
        </TeamHead>
        <MemberCards members={team.members} />
      </TeamContainer>
    )}
  </React.Fragment>
);

export default connect(
  state => ({ team: state.team }),
  { fetchTeamInfo }
)(Team);
