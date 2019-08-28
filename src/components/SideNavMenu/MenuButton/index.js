import React from 'react';
import { Link } from 'react-router-dom';

import { ImageContainer, ButtonImage } from './menuButton.styles';

const MenuButton = ({ img, path }) => {
    return (
      <Link to={path}>
        <ImageContainer>
          <ButtonImage src={img} alt='menu button' />
        </ImageContainer>
      </Link>
    );
  };

export default MenuButton;
