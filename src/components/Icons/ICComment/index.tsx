interface IProps {
  width?: string | number;
  height?: string | number;
}

function ICComment(props: IProps) {
  return (
    <svg
      width={props.width ?? '20'}
      height={props.height ?? '20'}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_512_1180)">
        <path
          d="M20.0008 9.42417V20H10.0158C8.06492 19.9991 6.15695 19.4276 4.52686 18.3558C2.89676 17.2841 1.61575 15.759 0.841594 13.9683C0.0674388 12.1776 -0.166044 10.1996 0.169904 8.27794C0.505852 6.35624 1.39656 4.57477 2.73231 3.15295C4.06807 1.73114 5.79053 0.731077 7.68754 0.275949C9.58456 -0.179179 11.5733 -0.0694964 13.4087 0.591488C15.2442 1.25247 16.8462 2.43589 18.0175 3.99598C19.1888 5.55606 19.8782 7.42468 20.0008 9.37167V9.42417ZM10.8341 5.83334H5.83409V7.5H10.8341V5.83334ZM14.1674 9.16667H5.83409V10.8333H14.1674V9.16667ZM14.1674 12.5H5.83409V14.1667H14.1674V12.5Z"
          fill="black"
          fillOpacity="0.2"
        />
      </g>
      <defs>
        <clipPath id="clip0_512_1180">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(0.000976562)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default ICComment;
