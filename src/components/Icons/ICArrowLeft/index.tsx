interface IProps {
  width?: string | number;
  height?: string | number;
  fill?: string;
  stroke?: string;
}

function ICArrowLeft(props: IProps) {
  return (
    <div className="rotate-180">
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
    </div>
  );
}

export default ICArrowLeft;
