import React from 'react';
import SVG from '../SVG';

export default function Options(props) {
  return (
    <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 5" {...props}>
      <g>
        <circle cx="2.5" cy="2.5" r="2.5"/>
        <circle cx="10.5" cy="2.5" r="2.5"/>
        <circle cx="18.5" cy="2.5" r="2.5"/>
      </g>
    </SVG>
  );
}
