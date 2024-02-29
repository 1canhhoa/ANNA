import ICArrowLeft from '@/components/Icons/ICArrowLeft';
import ICArrowRight from '@/components/Icons/ICArrowRight';
import ListPeople from '@/sections/httt/components/thanksforjoin/Slide';

function ThanksForJoin() {
  return (
    <div className="w-[87.5rem] mx-auto pt-[6.56rem] max-md:w-full">
      <div className="flex justify-between items-center">
        <h3
          className="text-[#7BD7D6] font-bold text-[6.72rem] md:text-[3.8rem] max-md:px-[4.27rem]"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          Những bước chân đồng hành
        </h3>
        <div className="hidden md:flex items-center">
          <div className="prev-join select-none bg-white p-[1.06rem] border border-[#414141] rounded-full mr-[1.25rem]">
            <ICArrowLeft />
          </div>
          <div className="next-join select-none bg-white p-[1.06rem] border border-[#414141] rounded-full">
            <ICArrowRight />
          </div>
        </div>
      </div>
      <div className="pt-[2.94rem]">
        <ListPeople />
      </div>
    </div>
  );
}

export default ThanksForJoin;
