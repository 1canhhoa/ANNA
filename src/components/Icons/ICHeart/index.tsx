import React from 'react';

interface IProps {
  width?: string | number;
  height?: string | number;
  stroke?: string;
}
function ICHeart(props: IProps) {
  return (
    <svg
      width={props.width ?? '189'}
      height={props.height ?? '192'}
      viewBox="0 0 189 192"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.2">
        <path
          d="M105.959 56.7399C151.514 27.688 190.601 63.4802 188.534 101.814C185.208 164.563 92.5465 195.121 28.8178 190.794C85.6608 186.282 173.707 155.428 174.767 101.276C175.682 75.7517 154.504 58.0837 134.964 60.2719C120.654 61.7363 106.581 73.0949 92.7464 82.973C93.012 64.6144 94.2341 44.845 82.7302 28.3779C63.9755 1.30278 10.5986 -5.69465 0.745018 77.3864C-3.06341 -24.4706 96.2918 -19.7612 105.959 56.7399Z"
          fill="#7BD7D6"
        />
        <path
          d="M105.959 56.7399C151.514 27.688 190.601 63.4802 188.534 101.814C185.208 164.563 92.5465 195.121 28.8178 190.794C85.6608 186.282 173.707 155.428 174.767 101.276C175.682 75.7517 154.504 58.0837 134.964 60.2719C120.654 61.7363 106.581 73.0949 92.7464 82.973C93.012 64.6144 94.2341 44.845 82.7302 28.3779C63.9755 1.30278 10.5986 -5.69465 0.745018 77.3864C-3.06341 -24.4706 96.2918 -19.7612 105.959 56.7399Z"
          fill="black"
          fillOpacity="0.16"
        />
      </g>
    </svg>
  );
}

export default ICHeart;
