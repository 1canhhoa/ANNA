import React from 'react';

interface IProps {
  width?: string;
  height?: string;
}
function ICLocationLight(props: IProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width ?? '20'}
      height={props.height ?? '20'}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M4.16663 8.26904C4.16663 12.3122 7.70369 15.6558 9.26928 16.9377C9.49335 17.1211 9.60672 17.214 9.77388 17.261C9.90405 17.2977 10.0956 17.2977 10.2258 17.261C10.3933 17.2139 10.5058 17.122 10.7308 16.9378C12.2963 15.6559 15.8332 12.3126 15.8332 8.26941C15.8332 6.73932 15.2187 5.27171 14.1247 4.18977C13.0308 3.10783 11.5471 2.5 10 2.5C8.45293 2.5 6.96913 3.10792 5.87517 4.18986C4.78121 5.2718 4.16663 6.73895 4.16663 8.26904Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.33329 7.5C8.33329 8.42047 9.07948 9.16667 9.99996 9.16667C10.9204 9.16667 11.6666 8.42047 11.6666 7.5C11.6666 6.57953 10.9204 5.83333 9.99996 5.83333C9.07948 5.83333 8.33329 6.57953 8.33329 7.5Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ICLocationLight;
