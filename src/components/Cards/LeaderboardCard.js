import React from 'react';
import { LeaderboardCardContainer, LeaderboardValue, Position } from './cards.styles';
import User from '../User';
import placeholder from '../../assets/placeholder.png';
import BravoDollar from '../../assets/bravo-dollar.svg';

const MemberCard = ({ id, name, avatar, wallet, index }) => (
  <LeaderboardCardContainer>
    <Position>
      <p>{index + 1}.</p>
    </Position>
    <User avatar={avatar || placeholder} alt={name} name={name} />
    <LeaderboardValue>
      {wallet}
      <img src={BravoDollar} alt="bravos" />
    </LeaderboardValue>
  </LeaderboardCardContainer>
);

export default MemberCard;
