interface IProps {
  width?: string | number;
  height?: string | number;
  fill?: string;
}

function ICCalendar(props: IProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width ?? '20'}
      height={props.height ?? '20'}
      viewBox="0 0 20 20"
      fill="none"
    >
      <g clipPath="url(#clip0_584_967)">
        <path
          d="M17.5 1.66667H15V0H13.3333V1.66667H6.66667V0H5V1.66667H2.5C1.83696 1.66667 1.20107 1.93006 0.732233 2.3989C0.263392 2.86774 0 3.50363 0 4.16667L0 20H20V4.16667C20 3.50363 19.7366 2.86774 19.2678 2.3989C18.7989 1.93006 18.163 1.66667 17.5 1.66667ZM1.66667 4.16667C1.66667 3.94565 1.75446 3.73369 1.91074 3.57741C2.06702 3.42113 2.27899 3.33333 2.5 3.33333H17.5C17.721 3.33333 17.933 3.42113 18.0893 3.57741C18.2455 3.73369 18.3333 3.94565 18.3333 4.16667V6.66667H1.66667V4.16667ZM1.66667 18.3333V8.33333H18.3333V18.3333H1.66667Z"
          fill={props.fill ?? 'white'}
        />
        <path d="M14.1667 10.8335H12.5V12.5002H14.1667V10.8335Z" fill="white" />
        <path
          d="M10.8334 10.8335H9.16675V12.5002H10.8334V10.8335Z"
          fill={props.fill ?? 'white'}
        />
        <path
          d="M7.49992 10.8335H5.83325V12.5002H7.49992V10.8335Z"
          fill={props.fill ?? 'white'}
        />
        <path d="M14.1667 14.1665H12.5V15.8332H14.1667V14.1665Z" fill="white" />
        <path
          d="M10.8334 14.1665H9.16675V15.8332H10.8334V14.1665Z"
          fill={props.fill ?? 'white'}
        />
        <path
          d="M7.49992 14.1665H5.83325V15.8332H7.49992V14.1665Z"
          fill={props.fill ?? 'white'}
        />
      </g>
      <defs>
        <clipPath id="clip0_584_967">
          <rect width="20" height="20" fill={props.fill ?? 'white'} />
        </clipPath>
      </defs>
    </svg>
  );
}

export default ICCalendar;
