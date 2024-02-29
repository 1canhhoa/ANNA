interface IProps {
  width?: string | number;
  height?: string | number;
  stroke?: string;
  strokeWidth?: string | number;
}

function ICTiktokFooter(props: IProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width ?? '44'}
      height={props.height ?? '44'}
      viewBox="0 0 44 44"
      fill="none"
    >
      <g clipPath="url(#clip0_1529_1095)">
        <path
          d="M28.875 17.5312C31.6782 19.549 35.0462 20.6315 38.5 20.625V13.75C35.9473 13.75 33.4991 12.7359 31.6941 10.9309C29.8891 9.12587 28.875 6.67771 28.875 4.125H22V26.8125C21.9996 27.6736 21.7682 28.5189 21.3299 29.2602C20.8915 30.0014 20.2623 30.6114 19.5079 31.0266C18.7534 31.4418 17.9014 31.647 17.0406 31.6207C16.1799 31.5945 15.342 31.3377 14.6143 30.8772C13.8865 30.4168 13.2957 29.7695 12.9034 29.0029C12.5111 28.2363 12.3317 27.3785 12.3838 26.5189C12.436 25.6593 12.7179 24.8295 13.2 24.116C13.6822 23.4025 14.3469 22.8314 15.125 22.4623V15.125C9.65422 16.0995 5.5 21.0616 5.5 26.8125C5.5 29.9122 6.73136 32.885 8.92319 35.0768C11.115 37.2686 14.0878 38.5 17.1875 38.5C20.2872 38.5 23.26 37.2686 25.4518 35.0768C27.6436 32.885 28.875 29.9122 28.875 26.8125V17.5312Z"
          stroke={props.stroke ?? 'white'}
          strokeWidth={props.strokeWidth ?? '2'}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1529_1095">
          <rect width="44" height="44" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default ICTiktokFooter;
