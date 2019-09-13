import React from 'react';
import styled from 'styled-components';
import chroma from 'chroma-js';

const calculateColors = (base, index) => {
  switch (index) {
    case 1:
      return base;
    case 2:
      return chroma(base)
        .set('hsl.h', '+28')
        .set('hsl.l', '*1.1')
        .hex();
    case 3:
      return base;
    case 4:
      return chroma(base)
        .set('hsl.h', '+31')
        .set('hsl.l', '*1.02')
        .hex();
    case 5:
      return chroma(base)
        .set('hsl.s', '*0.6')
        .set('hsl.l', '*0.85')
        .hex();
    case 6:
      return chroma(base)
        .set('hsl.h', '-20')
        .set('hsl.s', '*0.44')
        .set('hsl.l', '*0.715')
        .hex();
    default:
      return base;
  }
};

const StyledAvatar = styled.svg`
  ${props => (props.svgHeight ? `height: ${props.svgHeight};` : null)}
  ${props => (props.svgWidth ? `width: ${props.svgWidth};` : null)}

  #${props => props.Color.replace('#', '')}-linear-gradient {
    --color-stop-1: ${props => calculateColors(props.Color, 1)};
    --color-stop-2: ${props => calculateColors(props.Color, 2)};
  }
  #${props => props.Color.replace('#', '')}-linear-gradient-2 {
    --color-stop-1: ${props => calculateColors(props.Color, 3)};
    --color-stop-2: ${props => calculateColors(props.Color, 4)};
  }
  #${props => props.Color.replace('#', '')}-linear-gradient-3 {
    --color-stop-1: ${props => calculateColors(props.Color, 5)};
    --color-stop-2: ${props => calculateColors(props.Color, 6)};
  }
  .cls-1 {
    fill: url(#${props => props.Color.replace('#', '')}-linear-gradient);
  }

  .cls-2 {
    fill: #000;
  }

  .cls-3 {
    fill: #fff;
  }

  .cls-4 {
    opacity: 0.37;
    fill: url(#${props => props.Color.replace('#', '')}-linear-gradient-2);
  }

  .cls-5 {
    opacity: 0.81;
    fill: url(#${props => props.Color.replace('#', '')}-linear-gradient-3);
  }

  .cls-6 {
    opacity: 0.12;
  }
`;

export default function DefaultAvatar(props) {
  let { Color } = props;
  if (!Color) Color = '#4265ED';
  return (
    <StyledAvatar
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 82.63 84.83"
      {...props}
      Color={Color}>
      <defs>
        <linearGradient
          id={`${Color.replace('#', '')}-linear-gradient`}
          x1="20.24"
          y1="5.91"
          x2="62.39"
          y2="78.92"
          gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="var(--color-stop-1)" />
          <stop offset="1" stopColor="var(--color-stop-2)" />
        </linearGradient>
        <linearGradient
          id={`${Color.replace('#', '')}-linear-gradient-2`}
          x1="43.2"
          y1="68.44"
          x2="43.2"
          y2="59.16"
          gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="var(--color-stop-1)" />
          <stop offset="1" stopColor="var(--color-stop-2)" />
        </linearGradient>
        <linearGradient
          id={`${Color.replace('#', '')}-linear-gradient-3`}
          x1="42.91"
          y1="65.02"
          x2="42.91"
          y2="44.47"
          gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="var(--color-stop-1)" />
          <stop offset="1" stopColor="var(--color-stop-2)" />
        </linearGradient>
      </defs>
      <g>
        <ellipse dataName="Face" class="cls-1" cx="41.32" cy="42.42" rx="41.32" ry="42.42" />
        <path
          class="cls-2"
          d="M70.11,33.33A7.33,7.33,0,0,0,59.8,29.69a5.09,5.09,0,0,0-1.38,1,8.47,8.47,0,0,0-2.18,4,1.26,1.26,0,0,0,2.16,1.1,7.11,7.11,0,0,1,9.71-.63,1.4,1.4,0,0,0,2-1.84Z"
        />
        <g dataName="Left Eye">
          <circle class="cls-2" cx="20.22" cy="33.31" r="7.47" />
          <circle class="cls-3" cx="17.13" cy="31.17" r="2.83" />
        </g>
        <g dataName="Mouth">
          <path
            class="cls-4"
            d="M58.78,62.68c-4.94,4.14-11.69,5.39-13.37,5.65a4.78,4.78,0,0,1-.53.06c-2.16.11-8.72.27-14.25-1.93a22.43,22.43,0,0,1-3-1.44A26.51,26.51,0,0,1,43,59.17a34,34,0,0,1,15.8,3.51Z"
          />
          <path
            class="cls-5"
            d="M64.25,51.62a14.45,14.45,0,0,1-1,4.93,15.16,15.16,0,0,1-4.51,6.13A33.86,33.86,0,0,0,43,59.17a26.94,26.94,0,0,0-8.77,1.95,26.63,26.63,0,0,0-6.6,3.9,18.43,18.43,0,0,1-2.1-1.44A18,18,0,0,1,23,61.17a5.38,5.38,0,0,1-1.24-2.53,8.86,8.86,0,0,1,.64-5.52,6.82,6.82,0,0,1,2.08-2.58,6.63,6.63,0,0,1,2.92-1.21,4.83,4.83,0,0,1,1.26,0l.22,0A5.61,5.61,0,0,0,29.72,51a7.78,7.78,0,0,0,3.7,2.44,18.18,18.18,0,0,0,4.31,1.15,23.72,23.72,0,0,0,12.88-1.33,12.6,12.6,0,0,0,5.29-3.33,15.82,15.82,0,0,0,1.87-5.44,5.09,5.09,0,0,1,1.84.31A6.94,6.94,0,0,1,62.75,47,7.24,7.24,0,0,1,64.25,51.62Z"
          />
          <path
            class="cls-3"
            d="M57.78,44.47a15.82,15.82,0,0,1-1.87,5.44,12.6,12.6,0,0,1-5.29,3.33,23.72,23.72,0,0,1-12.88,1.33,18.18,18.18,0,0,1-4.31-1.15A7.78,7.78,0,0,1,29.73,51a5.61,5.61,0,0,1-.86-1.66H29a54.38,54.38,0,0,0,12.85-.41l.3-.05.51-.08c.67-.11,1.33-.23,2-.37a55.57,55.57,0,0,0,6.11-1.61c.52-.17,1-.34,1.52-.52l1.46-.55,1.32-.54.66-.28a4.29,4.29,0,0,1,.5-.19,5.36,5.36,0,0,1,.54-.14,4.85,4.85,0,0,1,.55-.09A3.71,3.71,0,0,1,57.78,44.47Z"
          />
          <path
            class="cls-6"
            d="M57.78,44.47c0,.31-.1.63-.18,1l-1.55.42-6.5,1.87c-1.15.27-2.33.54-3.55.79-.94.2-1.87.37-2.77.54l-1.61.16c-1.28.1-2.5.14-3.65.13.74-.06,1.39-.12,1.91-.18s1.31-.16,2-.26l.3-.05.51-.08c.67-.11,1.33-.23,2-.37a55.57,55.57,0,0,0,6.11-1.61c.52-.17,1-.34,1.52-.52l1.46-.55,1.32-.54.66-.28a4.29,4.29,0,0,1,.5-.19,5.36,5.36,0,0,1,.54-.14,4.85,4.85,0,0,1,.55-.09A3.71,3.71,0,0,1,57.78,44.47Z"
          />
        </g>
      </g>
    </StyledAvatar>
  );
}
