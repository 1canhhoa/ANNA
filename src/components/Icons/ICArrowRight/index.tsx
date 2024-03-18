interface IProps {
  width?: string | number;
  height?: string | number;
  fill?: string;
  stroke?: string;
}

function ICArrowRight(props: IProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width ?? '24'}
      height={props.height ?? '24'}
      viewBox="0 0 24 25"
      fill={props.fill ?? 'none'}
    >
      <path
        d="M9 5.5L16 12.5L9 19.5"
        stroke={props.stroke ?? '#262626'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ICArrowRight;
