import React from 'react';

// import styles
import { 
  Container, 
  Nav, 
  LogoContainer, 
  Logo, 
  NavText, 
  Main, 
  Intro, 
  Caption, 
  IntroText, 
  Cards, 
  Card, 
  Icon, 
  Title, 
  CardText, 
  Footer
} from './home.styles';

// import utils
import logoImg from './utils/bravo-logo.png';
import clapIcon from './utils/clap-icon.png';
import giftIcon from './utils/gift-icon.png';
import messageIcon from './utils/message-icon.png';

// still have to make slack button a separate component
const Home = () => (
  <Container>
    <Nav>
      <LogoContainer>
        <Logo src={logoImg} />
        <NavText>bravo</NavText>
      </LogoContainer>
      <a href="https://slack.com/oauth/authorize?scope=identity.basic,identity.email,identity.team,identity.avatar&client_id=733322040912.733329316565"><img src="https://platform.slack-edge.com/img/sign_in_with_slack.png" /></a>
    </Nav>
    <Main>
      <Intro>
        <Caption>when the job is done, say bravo</Caption>
        <IntroText>bravo enables team members to easily acknowledge each other with one slack command</IntroText>
        <a href="https://slack.com/oauth/authorize?scope=identity.basic,identity.email,identity.team,identity.avatar&client_id=733322040912.733329316565"><img src="https://platform.slack-edge.com/img/sign_in_with_slack.png" /></a>
      </Intro>
      <Cards>
        <Card>
          <Icon src={clapIcon} />
          <Title>bravo slack bot</Title>
          <CardText>install our slack integration in few simple clicks</CardText>
        </Card>
        <Card>
          <Icon src={giftIcon} />
          <Title>give a bravo</Title>
          <CardText>select receiver, write your text, send</CardText>
        </Card>
        <Card>
          <Icon src={messageIcon} />
          <Title>receive a bravo</Title>
          <CardText>get notification when someone sends you a bravo</CardText>
        </Card>
      </Cards>
    </Main>
    <Footer>

    </Footer>
  </Container>
);

export default Home;
