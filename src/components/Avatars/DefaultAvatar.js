import React from 'react';
import styled from 'styled-components';
import color from 'color';

const calculateColors = (base, index) => {
  switch (index) {
    case 1:
      return base;
    case 2:
      return color(base)
        .lighten(0.2)
        .rotate(20)
        .hex();
    case 3:
      return color(base)
        .darken(0.7)
        .hex();
    case 4:
      return color(base)
        .darken(0.9)
        .hex();
    case 5:
      return color(base)
        .darken(0.35)
        .hex();
    case 6:
      return color(base)
        .lighten(0.8)
        .hex();
    case 7:
      return color(base)
        .darken(0.1)
        .desaturate(0.2)
        .hex();
    case 8:
      return color(base)
        .darken(0.3)
        .desaturate(0.3)
        .hex();
    case 9:
      return color(base)
        .darken(0.9)
        .hex();
    case 10:
      return color(base)
        .lighten(0.1)
        .desaturate(0.3)
        .hex();
    default:
      return color(base).hex();
  }
};

const StyledAvatar = styled.svg`
  ${props => (props.svgHeight ? `height: ${props.svgHeight};` : null)}
  ${props => (props.svgWidth ? `width: ${props.svgWidth};` : null)}

  .cls-1 {
    fill: url(#${props => props.Color.replace('#', '')}-linear-gradient);
  }

  .cls-2 {
    fill: ${props => calculateColors(props.Color, 9)};
  }

  .cls-2,
  .cls-3 {
    opacity: 0.84;
  }

  .cls-3 {
    fill: url(#${props => props.Color.replace('#', '')}-linear-gradient-2);
  }

  .cls-4 {
    fill: #fff;
  }

  .cls-5 {
    opacity: 0.37;
    fill: url(#${props => props.Color.replace('#', '')}-linear-gradient-3);
  }

  .cls-6 {
    opacity: 0.81;
    fill: url(#${props => props.Color.replace('#', '')}-radial-gradient);
  }

  .cls-7 {
    opacity: 0.5;
    fill: ${props => calculateColors(props.Color, 10)};
  }
`;

const generateBaseColor = seed => {
  return (seed * 16807) % 360;
};

export default function DefaultAvatar(props) {
  let { ColorSeed } = props;
  if (typeof ColorSeed === 'string') {
    let code = 0;
    for (let i = 0; i < str.length; i++) {
      code += str.charCodeAt(i);
    }
    ColorSeed = code;
  }
  ColorSeed = Number(ColorSeed);
  if (!ColorSeed) ColorSeed = 4;
  const hue = generateBaseColor(ColorSeed);
  let Color = color({ h: hue, s: 100, l: 65 }).hex();

  return (
    <StyledAvatar
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 82.63 84.83"
      className={props.className}
      Color={Color}>
      <defs>
        <linearGradient
          id={`${Color.replace('#', '')}-linear-gradient`}
          x1="20.24"
          y1="5.91"
          x2="62.39"
          y2="78.92"
          gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor={calculateColors(Color, 1)} />
          <stop offset="1" stopColor={calculateColors(Color, 2)} />
        </linearGradient>
        <linearGradient
          id={`${Color.replace('#', '')}-linear-gradient-2`}
          x1="21.84"
          y1="41.88"
          x2="16.47"
          y2="13.41"
          gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor={calculateColors(Color, 3)} />
          <stop offset="0.26" stopColor={calculateColors(Color, 4)} />
        </linearGradient>
        <linearGradient
          id={`${Color.replace('#', '')}-linear-gradient-3`}
          x1="42.91"
          y1="65.02"
          x2="42.91"
          y2="44.47"
          gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor={calculateColors(Color, 5)} />
          <stop offset="1" stopColor={calculateColors(Color, 6)} />
        </linearGradient>
        <radialGradient
          id={`${Color.replace('#', '')}-radial-gradient`}
          cx="43.12"
          cy="70.24"
          r="20.17"
          gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor={calculateColors(Color, 7)} />
          <stop offset="1" stopColor={calculateColors(Color, 8)} />
        </radialGradient>
      </defs>
      <g>
        <ellipse id="Face" className="cls-1" cx="41.32" cy="42.42" rx="41.32" ry="42.42" />
        <path
          className="cls-2"
          d="M72,33.08A7.32,7.32,0,0,0,61.47,30.2a5.06,5.06,0,0,0-1.31,1.13,8.42,8.42,0,0,0-1.88,4.13,1.26,1.26,0,0,0,2.24.94,7.17,7.17,0,0,1,5-2.62,7.09,7.09,0,0,1,4.62,1.28,1.41,1.41,0,0,0,1.69-.24A1.39,1.39,0,0,0,72,33.08Z"
        />
        <g>
          <circle className="cls-3" cx="20.22" cy="33.31" r="7.47" />
          <circle className="cls-4" cx="17.13" cy="31.17" r="2.83" />
        </g>
        <g>
          <path
            className="cls-5"
            d="M58.78,62.68c-4.94,4.14-11.69,5.39-13.37,5.65a4.78,4.78,0,0,1-.53.06c-2.16.11-8.72.27-14.25-1.93a22.43,22.43,0,0,1-3-1.44,42.66,42.66,0,0,1,7.22-2.51,47.59,47.59,0,0,1,8.43-1.24,50.75,50.75,0,0,1,8.15.21A58.74,58.74,0,0,1,58.78,62.68Z"
          />
          <path
            className="cls-6"
            d="M64.25,51.62a14.45,14.45,0,0,1-1,4.93,15.16,15.16,0,0,1-4.51,6.13,56.85,56.85,0,0,0-6.73-1.13,50.09,50.09,0,0,0-9-.27,46,46,0,0,0-8.82,1.38A42.74,42.74,0,0,0,27.61,65a12.4,12.4,0,0,1-2.1-1.44,11.73,11.73,0,0,1-2.29-2.64A9.09,9.09,0,0,1,22,58.12a7.6,7.6,0,0,1,.38-5,6.79,6.79,0,0,1,2.08-2.58,6.63,6.63,0,0,1,2.92-1.21,4.83,4.83,0,0,1,1.26,0l.22,0A5.61,5.61,0,0,0,29.72,51a7.78,7.78,0,0,0,3.7,2.44,18.18,18.18,0,0,0,4.31,1.15,23.72,23.72,0,0,0,12.88-1.33,12.6,12.6,0,0,0,5.29-3.33,15.82,15.82,0,0,0,1.87-5.44,5.09,5.09,0,0,1,1.84.31A6.94,6.94,0,0,1,62.75,47,7.24,7.24,0,0,1,64.25,51.62Z"
          />
          <path
            className="cls-4"
            d="M57.78,44.47a15.82,15.82,0,0,1-1.87,5.44,12.6,12.6,0,0,1-5.29,3.33,23.72,23.72,0,0,1-12.88,1.33,18.18,18.18,0,0,1-4.31-1.15A7.78,7.78,0,0,1,29.73,51a5.61,5.61,0,0,1-.86-1.66H29a54.38,54.38,0,0,0,12.85-.41l.3-.05.51-.08c.67-.11,1.33-.23,2-.37a55.57,55.57,0,0,0,6.11-1.61c.52-.17,1-.34,1.52-.52l1.46-.55,1.32-.54.66-.28a4.29,4.29,0,0,1,.5-.19,5.36,5.36,0,0,1,.54-.14,4.85,4.85,0,0,1,.55-.09A3.71,3.71,0,0,1,57.78,44.47Z"
          />
          <path
            className="cls-7"
            d="M57.78,44.47c0,.31-.1.63-.18,1l-1.55.42c-1.09.42-2.25.82-3.48,1.21s-2.15.65-3.16.92l-1.88.46c-1.06.25-1.59.38-2,.46a27.48,27.48,0,0,1-2.83.37c-.6.05-1,.07-1.54.08a25.35,25.35,0,0,1-3.19,0s.55,0,1.91-.18c.65-.07,1.31-.16,2-.26l.3-.05.51-.08c.67-.11,1.33-.23,2-.37a55.57,55.57,0,0,0,6.11-1.61c.52-.17,1-.34,1.52-.52l1.46-.55,1.32-.54.66-.28a4.29,4.29,0,0,1,.5-.19,5.36,5.36,0,0,1,.54-.14l.31-.06.24,0C57.43,44.49,57.59,44.47,57.78,44.47Z"
          />
        </g>
      </g>
    </StyledAvatar>
  );
}
