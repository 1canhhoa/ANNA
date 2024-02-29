import React from 'react';

interface IProps {
  width?: string | number;
  height?: string | number;
}

function ICLovingFace(props: IProps) {
  return (
    <svg
      width={props.width ?? 53}
      height={props.height ?? 53}
      viewBox="0 0 53 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.614224"
        y="0.614224"
        width="51.5948"
        height="51.5948"
        rx="25.7974"
        stroke="#444444"
        strokeWidth="1.22845"
      />
      <g clipPath="url(#clip0_1_361)">
        <path
          d="M27.6416 22.7222V20.2592C27.6416 19.9177 27.7598 19.6254 27.9962 19.3824C28.2327 19.1393 28.5217 19.0178 28.8632 19.0178H30.1046V15.944H27.6416C26.9716 15.944 26.3542 16.1082 25.7894 16.4366C25.2245 16.765 24.7746 17.2116 24.4396 17.7765C24.1046 18.3413 23.9372 18.9587 23.9372 19.6287V22.7222H21.4741V25.7961H23.9372V35.668H27.6416V25.7961H30.1046L31.3263 22.7222H27.6416Z"
          fill="#444444"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_361">
          <rect
            width="9.85216"
            height="49.1379"
            fill="white"
            transform="matrix(1 0 0 -1 21.4739 50.3662)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default ICLovingFace;
