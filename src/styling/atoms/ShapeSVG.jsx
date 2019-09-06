import styled from 'styled-components';

const ShapeSVG = styled.svg`
  ${props => (props.svgHeight ? `height: ${props.svgHeight};` : null)}
  ${props => (props.svgWidth ? `width: ${props.svgWidth};` : null)}
    g {
    fill: ${props => props.fillColor || 'none'};
    stroke: ${props => props.strokeColor || 'none'};
    stroke-miterlimit: ${props => props.mitter || '10'};
    stroke-width: ${props => props.strokeWidth || '0px'};
  }
`;

export default ShapeSVG;
