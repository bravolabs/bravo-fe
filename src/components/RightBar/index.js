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
    text: `Never let the acknowledgement of your good work get lost in the shuffle again.`,
  },
  {
    image: shoutout,
    title: 'What are shoutouts?',
    text: `Shoutouts are acknowledgements you send to or receive from a collegue  `,
  },
  {
    image: howto,
    title: 'How do I get more Bravos?',
    text: `Anyone in your organization or slack workspace can give you a Bravo.`,
  },
];

const RightBar = () => (
  <RightBarContainer>
    <RightBarCard shadow={ShapeStyles.elevation.normal}>
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
        <MiniRightCard key={item.title} {...item} />
      ))}
    </section>
  </RightBarContainer>
);

export default RightBar;
