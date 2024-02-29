interface IProps {
  width?: string | number;
  height?: string | number;
  stroke?: string;
  strokeWidth?: string | number;
}

function ICFacebookFooter(props: IProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props?.width ?? '44'}
      height={props.height ?? '44'}
      viewBox="0 0 44 44"
      fill="none"
    >
      <g clipPath="url(#clip0_1529_1085)">
        <path
          d="M22 38.5C31.1127 38.5 38.5 31.1127 38.5 22C38.5 12.8873 31.1127 5.5 22 5.5C12.8873 5.5 5.5 12.8873 5.5 22C5.5 31.1127 12.8873 38.5 22 38.5Z"
          stroke={props?.stroke ?? 'white'}
          strokeWidth={props.strokeWidth ?? '2'}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28.875 15.125H26.125C25.031 15.125 23.9818 15.5596 23.2082 16.3332C22.4346 17.1068 22 18.156 22 19.25V38.5"
          stroke={props?.stroke ?? 'white'}
          strokeWidth={props.strokeWidth ?? '2'}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.5 24.75H27.5"
          stroke={props?.stroke ?? 'white'}
          strokeWidth={props.strokeWidth ?? '2'}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1529_1085">
          <rect width="44" height="44" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default ICFacebookFooter;
