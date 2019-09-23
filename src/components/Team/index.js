import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { TeamContainer, Title, TeamHead, HeadText, CardContainer } from './team.styles';
import MemberCards from '../Cards/MemberCards';
import { fetchTeamInfo } from '../../actions/team';

import Loader from '../Loader';
import DisplayCard from '../Cards/DisplayCard';
import bravoParty from '../../assets/bravo-party.svg';
import localstorage from '../../utils/localstorage';

import Search from '../Search';

const Team = ({ team, fetchTeamInfo }) => {
  useEffect(() => {
    fetchTeamInfo();
  }, [fetchTeamInfo]);
  const members =
    (team.members && team.members.filter(member => member.id !== localstorage.get().id)) || null;
  return (
    <React.Fragment>
      <TeamContainer>
        <div className="headers">
          <Title>Team</Title>
          <Search />
        </div>
        <CardContainer>
          {team.isFetchingTeam && <Loader /> }
          {members && (
            <div>
              <TeamHead>
                <HeadText marginLeft={true}>Name</HeadText>
                <HeadText>Actions</HeadText>
              </TeamHead>
              <MemberCards members={members} />
            </div>
          )}
          {team.errorMessage && (
            <DisplayCard header={<img src={bravoParty} alt="bravo party" />} text={team.errorMessage} />
          )}
        </CardContainer>
      </TeamContainer>
    </React.Fragment>
  );
};

export default connect(
  state => ({ team: state.team }),
  { fetchTeamInfo }
)(Team);
