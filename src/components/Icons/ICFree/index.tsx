interface IProps {
  width: string | number;
  height: string | number;
  fill?: string;
}

export function ICFree(props: IProps) {
  return (
    <svg
      width={props.width ?? '48'}
      height={props.height ?? '48'}
      viewBox="0 0 48 48"
      fill={props.fill ?? 'none'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="c&#225;&#187;&#173;a h&#195;&#160;ng">
        <g id="Group">
          <path
            id="accent"
            d="M30.2004 36.46C27.9805 36.46 26.0491 37.6887 25.0444 39.5021V43.8257C28.2988 43.8257 30.937 41.1875 30.937 37.9331V36.46H30.2004Z"
            fill="url(#paint0_linear_1627_3898)"
          />
          <g id="glass" filter="url(#filter0_bi_1627_3898)">
            <path
              d="M32.3488 33.3911C29.2039 33.3911 26.4677 35.1319 25.0444 37.7008V43.8259C29.6548 43.8259 33.3923 40.0884 33.3923 35.4781V33.3911H32.3488Z"
              fill="#4DC0BD"
            />
            <path
              d="M25.6444 43.203V37.8589C26.9861 35.5457 29.4855 33.9911 32.3488 33.9911H32.7923V35.4781C32.7923 39.5552 29.643 42.8968 25.6444 43.203Z"
              stroke="url(#paint1_linear_1627_3898)"
              strokeOpacity="0.1"
              strokeWidth="1.2"
            />
          </g>
          <path
            id="accent_2"
            d="M25.0435 26.0869C25.0435 25.5107 24.5768 25.0435 24 25.0435C23.4233 25.0435 22.9565 25.5107 22.9565 26.0869V46.9565C22.9565 47.5328 23.4233 48 24 48C24.5768 48 25.0435 47.5328 25.0435 46.9565V43.8261V37.7009V26.0869Z"
            fill="url(#paint2_linear_1627_3898)"
          />
        </g>
        <g id="Group 11">
          <g id="glass_2" filter="url(#filter1_bi_1627_3898)">
            <path
              d="M24 32C32.8366 32 40 24.8366 40 16C40 7.16344 32.8366 0 24 0C15.1634 0 8 7.16344 8 16C8 24.8366 15.1634 32 24 32Z"
              fill="#CAF2F1"
            />
            <path
              d="M39.4 16C39.4 24.5052 32.5052 31.4 24 31.4C15.4948 31.4 8.6 24.5052 8.6 16C8.6 7.49481 15.4948 0.6 24 0.6C32.5052 0.6 39.4 7.49481 39.4 16Z"
              stroke="url(#paint3_linear_1627_3898)"
              strokeOpacity="0.1"
              strokeWidth="1.2"
            />
          </g>
          <g id="detail" filter="url(#filter2_i_1627_3898)">
            <path
              d="M23.9997 28.3085C30.7971 28.3085 36.3074 22.7982 36.3074 16.0008C36.3074 9.20346 30.7971 3.69312 23.9997 3.69312C17.2024 3.69312 11.692 9.20346 11.692 16.0008C11.692 22.7982 17.2024 28.3085 23.9997 28.3085Z"
              fill="#55D5D2"
            />
          </g>
          <g id="Vector" filter="url(#filter3_i_1627_3898)">
            <path
              d="M23.9999 22C23.7726 22 23.5546 21.9096 23.3939 21.7489L18.251 16.6059C18.0903 16.4452 18 16.2272 18 15.9999C18 15.7726 18.0903 15.5546 18.251 15.3939L23.3939 10.251C23.5546 10.0903 23.7726 10 23.9999 10C24.2272 10 24.4452 10.0903 24.6059 10.251L29.7489 15.3939C29.9095 15.5546 29.9998 15.7726 29.9998 15.9999C29.9998 16.2272 29.9095 16.4452 29.7489 16.6059L24.6059 21.7489C24.4452 21.9096 24.2272 22 23.9999 22Z"
              fill="#EEFBFB"
            />
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_bi_1627_3898"
          x="1.04443"
          y="9.39111"
          width="56.3478"
          height="58.4348"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="12" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_1627_3898"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_1627_3898"
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
            result="effect2_innerShadow_1627_3898"
          />
        </filter>
        <filter
          id="filter1_bi_1627_3898"
          x="-16"
          y="-24"
          width="80"
          height="80"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="12" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_1627_3898"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_1627_3898"
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
            result="effect2_innerShadow_1627_3898"
          />
        </filter>
        <filter
          id="filter2_i_1627_3898"
          x="11.692"
          y="3.69312"
          width="24.6154"
          height="32.6154"
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
            result="effect1_innerShadow_1627_3898"
          />
        </filter>
        <filter
          id="filter3_i_1627_3898"
          x="18"
          y="10"
          width="11.9998"
          height="20"
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
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_1627_3898"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1627_3898"
          x1="25.29"
          y1="37.9331"
          x2="31.7574"
          y2="38.6517"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#55D5D2" />
          <stop offset="1" stopColor="#DFD6EE" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1627_3898"
          x1="25.3053"
          y1="33.8654"
          x2="33.3923"
          y2="33.8654"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C8A6FF" />
          <stop offset="1" stopColor="#69CFB5" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_1627_3898"
          x1="23.0435"
          y1="29.6348"
          x2="25.362"
          y2="29.664"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#55D5D2" />
          <stop offset="1" stopColor="#DFD6EE" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_1627_3898"
          x1="9"
          y1="1.45455"
          x2="40"
          y2="1.45455"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C8A6FF" />
          <stop offset="1" stopColor="#69CFB5" />
        </linearGradient>
      </defs>
    </svg>
  );
}
