import styled from 'styled-components';

const SVG = styled.svg`
  ${props => (props.svgHeight ? `height: ${props.svgHeight};` : null)}
  ${props => (props.svgWidth ? `width: ${props.svgWidth};` : null)}
  g {
    fill: ${props => props.fillColor || 'none'};
    stroke: ${props => props.strokeColor || 'none'};
    stroke-miterlimit: ${props => props.mitter || '10'};
    stroke-width: ${props => props.strokeWidth || '0px'};
  }
`;

export default SVG;


// --- EXAMPLE ---

/* Raw SVG:

<svg width="21" height="5" viewBox="0 0 21 5" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="2.5" cy="2.5" r="2.5" fill="#7D8597"/>
  <circle cx="10.5" cy="2.5" r="2.5" fill="#7D8597"/>
  <circle cx="18.5" cy="2.5" r="2.5" fill="#7D8597"/>
</svg>

Step 1 :
Remove any unnecessary attributes
Here I've removed all fill, width and height attributes. We'll be setting those later with CSS

<svg viewBox="0 0 21 5" xmlns="http://www.w3.org/2000/svg">
  <circle cx="2.5" cy="2.5" r="2.5" />
  <circle cx="10.5" cy="2.5" r="2.5" />
  <circle cx="18.5" cy="2.5" r="2.5" />
</svg>

Step 2 :
Wrap all paths in a 'g' tag and spread props

    function Ellipses(props) {
      return (
        <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 5" {...props}>
          <g>
            <circle cx="2.5" cy="2.5" r="2.5" />
            <circle cx="10.5" cy="2.5" r="2.5" />
            <circle cx="18.5" cy="2.5" r="2.5" />
          </g>
        </SVG>
      );
    } */
