import React from 'react';
import { SectionContainer, Title } from './commentsection.styles';
import CommentCard from '../Cards/CommentCard';

const CommentSection = ({ comments }) => {
  return (
    <SectionContainer>
      <Title>Comments</Title>
      {comments &&
        comments.map(comment => (
          <CommentCard
            name={comment.name}
            avatar={comment.avatar}
            text={comment.text}
            timestamp={Number(
              comment.timestamp
                .replace('.', '')
                .split('')
                .splice(0, 13)
                .join('')
            )}
            key={comment.id}
          />
        ))}
    </SectionContainer>
  );
};

export default CommentSection;
