import React from 'react';
import { connect } from 'react-redux';
import { ShoutoutsContainer, Title, CardContainer } from './shoutouts.styles';

const Shoutouts = ({ ...props }) => (
  <ShoutoutsContainer>
    <Title>Shoutouts</Title>
    <CardContainer></CardContainer>
  </ShoutoutsContainer>
);
