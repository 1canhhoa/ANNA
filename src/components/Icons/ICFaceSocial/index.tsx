import React from 'react';

interface IProps {
  width?: string | number;
  height?: string | number;
  stroke?: string;
  strokeWidth?: string;
}
function ICFaceSocial(props: IProps) {
  return (
    <svg
      width={props.width ?? '53'}
      height={props.height ?? '100'}
      viewBox="0 0 53 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.5 53.4996V36.5002H15.1069H16.6069V35.0002V23.4952C16.6069 16.2316 18.9778 10.7776 22.8306 7.13385C26.6965 3.47759 32.2072 1.50031 38.7391 1.50032L38.7424 1.50031C42.8462 1.4914 46.9458 1.67506 51.0267 2.05125V15.0903H43.1201C39.2551 15.0903 36.6408 15.9224 35.1695 17.9908C34.4656 18.9805 34.1245 20.1242 33.9488 21.2847C33.7742 22.4374 33.7494 23.7082 33.7494 25.0002V35.0002V36.5002H35.2494H51.3165L49.3521 53.4806L35.2489 53.4851L33.7494 53.4856V54.9851V98.5H16.6069V54.9951V53.4946L15.1064 53.4951L1.5 53.4996Z"
        stroke="white"
        strokeWidth="3"
      />
    </svg>
  );
}

export default ICFaceSocial;
