interface IProps {
  width?: string | number;
  height?: string | number;
  stroke?: string;
  strokeWidth?: string | number;
}

function ICShopeeFooter(props: IProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width ?? '44'}
      height={props.height ?? '44'}
      viewBox="0 0 44 44"
      fill="none"
    >
      <path
        d="M4.125 22.0002C4.125 27.1409 4.65266 30.1556 5.05484 31.7059C5.1612 32.1276 5.36605 32.5181 5.65258 32.8452C5.9391 33.1724 6.29914 33.4269 6.70312 33.588C12.4644 35.8103 22 35.7502 22 35.7502C22 35.7502 31.5356 35.8103 37.2969 33.588C37.7021 33.4278 38.0636 33.1737 38.3513 32.8465C38.6391 32.5193 38.845 32.1283 38.952 31.7059C39.3542 30.1591 39.8819 27.1409 39.8819 22.0002C39.8819 16.8594 39.3542 13.8447 38.952 12.2944C38.8462 11.8704 38.6409 11.4778 38.353 11.149C38.0652 10.8202 37.7031 10.5647 37.2969 10.4038C31.5356 8.19 22 8.25016 22 8.25016C22 8.25016 12.4644 8.19 6.70312 10.4123C6.29687 10.5733 5.93482 10.8288 5.64698 11.1576C5.35914 11.4863 5.1538 11.879 5.04797 12.303C4.65266 13.843 4.125 16.8594 4.125 22.0002Z"
        stroke={props.stroke ?? 'white'}
        strokeWidth={props.strokeWidth ?? '2'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27.5 22L19.25 16.5V27.5L27.5 22Z"
        stroke={props.stroke ?? 'white'}
        strokeWidth={props.strokeWidth ?? '2'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ICShopeeFooter;
