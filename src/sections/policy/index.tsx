import SectionHome from '@/sections/home/view/SectionHome';
import './style.css';

interface IPropPolicy {
  dataPolicyRender?: any;
}

function Policy({ dataPolicyRender }: IPropPolicy) {
  return (
    <div className="mt-[6rem]">
      <div className="container-custom py-24 md:py-12 px-[5rem] md:px-4 m-auto max-sm:pt-[12rem]">
        <h4 className="text-black text-[7.5rem] md:text-2xl font-semibold pb-10 md:pb-4">
          {dataPolicyRender?.title?.rendered}
        </h4>
        <div className="flex justify-between flex-wrap">
          <div
            className="w-full min-h-[300px] policy-page font-semibold"
            dangerouslySetInnerHTML={{
              __html: `${
                dataPolicyRender ? dataPolicyRender?.content?.rendered : ''
              }`,
            }}
          />
        </div>
      </div>
      <SectionHome />
    </div>
  );
}

export default Policy;
