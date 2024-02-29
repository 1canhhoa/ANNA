interface IProps {
  width?: string | number;
  height?: string | number;
  stroke?: string;
  strokeWidth?: string;
}

function ICTikTok(props: IProps) {
  return (
    <svg
      width={props.width ?? '82'}
      height={props.height ?? '104'}
      viewBox="0 0 82 104"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M44.7123 1.9375V73.3661C44.7123 81.3423 38.4241 87.6518 30.4749 87.6518C22.5256 87.6518 16.2374 81.3423 16.2374 73.3661C16.2374 65.3899 22.5256 59.0804 30.4749 59.0804V44.7946C14.8327 44.7946 2 57.6708 2 73.3661C2 89.0613 14.8327 101.938 30.4749 101.938C46.1171 101.938 58.9497 89.0613 58.9497 73.3661V29.7137C64.8428 34.293 71.8295 37.5383 79.7914 37.6518L80 23.3661C68.2807 23.199 58.9497 13.7534 58.9497 1.9375H44.7123Z"
        stroke="white"
        strokeWidth="3"
      />
    </svg>
  );
}

export default ICTikTok;
