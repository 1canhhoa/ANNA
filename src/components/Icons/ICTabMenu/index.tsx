interface IProps {
  width?: string | number;
  height?: string | number;
  stroke?: string;
}

function ICTabMenu(props: IProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width ?? '32'}
      height={props.height ?? '32'}
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M4 20H28M4 12H28"
        stroke={props.stroke ?? 'white'}
        // className="transition-all duration-300"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ICTabMenu;
