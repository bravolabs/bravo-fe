import React from 'react';
import { SectionContainer } from './commentsection.styles';
import CommentCard from '../Cards/CommentCard';

const CommentSection = ({ comments }) => (
  <SectionContainer>
    <CommentCard
      name="James Erozonachi"
      avatar={null}
      text="Yoo Mehh... Killed it!"
      timestamp="1568301444428"
    />
    <CommentCard
      name="Code Maker"
      avatar={null}
      text="Well deserved!.."
      timestamp="1568301444428"
    />
  </SectionContainer>
);

export default CommentSection;
