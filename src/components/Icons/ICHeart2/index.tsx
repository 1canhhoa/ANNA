import React from 'react';

interface IProps {
  width?: string | number;
  height?: string | number;
  stroke?: string;
  fill?: string;
}
function ICHeart2(props: IProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="62"
      height="62"
      viewBox="0 0 62 62"
      fill="none"
    >
      <circle cx="31" cy="31" r="31" fill="white" />
      <path
        d="M30.1245 24.4041L31 25.9898L31.8754 24.4041C32.3645 23.5184 33.1794 22.3324 34.3767 21.4147L33.7683 20.621L34.3767 21.4147C35.6088 20.4702 36.9878 20 38.5 20C42.7265 20 46 23.4114 46 28.138C46 30.6416 44.9999 32.7918 43.0908 35.0751C41.1563 37.3887 38.3686 39.7477 34.8949 42.6817L34.8949 42.6817L34.8939 42.6825C33.722 43.6724 32.3893 44.7981 31.0033 45.9995C31.0032 45.9995 31.0032 45.9995 31.0032 45.9995C31.0028 45.9997 31.0018 46 31 46C30.9982 46 30.9972 45.9997 30.9968 45.9995L30.9967 45.9994C29.6115 44.7988 28.2793 43.6735 27.1084 42.6845L27.1059 42.6823L27.1058 42.6823C23.6318 39.748 20.8439 37.3889 18.9093 35.0752C17.0001 32.7918 16 30.6416 16 28.138C16 23.4114 19.2735 20 23.5 20C25.0122 20 26.3912 20.4702 27.6233 21.4147L28.2317 20.621L27.6233 21.4147C28.8206 22.3324 29.6355 23.5183 30.1245 24.4041Z"
        stroke="#55D5D2"
        fill={props.fill ?? 'white'}
        strokeWidth="2"
      />
    </svg>
  );
}

export default ICHeart2;