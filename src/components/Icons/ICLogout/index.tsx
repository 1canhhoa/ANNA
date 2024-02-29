interface IProps {
  width?: string | number;
  height?: string | number;
  stroke?: string;
}

export function ICLogout(props: IProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width ?? '20'}
      height={props.height ?? '21'}
      viewBox="0 0 20 21"
      fill="none"
    >
      <path
        d="M7.4165 6.79995C7.67484 3.79995 9.2165 2.57495 12.5915 2.57495H12.6998C16.4248 2.57495 17.9165 4.06662 17.9165 7.79162V13.225C17.9165 16.95 16.4248 18.4416 12.6998 18.4416H12.5915C9.2415 18.4416 7.69984 17.2333 7.42484 14.2833"
        stroke={props.stroke ?? '55D5D2'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.6665 10.5H12.3998"
        stroke={props.stroke ?? '55D5D2'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5415 7.70825L13.3332 10.4999L10.5415 13.2916"
        stroke={props.stroke ?? '55D5D2'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
