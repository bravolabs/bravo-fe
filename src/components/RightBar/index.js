import React from 'react';
import { RightBarContainer, RightBarCard, TextContent } from './rightbar.styles';
import getStarted from '../../assets/get-started1.png';
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
    text: `Bravo let's you give public shoutouts to your collegues for their hard work and keeps track of your own.`,
  },
  {
    image: shoutout,
    title: 'What are bravos?',
    text: `Bravos are points users get when they are acknowledged for good work. You can see how many bravos each of your teammates have in your team board.`,
  },
  {
    image: howto,
    title: 'How do I get bravos?',
    text: `You currently get 10b for every shoutout someone gives to you. You also get bravos when someone comments (2b) or reacts (1b) to that shoutout.`,
  },
];

const RightBar = () => (
  <RightBarContainer>
    <RightBarCard shadow={ShapeStyles.elevation.normal}>
      <header>
        <img src={getStarted} alt="get started" />
        <p>Let's Get started</p>
      </header>
      <TextContent>
        <p>
          1. Type <span>/bravo</span> in slack
        </p>
        <p>2. Send a Shout out</p>
        <p>3. Review your shoutouts</p>
      </TextContent>
    </RightBarCard>

    <section>
      <BodyText className="learn">Learn about Bravo</BodyText>
      {descriptions.map(item => (
        <MiniRightCard key={item.title} {...item} />
      ))}
    </section>
  </RightBarContainer>
);

export default RightBar;
