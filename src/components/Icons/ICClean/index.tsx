interface IProps {
  width?: string | number;
  height?: string | number;
  fill?: string;
}

export function ICClean(props: IProps) {
  return (
    <svg
      width={props.width ?? '49'}
      height={props.height ?? '48'}
      viewBox="0 0 49 48"
      fill={props.fill ?? 'none'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="disinfectant" clipPath="url(#clip0_1627_3924)">
        <path
          id="accent"
          d="M9.89136 39.6522V42.7827C9.89301 44.1659 10.4432 45.492 11.4213 46.4701C12.3994 47.4482 13.7255 47.9984 15.1087 48H35.9783C37.3615 47.9984 38.6876 47.4482 39.6657 46.4701C40.6438 45.492 41.194 44.1659 41.1957 42.7827V39.6522H9.89136Z"
          fill="url(#paint0_linear_1627_3924)"
        />
        <path
          id="accent_2"
          d="M35.9784 2.08696C36.2551 2.08696 36.5205 1.97702 36.7162 1.78133C36.9119 1.58564 37.0218 1.32023 37.0218 1.04348C37.0218 0.766731 36.9119 0.501318 36.7162 0.305628C36.5205 0.109938 36.2551 0 35.9784 0H13.0218C11.6386 0.00165689 10.3125 0.551877 9.33441 1.52997C8.35632 2.50806 7.8061 3.83416 7.80444 5.21739C7.80444 5.49414 7.91438 5.75955 8.11007 5.95524C8.30576 6.15093 8.57117 6.26087 8.84792 6.26087C9.12467 6.26087 9.39008 6.15093 9.58577 5.95524C9.78146 5.75955 9.8914 5.49414 9.8914 5.21739C9.8914 4.38715 10.2212 3.59091 10.8083 3.00384C11.3954 2.41677 12.1916 2.08696 13.0218 2.08696H35.9784Z"
          fill="#55D5D2"
        />
        <path
          id="accent_3"
          d="M31.8042 27.1305H27.6303V22.9566C27.6303 22.6798 27.5204 22.4144 27.3247 22.2187C27.129 22.023 26.8636 21.9131 26.5868 21.9131H24.4999C24.2231 21.9131 23.9577 22.023 23.762 22.2187C23.5663 22.4144 23.4564 22.6798 23.4564 22.9566V27.1305H19.2825C19.0057 27.1305 18.7403 27.2404 18.5446 27.4361C18.349 27.6318 18.239 27.8972 18.239 28.174V30.2609C18.239 30.5377 18.349 30.8031 18.5446 30.9988C18.7403 31.1945 19.0057 31.3044 19.2825 31.3044H23.4564V35.4783C23.4564 35.7551 23.5663 36.0205 23.762 36.2162C23.9577 36.4118 24.2231 36.5218 24.4999 36.5218H26.5868C26.8636 36.5218 27.129 36.4118 27.3247 36.2162C27.5204 36.0205 27.6303 35.7551 27.6303 35.4783V31.3044H31.8042C32.081 31.3044 32.3464 31.1945 32.5421 30.9988C32.7378 30.8031 32.8477 30.5377 32.8477 30.2609V28.174C32.8477 27.8972 32.7378 27.6318 32.5421 27.4361C32.3464 27.2404 32.081 27.1305 31.8042 27.1305Z"
          fill="url(#paint1_linear_1627_3924)"
        />
        <g id="glass" filter="url(#filter0_bi_1627_3924)">
          <path
            d="M35.9783 12.5217H15.1087C13.7255 12.5234 12.3994 13.0736 11.4213 14.0517C10.4432 15.0298 9.89301 16.3559 9.89136 17.7391V42.7826C9.89301 44.1658 10.4432 45.4919 11.4213 46.47C12.3994 47.4481 13.7255 47.9983 15.1087 48H35.9783C37.3615 47.9983 38.6876 47.4481 39.6657 46.47C40.6438 45.4919 41.194 44.1658 41.1957 42.7826V17.7391C41.194 16.3559 40.6438 15.0298 39.6657 14.0517C38.6876 13.0736 37.3615 12.5234 35.9783 12.5217Z"
            fill="#55D5D2"
          />
          <path
            d="M11.7749 14.4053C12.6593 13.5208 13.8583 13.0233 15.1091 13.0217H35.978C37.2287 13.0233 38.4278 13.5208 39.3122 14.4053C40.1967 15.2897 40.6942 16.4889 40.6957 17.7397V42.782C40.6942 44.0328 40.1967 45.232 39.3122 46.1165C38.4277 47.0009 37.2285 47.4985 35.9777 47.5H15.1093C13.8585 47.4985 12.6593 47.0009 11.7749 46.1165C10.8905 45.2321 10.3929 44.033 10.3914 42.7823V17.7394C10.3929 16.4887 10.8905 15.2897 11.7749 14.4053Z"
            stroke="url(#paint2_linear_1627_3924)"
            strokeOpacity="0.1"
          />
        </g>
        <g id="glass_2" filter="url(#filter1_bi_1627_3924)">
          <path
            d="M33.8912 6.26086H17.1956C16.9188 6.26086 16.6534 6.3708 16.4577 6.56649C16.262 6.76218 16.1521 7.02759 16.1521 7.30434V12.5217H34.9347V7.30434C34.9347 7.02759 34.8248 6.76218 34.6291 6.56649C34.4334 6.3708 34.168 6.26086 33.8912 6.26086Z"
            fill="#55D5D2"
          />
          <path
            d="M17.1956 6.76086H33.8912C34.0354 6.76086 34.1736 6.81812 34.2755 6.92005C34.3774 7.02197 34.4347 7.1602 34.4347 7.30434V12.0217H16.6521V7.30434C16.6521 7.1602 16.7094 7.02197 16.8113 6.92005C16.9132 6.81812 17.0514 6.76086 17.1956 6.76086Z"
            stroke="url(#paint3_linear_1627_3924)"
            strokeOpacity="0.1"
          />
        </g>
        <g id="glass_3" filter="url(#filter2_bi_1627_3924)">
          <path
            d="M29.7175 2.08691H21.3696V6.26083H29.7175V2.08691Z"
            fill="#55D5D2"
          />
          <path
            d="M21.8696 5.76083V2.58691H29.2175V5.76083H21.8696Z"
            stroke="url(#paint4_linear_1627_3924)"
            strokeOpacity="0.1"
          />
        </g>
        <g id="detail" filter="url(#filter3_i_1627_3924)">
          <path
            d="M30.761 30.2609H26.5871V34.4348C26.5871 34.7116 26.4771 34.977 26.2814 35.1727C26.0857 35.3683 25.8203 35.4783 25.5436 35.4783C25.2668 35.4783 25.0014 35.3683 24.8057 35.1727C24.61 34.977 24.5001 34.7116 24.5001 34.4348V30.2609H20.3262C20.0494 30.2609 19.784 30.151 19.5883 29.9553C19.3927 29.7596 19.2827 29.4942 19.2827 29.2174C19.2827 28.9407 19.3927 28.6753 19.5883 28.4796C19.784 28.2839 20.0494 28.1739 20.3262 28.1739H24.5001V24C24.5001 23.7233 24.61 23.4579 24.8057 23.2622C25.0014 23.0665 25.2668 22.9565 25.5436 22.9565C25.8203 22.9565 26.0857 23.0665 26.2814 23.2622C26.4771 23.4579 26.5871 23.7233 26.5871 24V28.1739H30.761C31.0377 28.1739 31.3031 28.2839 31.4988 28.4796C31.6945 28.6753 31.8045 28.9407 31.8045 29.2174C31.8045 29.4942 31.6945 29.7596 31.4988 29.9553C31.3031 30.151 31.0377 30.2609 30.761 30.2609Z"
            fill="#E6F9F8"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_bi_1627_3924"
          x="-2.10864"
          y="0.521729"
          width="55.3044"
          height="59.4783"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="6" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_1627_3924"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_1627_3924"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_1627_3924"
          />
        </filter>
        <filter
          id="filter1_bi_1627_3924"
          x="4.1521"
          y="-5.73914"
          width="42.7826"
          height="30.2609"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="6" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_1627_3924"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_1627_3924"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_1627_3924"
          />
        </filter>
        <filter
          id="filter2_bi_1627_3924"
          x="9.36963"
          y="-9.91309"
          width="32.3478"
          height="28.1739"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="6" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_1627_3924"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_1627_3924"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_1627_3924"
          />
        </filter>
        <filter
          id="filter3_i_1627_3924"
          x="19.2827"
          y="22.9565"
          width="12.5217"
          height="14.5217"
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
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_1627_3924"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1627_3924"
          x1="9.89136"
          y1="39.6522"
          x2="30.4786"
          y2="59.2552"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#55D5D2" />
          <stop offset="1" stopColor="#DFD6EE" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1627_3924"
          x1="18.239"
          y1="21.9131"
          x2="35.4476"
          y2="26.2827"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#55D5D2" />
          <stop offset="1" stopColor="#DFD6EE" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_1627_3924"
          x1="10.8696"
          y1="14.1344"
          x2="41.1957"
          y2="14.1344"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DFD6EE" />
          <stop offset="1" stopColor="#55D5D2" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_1627_3924"
          x1="16.7391"
          y1="6.54545"
          x2="34.9347"
          y2="6.54545"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DFD6EE" />
          <stop offset="1" stopColor="#55D5D2" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_1627_3924"
          x1="21.6305"
          y1="2.27664"
          x2="29.7175"
          y2="2.27664"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DFD6EE" />
          <stop offset="1" stopColor="#55D5D2" />
        </linearGradient>
        <clipPath id="clip0_1627_3924">
          <rect
            width="48"
            height="48"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
