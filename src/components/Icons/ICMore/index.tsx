interface IProps {
  width?: string | number;
  height?: string | number;
}

function ICMore(props: IProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width ?? 25}
      height={props.height ?? 24}
      viewBox="0 0 25 24"
      fill="none"
    >
      <circle cx="12.5049" cy="12" r="12" fill="#55C3C4" />
      <rect x="11.5049" y="6" width="2" height="12" rx="1" fill="white" />
      <rect
        x="6.50488"
        y="13"
        width="2"
        height="12"
        rx="1"
        transform="rotate(-90 6.50488 13)"
        fill="white"
      />
    </svg>
  );
}

export default ICMore;
