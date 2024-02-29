interface IProps {
  width: string | number;
  height: string | number;
  fill?: string;
}

export default function ICIncreaseIcon(props: IProps) {
  return (
    <svg
      className=""
      xmlns="http://www.w3.org/2000/svg"
      width={props.width ?? '24'}
      height={props.height ?? '25'}
      viewBox="0 0 24 25"
      fill={props.fill ?? 'none'}
    >
      <path
        d="M6 12.5H12M12 12.5H18M12 12.5V18.5M12 12.5V6.5"
        stroke={props.fill ?? '#262626'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
