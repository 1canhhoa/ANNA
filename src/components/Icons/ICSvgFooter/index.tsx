import React from 'react';

interface IProps {
  width?: string | number;
  height?: string | number;
  stroke?: string;
}
function ICSvgFooter(props: IProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width ?? '484'}
      height={props.height ?? '391'}
      viewBox="0 0 484 391"
      fill="none"
    >
      <path
        d="M27 405L202.385 66L377.769 405L507 173.053"
        stroke={props.stroke ?? 'white'}
        strokeOpacity="0.15"
        strokeWidth="60"
      />
    </svg>
  );
}

export default ICSvgFooter;
