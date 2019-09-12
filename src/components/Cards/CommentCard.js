import React from 'react';
import { CommentCardContainer, CommentHeader } from './cards.styles';
import User from '../User';

const CommentCard = ({ name, avatar, text, timestamp }) => (
  <CommentCardContainer>
    <CommentHeader>
      <User img={avatar} name={name} />
    </CommentHeader>
  </CommentCardContainer>
);

export default CommentCard;
