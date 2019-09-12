import React from 'react';
import { SectionContainer, Title } from './commentsection.styles';
import CommentCard from '../Cards/CommentCard';

const CommentSection = ({ comments }) => (
  <SectionContainer>
    <Title>Comments</Title>
    {comments &&
      comments.map(comment => (
        <CommentCard
          name={comment.name}
          avatar={comment.avatar}
          text={comment.text}
          timestamp={comment.timestamp}
          key={comment.id}
        />
      ))}
  </SectionContainer>
);

export default CommentSection;
