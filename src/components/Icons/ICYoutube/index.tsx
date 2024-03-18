interface IProps {
  width?: string | number;
  height?: string | number;
  fill?: string;
}

function ICYoutube(props: IProps) {
  return (
    <svg
      width={props.width ?? 100}
      height={props.height ?? 100}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M62.5 50L43.75 37.5V62.5L62.5 50Z"
        stroke={props.fill ?? '#55D5D2'}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.375 50.0001C9.375 61.6837 10.5742 68.5353 11.4883 72.0587C11.73 73.0171 12.1956 73.9045 12.8468 74.648C13.498 75.3916 14.3162 75.9701 15.2344 76.3361C28.3281 81.3868 50 81.2501 50 81.2501C50 81.2501 71.6719 81.3868 84.7656 76.3361C85.6867 75.9721 86.5081 75.3945 87.1621 74.6508C87.8161 73.9072 88.2841 73.0187 88.5273 72.0587C89.4414 68.5431 90.6406 61.6837 90.6406 50.0001C90.6406 38.3165 89.4414 31.465 88.5273 27.9415C88.2868 26.9779 87.8201 26.0856 87.166 25.3383C86.5118 24.5911 85.6889 24.0105 84.7656 23.6446C71.6719 18.6134 50 18.7501 50 18.7501C50 18.7501 28.3281 18.6134 15.2344 23.6642C14.3111 24.03 13.4882 24.6106 12.834 25.3578C12.1799 26.1051 11.7132 26.9975 11.4727 27.9611C10.5742 31.4611 9.375 38.3165 9.375 50.0001Z"
        stroke={props.fill ?? '#55D5D2'}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ICYoutube;
