interface IProps {
  width?: string | number;
  height?: string | number;
  stroke?: string;
}

export function ICUser2(props: IProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width ?? '20'}
      height={props.height ?? '21'}
      viewBox="0 0 20 21"
      fill="none"
    >
      <path
        d="M10.0002 10.5001C12.3013 10.5001 14.1668 8.6346 14.1668 6.33341C14.1668 4.03223 12.3013 2.16675 10.0002 2.16675C7.69898 2.16675 5.8335 4.03223 5.8335 6.33341C5.8335 8.6346 7.69898 10.5001 10.0002 10.5001Z"
        stroke={props.stroke ?? '#55D5D2'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.1585 18.8333C17.1585 15.6083 13.9501 13 10.0001 13C6.05013 13 2.8418 15.6083 2.8418 18.8333"
        stroke={props.stroke ?? '#55D5D2'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
