import { MemberCardContainer } from './cards.styles';
import User from '../User';

const MemberCard = ({ id, name, avatar }) => (
  <MemberCardContainer>
    <User img={avatar} alt={name} name={name} />
  </MemberCardContainer>
);

export default MemberCard;
