import React from 'react';
import { RightBarContainer, RightBarCard, TextContent, MediumCard } from './rightbar.styles';
import getStarted from '../../assets/get-started.svg';
import ShapeStyles from '../../styling/variables/ShapeStyles';
import { BodyText } from '../../styling/atoms/Fonts';
import MiniRightCard from './MiniRightCard';
import group from '../../assets/group.svg';
import shoutout from '../../assets/shoutout.svg';
import howto from '../../assets/howto.svg';

const description = {
  whatIsBravo: {
    image: group,
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae magni omnis delectus
    nemo, maxime molestiae dolorem numquam mollitia, voluptate ea, accusamus excepturi
    deleniti ratione sapiente! Laudantium, aperiam doloribus. Odit, aut.`,
  },
  whatAreShoutouts: {
    image: shoutout,
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae magni omnis delectus
    nemo, maxime molestiae dolorem numquam mollitia, voluptate ea, accusamus excepturi
    deleniti ratione sapiente! Laudantium, aperiam doloribus. Odit, aut.`,
  },
  howToGetBravos: {
    image: howto,
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae magni omnis delectus
    nemo, maxime molestiae dolorem numquam mollitia, voluptate ea, accusamus excepturi
    deleniti ratione sapiente! Laudantium, aperiam doloribus. Odit, aut.`,
  },
};

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
      <MiniRightCard text="What is Bravo?" description={description.whatIsBravo} />
      <MiniRightCard text="What are shoutouts?" description={description.whatAreShoutouts} />
      <MiniRightCard text="How do I get more Bravos?" description={description.howToGetBravos} />
    </section>
  </RightBarContainer>
);

export default RightBar;
