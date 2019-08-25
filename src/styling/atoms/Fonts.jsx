import React from 'react';
import styled from 'styled-components';
import FontColors from '../variables/FontColors';
import FontSizes from '../variables/FontSizes';


export const PageTitle = styled.h1`
  font-size: ${FontSizes.Title};
  color: ${props => (props.color ? props.color : FontColors.Dark)};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : '500')};
`;

export const SectionTitle = styled.h2`
  font-size: ${FontSizes.Large};
  color: ${props => (props.color ? props.color : FontColors.Dark)};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : '400')};
`;

export const ComponentTitle = styled.h3`
  font-size: ${FontSizes.Medium};
  color: ${props => (props.color ? props.color : FontColors.Dark)};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : '400')};
`;

export const BodyText = styled.p`
  font-size: ${FontSizes.Medium};
  color: ${props => (props.color ? props.color : FontColors.Medium)};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : '400')};
`;

export const UIItem = styled.span`
  font-size: ${FontSizes.Medium};
  color: ${props => (props.color ? props.color : FontColors.Light)};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : '400')};
`;

export const ExtraInfo = styled.span`
  font-size: ${FontSizes.Small};
  color: ${props => (props.color ? props.color : FontColors.Light)};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : '300')};
`;
