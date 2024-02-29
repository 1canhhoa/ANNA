interface IProps {
  height: string | number;
  fill?: string;
}

export function ICProtected(props: IProps) {
  return (
    <svg
      height={props.height ?? '48'}
      viewBox="0 0 49 48"
      fill={props.fill ?? 'none'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="b&#225;&#186;&#163;o h&#195;&#160;nh">
        <path
          id="accent"
          d="M40.4553 10.9409L24.7055 6.0318C24.5712 5.99005 24.4288 5.99005 24.2945 6.0318L8.54462 10.9409C8.38775 10.9896 8.24972 11.0928 8.15147 11.2349C8.05321 11.3769 8.00008 11.55 8.00012 11.728C8.00012 23.4058 12.3921 30.9912 16.0768 35.2981C18.3729 38.0558 21.1318 40.3085 24.2045 41.9343C24.2979 41.978 24.3984 42.0005 24.5 42.0005C24.6016 42.0005 24.7021 41.978 24.7955 41.9343C27.8682 40.3085 30.6271 38.0558 32.9232 35.2981C36.6079 30.9912 40.9998 23.4058 40.9998 11.728C40.9999 11.55 40.9468 11.3769 40.8485 11.2349C40.7502 11.0928 40.6122 10.9896 40.4553 10.9409Z"
          fill="url(#paint0_linear_1627_3892)"
        />
        <g id="glass" filter="url(#filter0_bi_1627_3892)">
          <path
            d="M45.774 6.58718L24.774 0.0417493C24.5949 -0.0139164 24.4051 -0.0139164 24.226 0.0417493L3.226 6.58718C3.01684 6.65219 2.83281 6.78981 2.7018 6.97919C2.57079 7.16857 2.49994 7.39938 2.5 7.63663C2.5 23.2071 8.356 33.3209 13.269 39.0634C16.3305 42.7404 20.0091 45.744 24.106 47.9118C24.2305 47.97 24.3645 48 24.5 48C24.6355 48 24.7695 47.97 24.894 47.9118C28.9909 45.744 32.6695 42.7404 35.731 39.0634C40.644 33.3209 46.5 23.2071 46.5 7.63663C46.5001 7.39938 46.4292 7.16857 46.2982 6.97919C46.1672 6.78981 45.9832 6.65219 45.774 6.58718Z"
            fill="#55D5D2"
          />
          <path
            d="M45.5955 7.16L45.5959 7.16014C45.6701 7.18321 45.7458 7.23536 45.8048 7.32054C45.8642 7.40638 45.9 7.51732 45.9 7.63649V7.63663C45.9 23.042 40.1105 33.0215 35.2751 38.6734L35.275 38.6733L35.2699 38.6795C32.2608 42.2936 28.6487 45.2435 24.6296 47.3728C24.5867 47.3913 24.5429 47.4 24.5 47.4C24.4571 47.4 24.4133 47.3913 24.3704 47.3728C20.3513 45.2435 16.7391 42.2936 13.7301 38.6795L13.7301 38.6795L13.7249 38.6734C8.88948 33.0215 3.1 23.042 3.1 7.63663L3.1 7.63648C3.09997 7.51731 3.13585 7.40638 3.19523 7.32054C3.25416 7.23535 3.32985 7.18321 3.40408 7.16014L3.40454 7.16L24.4041 0.614714C24.4042 0.614684 24.4043 0.614654 24.4044 0.614624C24.4673 0.595125 24.5327 0.595125 24.5956 0.614624C24.5957 0.614654 24.5958 0.614684 24.5959 0.614714L45.5955 7.16ZM35.731 39.0634C40.644 33.3209 46.5 23.2071 46.5 7.63663L24.894 47.9118C28.9909 45.744 32.6695 42.7404 35.731 39.0634Z"
            stroke="url(#paint1_linear_1627_3892)"
            strokeOpacity="0.1"
            strokeWidth="1.2"
          />
        </g>
        <g id="detail" filter="url(#filter1_i_1627_3892)">
          <path
            d="M25.4821 11.5181L28.0654 16.7545L33.8385 17.5934C34.0397 17.6228 34.2288 17.7079 34.3842 17.8391C34.5397 17.9703 34.6554 18.1423 34.7182 18.3357C34.7811 18.5292 34.7886 18.7363 34.7399 18.9338C34.6913 19.1313 34.5884 19.3113 34.4428 19.4534L30.2647 23.5268L31.2465 29.2759C31.2808 29.4765 31.2584 29.6828 31.1817 29.8713C31.105 30.0598 30.977 30.2231 30.8124 30.3428C30.6477 30.4624 30.4528 30.5335 30.2498 30.5482C30.0468 30.5629 29.8437 30.5204 29.6636 30.4257L24.5003 27.7094L19.3371 30.4235C19.1569 30.5183 18.9538 30.5607 18.7508 30.546C18.5478 30.5314 18.3529 30.4602 18.1883 30.3406C18.0236 30.2209 17.8956 30.0576 17.8189 29.8691C17.7422 29.6806 17.7198 29.4743 17.7542 29.2737L18.736 23.5246L14.5578 19.4512C14.4123 19.3091 14.3094 19.1292 14.2607 18.9317C14.212 18.7342 14.2195 18.527 14.2824 18.3335C14.3453 18.1401 14.4609 17.9681 14.6164 17.8369C14.7719 17.7057 14.9609 17.6206 15.1622 17.5912L20.9352 16.7523L23.5185 11.516C23.6181 11.3437 23.7614 11.2006 23.9339 11.1013C24.1063 11.0019 24.3019 10.9497 24.5009 10.95C24.7 10.9502 24.8954 11.0028 25.0677 11.1025C25.2399 11.2023 25.3829 11.3456 25.4821 11.5181Z"
            fill="white"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_bi_1627_3892"
          x="-21.5"
          y="-24"
          width="92"
          height="96"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="12" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_1627_3892"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_1627_3892"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="8" />
          <feGaussianBlur stdDeviation="6" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_1627_3892"
          />
        </filter>
        <filter
          id="filter1_i_1627_3892"
          x="14.229"
          y="10.95"
          width="20.5426"
          height="27.6011"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="8" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_1627_3892"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1627_3892"
          x1="9.37511"
          y1="13.2005"
          x2="45.4566"
          y2="17.7942"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#55D5D2" />
          <stop offset="1" stopColor="#DFD6EE" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1627_3892"
          x1="3.875"
          y1="2.18182"
          x2="46.5"
          y2="2.18182"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C8A6FF" />
          <stop offset="1" stopColor="#69CFB5" />
        </linearGradient>
      </defs>
    </svg>
  );
}
