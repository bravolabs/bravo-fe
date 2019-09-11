import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { TeamContainer, Title, TeamHead, HeadText } from './team.styles';
import MemberCards from '../Cards/MemberCards';
import { fetchTeamInfo } from '../../actions/team';

import Loader from '../Loader';
import DisplayCard from '../Cards/DisplayCard';
import bravoParty from '../../assets/bravo-party.svg';

const Team = ({ team, user, fetchTeamInfo }) => {
  useEffect(() => {
    if (team && !team.members) {
      fetchTeamInfo();
    }
  }, []);
  const members = (team.members && team.members.filter(member => member.id !== user.id)) || null;
  return (
    <React.Fragment>
      {team.isFetchingTeam && <DisplayCard header={<Loader />} text="Loading your Team..." />}
      {members && (
        <TeamContainer>
          <Title>Team</Title>
          <TeamHead>
            <HeadText marginLeft={true}>Name</HeadText>
            <HeadText>Actions</HeadText>
          </TeamHead>
          <MemberCards members={members} />
        </TeamContainer>
      )}
      {team.errorMessage && (
        <DisplayCard header={<img src={bravoParty} alt="bravo party" />} text={team.errorMessage} />
      )}
    </React.Fragment>
  );
};

export default connect(
  state => ({ team: state.team, user: state.slack.user }),
  { fetchTeamInfo }
)(Team);
