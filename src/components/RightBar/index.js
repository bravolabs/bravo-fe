import React from 'react';
import { RightBarContainer, RightBarCard, TextContent } from './rightbar.styles';
import getStarted from '../../assets/get-started.svg';
import ShapeStyles from '../../styling/variables/ShapeStyles';
import { BodyText } from '../../styling/atoms/Fonts';
import MiniRightCard from './MiniRightCard';
import group from '../../assets/group.svg';
import shoutout from '../../assets/shoutout.svg';
import howto from '../../assets/howto.svg';

const descriptions = [
  {
    image: group,
    title: 'What is Bravo?',
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae magni omnis delectus
    nemo, maxime molestiae dolorem numquam mollitia, voluptate ea, accusamus excepturi
    deleniti ratione sapiente! Laudantium, aperiam doloribus. Odit, aut.`,
  },
  {
    image: shoutout,
    title: 'What are shoutouts?',
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae magni omnis delectus
    nemo, maxime molestiae dolorem numquam mollitia, voluptate ea, accusamus excepturi
    deleniti ratione sapiente! Laudantium, aperiam doloribus. Odit, aut.`,
  },
  {
    image: howto,
    title: 'How do I get more Bravos?',
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae magni omnis delectus
    nemo, maxime molestiae dolorem numquam mollitia, voluptate ea, accusamus excepturi
    deleniti ratione sapiente! Laudantium, aperiam doloribus. Odit, aut.`,
  },
];

const RightBar = () => (
  <RightBarContainer>
    <RightBarCard shadow={ShapeStyles.elevation.elevate}>
      <header>
        <img src={getStarted} alt="get started" />
      </header>
      <TextContent>
        <p>1. Connect Slack</p>
        <p>2. Receive Shoutout</p>
        <p>3. View Shoutout</p>
      </TextContent>
    </RightBarCard>

    <section>
      <BodyText>Learn about Bravo</BodyText>
      {descriptions.map(item => (
        <MiniRightCard {...item} />
      ))}
    </section>
  </RightBarContainer>
);

export default RightBar;
