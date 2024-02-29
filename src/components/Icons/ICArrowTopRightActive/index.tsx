interface IProps {
  width?: string | number;
  height?: string | number;
  stroke?: string;
  fill?: string;
  className?: any;
}
export function ICArrowTopRightActive(props: IProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props?.width ?? '14'}
      height={props?.height ?? '14'}
      viewBox="0 0 13 12"
      fill="currentColor"
      {...props}
    >
      <path
        d="M7.87444 3.74065L8.49885 3.1162L7.61578 3.1162L3.29226 3.1162L4.54303 1.8658L10.6342 1.8658L10.6342 7.95711L9.38377 9.20769L9.38377 4.88418L9.38377 4.00115L8.75933 4.62551C8.00688 5.37786 5.08067 8.26616 3.74761 9.58141C3.5209 9.80509 3.15669 9.80441 2.92878 9.57783C2.70007 9.35045 2.69815 8.9847 2.92239 8.757C4.24935 7.40956 7.16793 4.44721 7.87444 3.74065ZM10.6918 7.89948L10.6916 7.89967C10.6917 7.8996 10.6918 7.89953 10.6918 7.89946L10.6918 7.89948Z"
        fill={props.fill ?? '#55D5D2'}
        stroke={props.stroke ?? '#55D5D2'}
        strokeWidth="0.731595"
      />
    </svg>
  );
}
