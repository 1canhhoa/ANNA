interface IProps {
  width?: string | number;
  height?: string | number;
  stroke?: string;
}

function ICArrowLeft2(props: IProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width ?? '24'}
      height={props.height ?? '24'}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M19 12H5M5 12L11 18M5 12L11 6"
        stroke={props.stroke ?? 'white'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ICArrowLeft2;
