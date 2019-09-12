import React from 'react';
import { CommentCardContainer, CommentHeader } from './cards.styles';
import User from '../User';
import placeholder from '../../assets/placeholder.png';

const CommentCard = ({ name, avatar, text, timestamp }) => (
  <CommentCardContainer>
    <CommentHeader>
      <User img={avatar || placeholder} name={name} />
    </CommentHeader>
  </CommentCardContainer>
);

export default CommentCard;
