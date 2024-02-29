interface IProps {
  width?: string | number;
  height?: string | number;
  stroke?: string;
  strokeWidth?: string | number;
}

function ICInstagramFooter(props: IProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width ?? '44'}
      height={props.height ?? '44'}
      viewBox="0 0 44 44"
      fill="none"
    >
      <g clipPath="url(#clip0_1529_1090)">
        <path
          d="M22 28.875C25.797 28.875 28.875 25.797 28.875 22C28.875 18.203 25.797 15.125 22 15.125C18.203 15.125 15.125 18.203 15.125 22C15.125 25.797 18.203 28.875 22 28.875Z"
          stroke={props.stroke ?? 'white'}
          strokeWidth={props.strokeWidth ?? '2'}
          strokeMiterlimit="10"
        />
        <path
          d="M30.25 5.5H13.75C9.19365 5.5 5.5 9.19365 5.5 13.75V30.25C5.5 34.8063 9.19365 38.5 13.75 38.5H30.25C34.8063 38.5 38.5 34.8063 38.5 30.25V13.75C38.5 9.19365 34.8063 5.5 30.25 5.5Z"
          stroke={props.stroke ?? 'white'}
          strokeWidth={props.strokeWidth ?? '2'}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M30.9375 15.125C32.0766 15.125 33 14.2016 33 13.0625C33 11.9234 32.0766 11 30.9375 11C29.7984 11 28.875 11.9234 28.875 13.0625C28.875 14.2016 29.7984 15.125 30.9375 15.125Z"
          fill={props.stroke ?? 'white'}
        />
      </g>
      <defs>
        <clipPath id="clip0_1529_1090">
          <rect width="44" height="44" fill={props.stroke ?? 'white'} />
        </clipPath>
      </defs>
    </svg>
  );
}

export default ICInstagramFooter;
