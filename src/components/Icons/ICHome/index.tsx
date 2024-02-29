interface IProps {
  width?: string | number;
  height?: string | number;
  stroke?: string;
}

export function ICHome(props: IProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width ?? '20'}
      height={props.height ?? '21'}
      viewBox="0 0 20 21"
      fill="none"
    >
      <path
        d="M9.9999 11.6917C11.4358 11.6917 12.5999 10.5276 12.5999 9.0917C12.5999 7.65576 11.4358 6.4917 9.9999 6.4917C8.56396 6.4917 7.3999 7.65576 7.3999 9.0917C7.3999 10.5276 8.56396 11.6917 9.9999 11.6917Z"
        stroke={props.stroke ?? '#55D5D2'}
        strokeWidth="1.5"
      />
      <path
        d="M3.01675 7.57508C4.65842 0.358417 15.3501 0.36675 16.9834 7.58342C17.9417 11.8167 15.3084 15.4001 13.0001 17.6168C11.3251 19.2334 8.67508 19.2334 6.99175 17.6168C4.69175 15.4001 2.05842 11.8084 3.01675 7.57508Z"
        stroke={props.stroke ?? '#55D5D2'}
        strokeWidth="1.5"
      />
    </svg>
  );
}
