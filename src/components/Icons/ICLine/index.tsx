interface IProps {
  width?: string | number;
  height?: string | number;
  fill?: string;
  className?: string;
}

function ICLine(props: IProps) {
  return (
    <svg
      width={props.width ?? 21}
      height={props.height ?? 34}
      className={props?.className}
      viewBox="0 0 21 34"
      fill={props.fill ?? 'none'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2.28711"
        y="33.2131"
        width="2.64102"
        height="35.9178"
        transform="rotate(-150 2.28711 33.2131)"
        fill="#C5C5C5"
      />
    </svg>
  );
}

export default ICLine;
