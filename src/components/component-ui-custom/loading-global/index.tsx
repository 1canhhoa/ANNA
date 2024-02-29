import { cn } from '@/lib/utils';

interface IProps {
  stroke?: string;
  height?: string | number;
  width?: string | number;
}

function LoadingGlobal(props: IProps) {
  return (
    <svg
      className={cn(
        'animate-spin mr-3  text-white',
        props.width ? `w-[${props.width}rem]` : 'w-5',
        props.height ? `h-[${props.height}rem]` : 'h-5'
      )}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25 h-full w-full"
        cx="12"
        cy="12"
        r="10"
        stroke={props?.stroke ?? 'white'}
        strokeWidth="4"
      />
      <path
        className="opacity-75 h-full w-full"
        fill={props?.stroke ?? 'white'}
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}

export default LoadingGlobal;
