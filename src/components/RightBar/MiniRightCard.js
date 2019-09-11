import React, { useState } from 'react';
import Modal from 'react-modal';
import ShapeStyles from '../../styling/variables/ShapeStyles';
import { MediumCard } from './rightbar.styles';
import { ModalContainer, Imagecontainer, TextContainer } from './modal.styles';
import { ComponentTitle, BodyText } from '../../styling/atoms/Fonts';

Modal.defaultStyles.overlay.backgroundColor = 'rgba(0, 0, 0, 0.6)';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 0,
  },
};

const MiniRightCard = ({ image, text, title }) => {
  const [isOpen, setModal] = useState(false);
  const toggleModal = () => setModal(!isOpen);
  return (
    <>
      <MediumCard onClick={toggleModal} shadow={ShapeStyles.elevation.normal}>
        <input type="checkbox" checked />
        <p>{title}</p>
      </MediumCard>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        style={customStyles}
        contentLabel={title}
        ariaHideApp={false}>
        <ModalContainer>
          <Imagecontainer>
            <img src={image} alt={title} />
          </Imagecontainer>
          <TextContainer>
            <ComponentTitle>{title}</ComponentTitle>
            <BodyText>{text}</BodyText>
          </TextContainer>
        </ModalContainer>
      </Modal>
    </>
  );
};

export default MiniRightCard;
