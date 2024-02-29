interface IProps {
  width?: string | number;
  height?: string | number;
  stroke?: string;
}

export function ICHistoryCart(props: IProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width ?? '20'}
      height={props.height ?? '21'}
      viewBox="0 0 20 21"
      fill="none"
    >
      <path
        d="M19.1666 15.425C19.1833 16.05 19.0166 16.6416 18.7166 17.15C18.55 17.45 18.325 17.725 18.075 17.95C17.5 18.4833 16.7416 18.8083 15.9 18.8333C14.6833 18.8583 13.6083 18.2333 13.0166 17.275C12.7 16.7833 12.5083 16.1917 12.5 15.5667C12.475 14.5167 12.9416 13.5666 13.6916 12.9416C14.2583 12.475 14.975 12.1833 15.7583 12.1666C17.6 12.125 19.125 13.5833 19.1666 15.425Z"
        stroke={props.stroke ?? '#55D5D2'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5332 15.525L15.3749 16.325L17.1165 14.6416"
        stroke={props.stroke ?? '#55D5D2'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.6416 6.7002L9.99992 10.9585L17.3082 6.72517"
        stroke={props.stroke ?? '#55D5D2'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 18.5085V10.9502"
        stroke={props.stroke ?? '#55D5D2'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.0083 8.14175V12.8584C18.0083 12.9001 18.0084 12.9334 18 12.9751C17.4167 12.4667 16.6667 12.1668 15.8334 12.1668C15.05 12.1668 14.325 12.4418 13.75 12.9001C12.9834 13.5084 12.5 14.4501 12.5 15.5001C12.5 16.1251 12.675 16.7168 12.9833 17.2168C13.0583 17.3501 13.15 17.4751 13.25 17.5918L11.725 18.4334C10.775 18.9668 9.22501 18.9668 8.27501 18.4334L3.82502 15.9668C2.81668 15.4084 1.9917 14.0084 1.9917 12.8584V8.14175C1.9917 6.99175 2.81668 5.59177 3.82502 5.03343L8.27501 2.56675C9.22501 2.03341 10.775 2.03341 11.725 2.56675L16.175 5.03343C17.1834 5.59177 18.0083 6.99175 18.0083 8.14175Z"
        stroke={props.stroke ?? '#55D5D2'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
