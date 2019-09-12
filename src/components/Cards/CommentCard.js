import React from 'react';
import { CommentCardContainer, CommentHeader } from './cards.styles';

const CommentCard = ({ name, avatar, text, timestamp }) => (
  <CommentCardContainer>
    <CommentHeader></CommentHeader>
  </CommentCardContainer>
);

export default CommentCard;
