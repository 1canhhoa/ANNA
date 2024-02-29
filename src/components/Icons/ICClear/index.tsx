import React from 'react';

interface IProps {
  width?: string;
  height?: string;
  stroke?: string;
  strokeWidth?: number;
}
function ICClear(props: IProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width ?? '24'}
      height={props.height ?? '24'}
      viewBox="0 0 24 24"
      fill="none"
      stroke={props.stroke ?? 'currentColor'}
      strokeWidth={props.strokeWidth ?? '2'}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-x"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export default ICClear;
