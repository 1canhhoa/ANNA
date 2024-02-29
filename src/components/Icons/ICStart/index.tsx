import React from 'react';

interface IProps {
  width?: string | number;
  height?: string | number;
  fill?: string;
}
function ICStart(props: IProps) {
  return (
    <svg
      width={props.width ?? '16'}
      height={props.height ?? '16'}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 16C8 16 8 8 16 8C8 8 8 0 8 0C8 0 8 8 0 8C8 8 8 16 8 16Z"
        fill={props.fill ?? '#414141'}
      />
    </svg>
  );
}

export default ICStart;
