interface IProps {
  width?: string | number;
  height?: string | number;
}

function ICDots(props: IProps) {
  return (
    <svg
      width={props.width ?? '18'}
      height={props.height ?? '18'}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="5" cy="5" r="5" fill="#81C8C2" />
    </svg>
  );
}

export default ICDots;
