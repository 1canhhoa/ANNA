import ICArrowLeft from '@/components/Icons/ICArrowLeft';
import ICArrowRight from '@/components/Icons/ICArrowRight';
import { Button } from '@/components/ui/button';
import ListStory from '@/sections/httt/components/story/Slide';
import './style.css';
import ICStart from '@/components/Icons/ICStart';
import { fetchDataRest } from '@/lib/fetch-data-rest';

const Story = async () => {
  const dataBlogList = await fetchDataRest(
    'GET',
    'custom/v1/posts/category/viec-tu-te/10'
  );

  return (
    <div className="pt-[75rem] md:pt-[6.56rem]">
      <div className="w-[87.5rem] mx-auto">
        <div className="flex max-md:hidden items-center mb-[1.8rem]">
          <ICStart fill="#777b7f" />
          <p className="text-[3.2rem] font-bold uppercase text-[#777b7f] md:text-[0.875rem] pl-[1.07rem]">
            Tương thân
          </p>
        </div>
        <div className="flex justify-between items-center">
          <h3
            className="text-[#7BD7D6] font-bold text-[6.72rem] md:text-[3.5rem]"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            Những Câu Chuyện Tử Tế
          </h3>
          <div className="hidden md:flex items-center">
            <Button className="prev-story bg-white h-[53px] border border-[#414141] rounded-full mr-3">
              <ICArrowLeft />
            </Button>
            <Button className="next-story bg-white h-[53px] border border-[#414141] rounded-full ml-3">
              <ICArrowRight />
            </Button>
          </div>
        </div>
      </div>
      <div className="pt-[3rem] ">
        <ListStory dataBlogList={dataBlogList} />
      </div>
    </div>
  );
};

export default Story;
