import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import ShapeStyles from '../../styling/variables/ShapeStyles';
import { MediumCard } from './rightbar.styles';
import { ModalContainer, Imagecontainer, TextContainer } from './modal.styles';

const MiniRightCard = ({ text, description }) => {
  const [isOpen, setModal] = useState(false);
  const toggleModal = () => setModal(!isOpen);
  return (
    <>
      <MediumCard onClick={toggleModal} shadow={ShapeStyles.elevation.elevate}>
        <input type="checkbox" checked />
        <p>{text}</p>
      </MediumCard>
      <Popup open={isOpen} closeOnDocumentClick onClose={toggleModal}>
        <ModalContainer>
          {/* <a className="close" onClick={toggleModal}>
            &times;
          </a> */}
          <Imagecontainer>
            <img src={description.image} alt={text} />
          </Imagecontainer>
          <TextContainer>
            <p>{description.text}</p>
          </TextContainer>
        </ModalContainer>
      </Popup>
    </>
  );
};

export default MiniRightCard;
