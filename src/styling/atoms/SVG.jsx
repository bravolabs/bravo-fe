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

function Logo(props) {
  return (
    <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" {...props}>
      <g>
        <path d="M40 11.7895C40 5.33457 34.8128 0.0908153 28.3789 0C28.3224 0 28.2671 0 28.2105 0H4.35088C3.19691 0.000109474 2.09025 0.458596 1.27432 1.27461C0.458381 2.09062 -5.19276e-09 3.19733 0 4.35129L0 35.6487C0 36.8027 0.458438 37.9095 1.27446 38.7255C2.09049 39.5416 3.19726 40 4.35129 40H28.2109C28.2675 40 28.3228 40 28.3794 40C34.8128 39.9092 40 34.6654 40 28.2105C40.0039 25.1444 38.8097 22.1981 36.672 20C38.8097 17.8019 40.0039 14.8556 40 11.7895ZM31.3725 25.6694C30.2735 28.1796 28.467 30.3153 26.1739 31.8156C23.8808 33.3159 21.2003 34.1157 18.46 34.1174C15.7197 34.1191 13.0383 33.3225 10.7433 31.825C8.4484 30.3275 6.63935 28.1939 5.53725 25.685C5.38983 25.34 5.38453 24.9507 5.5225 24.6018C5.66047 24.2529 5.93057 23.9725 6.27409 23.8216C6.61761 23.6707 7.00681 23.6615 7.35711 23.7959C7.70741 23.9303 7.99051 24.1975 8.14489 24.5395C9.02441 26.5419 10.4682 28.2448 12.2998 29.4399C14.1313 30.6351 16.2714 31.2709 18.4585 31.2695C20.6455 31.2681 22.7848 30.6297 24.6149 29.4323C26.445 28.2348 27.8866 26.5302 28.7637 24.5267C28.9179 24.1849 29.2007 23.9177 29.5507 23.7831C29.9007 23.6486 30.2897 23.6574 30.6332 23.8079C30.9766 23.9583 31.2469 24.2382 31.3854 24.5867C31.5238 24.9352 31.5192 25.3242 31.3725 25.6694Z" />
      </g>
    </SVG>
  );
} */