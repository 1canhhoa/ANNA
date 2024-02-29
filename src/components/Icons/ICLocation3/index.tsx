interface IProps {
  width?: string | number;
  height?: string | number;
  fill?: string;
}

function ICLocation3(props: IProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width ?? '24'}
      height={props.height ?? '24'}
      viewBox="0 0 24 24"
      fill="none"
    >
      <rect width="26" height="26" rx="13" fill="white" />
      <path
        d="M13 19.5369C13.5171 19.5369 13.9868 19.2837 14.2566 18.8595C16.1468 15.8878 18.4 11.9712 18.4 10.189C18.4 7.32778 15.9776 5 13 5C10.0224 5 7.59998 7.32778 7.59998 10.189C7.59998 11.9712 9.85319 15.8878 11.7434 18.8595C12.0132 19.2837 12.4829 19.5369 13 19.5369ZM10.8295 9.83274C10.8295 8.68273 11.8032 7.7471 13 7.7471C14.1968 7.7471 15.1705 8.68273 15.1705 9.83274C15.1705 10.9828 14.1968 11.9184 13 11.9184C11.8032 11.9184 10.8295 10.9828 10.8295 9.83274Z"
        fill={props.fill ?? '#F58F5D'}
      />
    </svg>
  );
}

export default ICLocation3;
