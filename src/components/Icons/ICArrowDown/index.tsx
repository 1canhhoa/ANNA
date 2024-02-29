interface IProps {
  width?: string | number;
  height?: string | number;
  fill?: string;
  stroke?: string;
}

function ICArrowDown(props: IProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width ?? '11'}
      height={props.height ?? '8'}
      viewBox="0 0 11 8"
      fill={props.fill ?? 'none'}
    >
      <path
        d="M1 1L5.5 6L10 1"
        stroke={props.stroke ?? 'white'}
        strokeWidth="2"
      />
    </svg>
  );
}

export default ICArrowDown;
