import ICQueto from '@/components/Icons/ICQueto';

interface IProps {
  title: string;
  description: string;
}

export default function ItemV2(props: IProps) {
  return (
    <div className="w-full relative h-full overflow-hidden max-md:hidden bg-[#CAF2F1] flex justify-center items-center">
      <div className="w-[17.6875rem] relative">
        <ICQueto className="w-[4.625rem] h-[4.625rem] absolute top-0 left-0 -translate-x-[2rem] -translate-y-[3.13rem]" />
        <h2 className="text-[#40A09E] text-[1.625rem] font-black leading-[1.3] text-center">
          {props.title}
        </h2>
        <p className="text-[#40A09E] leading-[1.3] font-semibold text-[1.25rem] text-center">
          {props.description}
        </p>
      </div>
    </div>
  );
}
