interface IProps {
  width?: string | number;
  height?: string | number;
  stroke?: string;
}

export function ICClose(props: IProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width ?? '24'}
      height={props.height ?? '24'}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18"
        stroke={props.stroke ?? '#EEFBFB'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
